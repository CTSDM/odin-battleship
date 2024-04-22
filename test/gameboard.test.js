import Gameboard from '../src/gameboard'
import Ship from '../src/ships';

const BOARD_SIZE = 20;

test('Check that a ship is placed correctly', () => {
    const gameboard = new Gameboard(BOARD_SIZE);
    const coordinates = [[0, 0], [0, 1], [0, 2]];
    gameboard.addShip(coordinates);
    coordinates.forEach((coord) => {
        expect(gameboard.map[coord[0]][coord[1]] instanceof Ship).toBe(true)
    })
})

test('Check that a ship of length 2 is placed correctly', () => {
    const gameboard = new Gameboard(BOARD_SIZE);
    const coordinates = [[0, 0], [0, 1]];
    gameboard.addShip(coordinates);
    gameboard.receiveAttack(coordinates[0]);
    expect(gameboard.areShipsLeft()).toBe(true);
})

test('Check that a ship of length 5 is placed correctly', () => {
    const gameboard = new Gameboard(BOARD_SIZE);
    const coordinates = [[0, 0], [0, 1], [0, 2], [0, 3], [0, 4]];
    gameboard.addShip(coordinates);
    expect(gameboard.map.reduce((total, row) => {
        total += row.reduce((totalRow, curr) => {
            if (curr !== undefined)
                totalRow += 1;
            return totalRow;
        }, 0);
        return total;
    }, 0)).toBe(5);
})

test('Check that a ship of length 5 is placed correctly and sunk', () => {
    const gameboard = new Gameboard(BOARD_SIZE);
    const coordinates = [[0, 0], [0, 1], [0, 2], [0, 3], [0, 4]];
    gameboard.addShip(coordinates);
    coordinates.forEach((coord) => gameboard.receiveAttack(coord));
    expect(gameboard.areShipsLeft()).toBe(false);
})

test('Check that a ship of length 5 is placed correctly and not sunk', () => {
    const gameboard = new Gameboard(BOARD_SIZE);
    const coordinates = [[0, 0], [0, 1], [0, 2], [0, 3], [0, 4]];
    gameboard.addShip(coordinates);
    gameboard.receiveAttack(coordinates[0]);
    gameboard.receiveAttack(coordinates[4]);
    expect(gameboard.areShipsLeft()).toBe(true);
})

test('Check that there are no ships left', () => {
    const gameboard = new Gameboard(BOARD_SIZE);
    const coordinates = [[0, 0], [0, 1]];
    gameboard.addShip(coordinates);
    coordinates.forEach((coord) => gameboard.receiveAttack(coord));
    expect(gameboard.areShipsLeft()).toBe(false);
})

test('Place two ships, sink one', () => {
    const gameboard = new Gameboard(BOARD_SIZE);
    const coordinatesA = [[0, 0], [0, 1]];
    gameboard.addShip(coordinatesA);
    coordinatesA.forEach((coord) => gameboard.receiveAttack(coord));
    const coordinatesB = [[1, 1], [1, 2]];
    gameboard.addShip(coordinatesB);
    expect(gameboard.areShipsLeft()).toBe(true);
})

test('Place two ships such that overlap', () => {
    const gameboard = new Gameboard(BOARD_SIZE);
    const coordinatesA = [[0, 0], [0, 1]];
    gameboard.addShip(coordinatesA);
    coordinatesA.forEach((coord) => gameboard.receiveAttack(coord));
    const coordinatesB = [[0, 0], [1, 0]];
    expect(gameboard.addShip(coordinatesB)).toBe(false);
})

