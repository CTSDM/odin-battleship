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
    const initialSize = 2;
    const shipArray = [];
    for (let i = 0; i < nShips; ++i) {
        shipArray.push([]);
    }
    for (let i = 0; i < nShips; ++i) {
        for (let j = 0; j < initialSize + i; ++j) {
            shipArray[i].push([0, 0]);
        }
    }
    // The first length is 2 and then increases by 1
    // The ships can have horizontal or vertical orientation
    for (let i = 0; i < nShips; ++i) {
        let positionValid = false;
        let horizontal = getRandomTrueFalse();
        while (positionValid === false) {
            let row, column;
            row = Math.floor(Math.random() * size);
            column = Math.floor(Math.random() * size);

            let selectedDirection = row;
            // check if the ship will actually fit within the bounds of the gameboard
            if (horizontal)
                selectedDirection = column;
            if (selectedDirection + i + initialSize > size - 1)
                continue;

            if (i > 0) {
                // the first ship position is never check as there is no previous ship
                // We check if there are overlapping
                // we check all the current positions for the ships that are already validated
                const totalLength = initialSize + i;
                let noCollision = true;
                for (let k = 0; k < i; ++k) {
                    shipArray[k].forEach((position) => {
                        for (let j = 0; j < totalLength; ++j) {
                            if (horizontal) {
                                if (position[0] === row && position[1] === column + j) {
                                    noCollision = false;
                                    return;
                                }
                            } else {
                                if (position[0] === row + j && position[1] === column) {
                                    noCollision = false;
                                    return;
                                }
                            }
                        }
                    });
                    if (k === i - 1 && noCollision)
                        positionValid = true;
                }
            } else
                positionValid = true;

            if (positionValid) {
                shipArray[i].forEach((position, idx) => {
                    if (horizontal) {
                        position[0] = row;
                        position[1] = column + idx;
                    } else {
                        position[0] = row + idx;
                        position[1] = column;
                    }
                })
            }
        }
    }
    return shipArray;
}

export function computerPlays(size, computerPlayRecord, isRandom) {
    if (isRandom)
        return computerPlaysRandom(size);
    if (computerPlayRecord.searching === false) {
        if (computerPlayRecord.nonSunkShipsHitPosition.length > 0)
            return getNearbyCoordinatesOld(size, computerPlayRecord);
        else
            return computerPlaysRandom(size);
    }
    else {
        const newCords = getNearbyCoordinates(size, computerPlayRecord);
        if (newCords !== -1)
            return newCords;
        else if (computerPlayRecord.nonSunkShipsHitPosition.length > 0)
            return getNearbyCoordinatesOld(size, computerPlayRecord);
        else
            return computerPlaysRandom(size);
    }
}

function getNearbyCoordinatesOld(size, computerRecord) {
    const possiblePos = [[-1, 0], [0, -1], [1, 0], [0, 1]];
    const previousMoves = computerRecord.moves;
    let availableMove;
    for (let j = 0; j < computerRecord.nonSunkShipsHitPosition.length; ++j) {
        const lastHitPosition = computerRecord.nonSunkShipsHitPosition[j];
        for (let i = 0; i < possiblePos.length; ++i) {
            const tempPosition = [lastHitPosition[0] + possiblePos[i][0], lastHitPosition[1] + possiblePos[i][1]];
            if ((tempPosition[0] < 0 || tempPosition[0] > size - 1) || (tempPosition[1] < 0 || tempPosition[1] > size - 1))
                continue;
            availableMove = true;
            previousMoves.forEach((positionVisited) => {
                if (tempPosition[0] === positionVisited[0] && tempPosition[1] === positionVisited[1]) {
                    availableMove = false;
                    return;
                }
            });
            if (i === possiblePos.length - 1)
                computerRecord.searching = false;
            if (availableMove)
                return tempPosition;
        }
    }
    return -1;
}

function getNearbyCoordinates(size, computerRecord) {
    // let's go from top to botton  in counter clock wise direction
    const possiblePos = [[-1, 0], [0, -1], [1, 0], [0, 1]];
    const previousMoves = computerRecord.moves;
    const lastHitPosition = previousMoves[computerRecord.lastHitIndex];
    let availableMove;
    for (let i = 0; i < possiblePos.length; ++i) {
        const tempPosition = [lastHitPosition[0] + possiblePos[i][0], lastHitPosition[1] + possiblePos[i][1]];
        if ((tempPosition[0] < 0 || tempPosition[0] > size - 1) || (tempPosition[1] < 0 || tempPosition[1] > size - 1))
            continue;
        availableMove = true;
        previousMoves.forEach((positionVisited) => {
            if (tempPosition[0] === positionVisited[0] && tempPosition[1] === positionVisited[1]) {
                availableMove = false;
                return;
            }
        });
        if (i === possiblePos.length - 1)
            computerRecord.searching = false;
        if (availableMove)
            return tempPosition;
    }
    return -1;
}

function computerPlaysRandom(size) {
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

function getRandomTrueFalse() {
    const randomNumber = Math.random();
    if (randomNumber >= 0.5)
        return true
    else
        return false
}
