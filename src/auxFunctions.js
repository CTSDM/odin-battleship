export function getSunkShipPositions(gameboard, indexX, indexY) {
    // This function gets a sunk ship and will return all the gameboard coordinates containing
    // this ship object
    const ship = gameboard.map[indexX][indexY];
    console.log(ship);
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
    if (ship.isSunk()) {
        console.log('sunkkk');
        return true
    } else {
        console.log('noooooooooot sunku');
        return false
    }
}
