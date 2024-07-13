export function isValidShipPosition(ship, boardPlayer1Coord) {
    // when there is a mouse up it needs to be checked if a cell is within the coordinates
    // we have to take into account the size of the selected ship
    // its rotation too must be taken into account
    // in this function indexShip is always different from -1
    const shipCoordinates = ship.getBoundingClientRect();
    let rotated;
    if (ship.style.transform === 'rotate(90deg)')
        rotated = true;
    else
        rotated = false;
    let shipSize = getShipSize(shipCoordinates, rotated);
    if (boardPlayer1Coord.left < shipCoordinates.left && shipCoordinates.left < boardPlayer1Coord.right) {
        if (boardPlayer1Coord.top < shipCoordinates.top && shipCoordinates.top < boardPlayer1Coord.bottom)
            if (rotated) {
                if (shipCoordinates.top + (shipSize - 1) * 50 < boardPlayer1Coord.bottom)
                    return true;
            } else
                if (shipCoordinates.left + (shipSize - 1) * 50 < boardPlayer1Coord.right)
                    return true;
    }
    return false;
}

export function getBoardSize(player) {
    return player.gameboard.size;
}

export function getNewShipPosition(ship, boardPlayer1Coord) {
    const shipCoordinates = ship.getBoundingClientRect();
    let rotated;
    if (ship.style.transform === 'rotate(90deg)')
        rotated = true;
    else
        rotated = false;
    // at this point we know the ship is within bounds;
    // the coordinates of the ship represent all the indexes of the board where the ship will be placed
    // that is, that we need to have an array of arrays with all the position
    // we can use player.gameboad.add ... and set the coordinates like that
    // of course before adding we need to check whether or not that is something that is allowed
    const indexes = [];
    // we need to obtain the size of each ship
    let sizeShip = getShipSize(shipCoordinates, rotated);
    // for loop to have all the indexes
    for (let i = 0; i < sizeShip; ++i) {
        const coordinate = [];
        if (rotated) {
            coordinate.push(Math.floor((shipCoordinates.top - boardPlayer1Coord.top) / 50) + i);
            coordinate.push(Math.floor((shipCoordinates.left - boardPlayer1Coord.left) / 50));
        } else {
            coordinate.push(Math.floor((shipCoordinates.top - boardPlayer1Coord.top) / 50));
            coordinate.push(Math.floor((shipCoordinates.left - boardPlayer1Coord.left) / 50) + i);
        }
        indexes.push(coordinate);
    }
    return indexes;
}

export function shipCollision(player, positions) {
    let isCollision = false;
    positions.forEach((position) => {
        if (player.gameboard.map[position[0]][position[1]]) {
            isCollision = true;
        }
    });
    return isCollision;
}

export function getRandomCoordinates(nShips, size) {
    // Returns a matrix of nShips with different lengths that are not overlapping
    const shipArray = [];
    for (let i = 0; i < nShips; ++i) {
        shipArray.push([]);
    }
    for (let i = 0; i < nShips; ++i) {
        for (let j = 0; j < 2 + i; ++j) {
            shipArray[i].push([0, 0]);
        }
    }
    // The first length is 2 and then increases by 1
    // The ships are placed vertically
    for (let i = 0; i < nShips; ++i) {
        let yValid = false;
        while (yValid === false) {
            let x, y;
            x = Math.floor(Math.random() * size);
            y = Math.floor(Math.random() * size);

            if (x + i + 2 > 9)
                continue;

            if (i > 0) {
                // We check if there are overlapping
                for (let k = 0; k < i; ++k) {
                    if (y === shipArray[k][0][1])
                        break;
                    if (k === i - 1)
                        yValid = true;
                }
            } else
                yValid = true;

            if (yValid) {
                shipArray[i].forEach((position, idx) => {
                    position[0] = x + idx;
                    position[1] = y;
                })
            }
        }
    }
    return shipArray;
}

export function computerPlays(size) {
    // it just return some random coordinates
    const x = Math.floor(Math.random() * size);
    const y = Math.floor(Math.random() * size);
    return [x, y];
}

export function shipsLeft(container) {
    let anyLeft = true;
    [...container].forEach((image) => {
        if (image.style.width !== '0px' && image.style.height !== '0px') {
            anyLeft = false;
            return;
        }
    });
    return anyLeft;
}

function getShipSize(coordinates, isRotated) {
    if (isRotated)
        return Math.ceil((coordinates.bottom - coordinates.top) / 50);
    else
        return Math.ceil((coordinates.right - coordinates.left) / 50);
}
