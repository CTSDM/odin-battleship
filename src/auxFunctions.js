export function getSunkShipPositions(gameboard, indexX, indexY) {
    // This function gets a sunk ship and will return all the gameboard coordinates containing
    // this ship object
    const ship = gameboard.map[indexX][indexY];
    const sunkShipCoordinates = [];
    gameboard.map.forEach((row, indexRow) => {
        row.forEach((item, indexColumn) => {
            if (item === ship)
                sunkShipCoordinates.push([indexRow, indexColumn]);
        });
    });
    return sunkShipCoordinates;
}

export function isShipSunk(gameboard, row, column) {
    const ship = gameboard.map[row][column];
    if (ship.isSunk())
        return true
    else
        return false
}

export function getLaunchingCoordinates(coordinateToBeHit, boardSize) {
    // In this function a semi random walk will be used to simulate 
    // that the computers is choosing a position.
    // It will start from one random corner and then circulate around until
    // it arrives to the desired coordinate that was previously selected
    // as the next hit
    const cornersCoordinates = [[0, 0], [0, boardSize - 1], [boardSize - 1, 0], [boardSize - 1, boardSize - 1]];
    const coordinatesToTravel = [];
    while (true) {
        const randomStart = cornersCoordinates[Math.floor(Math.random() * 4)];
        if (randomStart[0] === coordinateToBeHit[0] && randomStart[1] === coordinateToBeHit[1])
            continue
        coordinatesToTravel.push(randomStart);
        break;
    }
    let arrivedDestination = false;
    let x = 0;
    while (!arrivedDestination) {
        ++x;
        const lastCoordinate = coordinatesToTravel[coordinatesToTravel.length - 1];
        const closerProbability = 0.8;
        let getCloserFlag = Math.random() < closerProbability ? 1 : 0;
        let randomAxis = Math.round(Math.random());
        let otherAxis = Math.abs(randomAxis - 1);
        const newCoordinate = [lastCoordinate[0], lastCoordinate[1]];
        if (!getCloserFlag && coordinatesToTravel.length < 20) {
            while (true) {
                let signDirection = Math.round(Math.random()) ? -1 : 1;
                let newAxisPosition = lastCoordinate[randomAxis] + signDirection;
                if (newAxisPosition < 0 || newAxisPosition > boardSize - 1)
                    continue
                newCoordinate[randomAxis] = newAxisPosition;
                newCoordinate[otherAxis] = lastCoordinate[otherAxis];
                coordinatesToTravel.push(newCoordinate);
                break;
            }
        }
        else {
            if (lastCoordinate[randomAxis] > coordinateToBeHit[randomAxis])
                newCoordinate[randomAxis] = lastCoordinate[randomAxis] - 1;
            else if (lastCoordinate[randomAxis] < coordinateToBeHit[randomAxis])
                newCoordinate[randomAxis] = lastCoordinate[randomAxis] + 1;
            else
                continue
            newCoordinate[otherAxis] = lastCoordinate[otherAxis];
            coordinatesToTravel.push(newCoordinate);
        }
        if (newCoordinate[0] === coordinateToBeHit[0] && newCoordinate[1] === coordinateToBeHit[1])
            arrivedDestination = true;
    }
    return coordinatesToTravel;
}


