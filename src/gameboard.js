import Ship from './ships'

export default class Gameboard {
    constructor(boardSize) {
        this.size = boardSize;
        this.map = this.initializeArr(boardSize);
        this.positionsVisited = this.initializeArr(boardSize);
    }

    initializeArr(boardSize) {
        const arr = [];
        for (let i = 0; i < boardSize; ++i)
            arr.push(new Array(boardSize));
        return arr;
    }

    addShip(position) {
        if (!checkValidCoordinates(position, this.map))
            return false;
        // We assume the ships are completely straight
        // The first element of position is the most left/bottom
        const xLength = position[position.length - 1][0] - position[0][0];
        const yLength = position[position.length - 1][1] - position[0][1];
        let shipLength = Math.abs(xLength || yLength);
        const newShip = new Ship(shipLength + 1);
        position.forEach((coordinate) => {
            this.map[coordinate[0]][coordinate[1]] = newShip;
        });
        return true;
    }

    receiveAttack(coordinates) {
        // lets check if the position has been visited
        if (this.positionsVisited[coordinates[0]][coordinates[1]] === undefined) {
            if (this.map[coordinates[0]][coordinates[1]] !== undefined) {
                this.map[coordinates[0]][coordinates[1]].hit();
                this.positionsVisited[coordinates[0]][coordinates[1]] = true;
            } else
                this.positionsVisited[coordinates[0]][coordinates[1]] = false;
        }
    }

    areShipsLeft() {
        for (let row = 0; row < this.size; ++row)
            for (let column = 0; column < this.size; ++column) {
                if (this.map[row][column] !== undefined)
                    if (this.positionsVisited[row][column] !== true)
                        return true;
            }
        return false;
    }
}

function checkValidCoordinates(coordinates, map) {
    // check that the input are numbers
    for (let i = 0; i < coordinates.length; ++i) {
        if (typeof coordinates[i][0] !== 'number' || typeof coordinates[i][0] !== 'number')
            return false;
        if (map[coordinates[i][0]] === undefined)
            return true;
        else if (map[coordinates[i][0]][coordinates[i][1]] !== undefined)
            return false;
    }
    return true;
}
