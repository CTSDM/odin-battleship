import Ship from './ships'

const BOARD_SIZE = 20;
export default class Gameboard {
    constructor() {
        this.size = BOARD_SIZE;
        this.map = this.initializeArr(BOARD_SIZE);
        this.positionsVisited = this.initializeArr(BOARD_SIZE);
    }

    initializeArr(BOARD_SIZE) {
        const arr = [];
        for (let i = 0; i < BOARD_SIZE; ++i)
            arr.push(new Array(BOARD_SIZE));
        return arr;
    }

    addShip(position) {
        if (!checkValidCoordinates(position, this.map))
            return false;
        // We assume the ships are completely straight
        // The first element of position is the most left/bottom
        let shipLength = (position.slice(-1)[1] - position[0][1]) || (position.slice(-1)[0] - position[0][0]);
        const newShip = new Ship(shipLength);
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
