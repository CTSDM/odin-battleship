import Gameboard from '../src/gameboard'
import Ship from '../src/ships';

test('Check that a ship is placed correctly', () => {
    const gameboard = new Gameboard();
    const coordinates = [[0, 0], [0, 1], [0, 2]];
    gameboard.addShip(coordinates);
    coordinates.forEach((coord) => {
        expect(gameboard.map[coord[0]][coord[1]] instanceof Ship).toBe(true)
    })
})

test('Check that a ship of length 2 is placed correctly', () => {
    const gameboard = new Gameboard();
    const coordinates = [[0, 0], [0, 1]];
    gameboard.addShip(coordinates);
    gameboard.receiveAttack(coordinates[0]);
    expect(gameboard.areShipsLeft()).toBe(true);
})

test('Check that there are no ships left', () => {
    const gameboard = new Gameboard();
    const coordinates = [[0, 0], [0, 1]];
    gameboard.addShip(coordinates);
    coordinates.forEach((coord) => gameboard.receiveAttack(coord));
    expect(gameboard.areShipsLeft()).toBe(false);
})

test('Place two ships, sink one', () => {
    const gameboard = new Gameboard();
    const coordinatesA = [[0, 0], [0, 1]];
    gameboard.addShip(coordinatesA);
    coordinatesA.forEach((coord) => gameboard.receiveAttack(coord));
    const coordinatesB = [[1, 1], [1, 2]];
    gameboard.addShip(coordinatesB);
    expect(gameboard.areShipsLeft()).toBe(true);
})

test('Place two ships such that overlap', () => {
    const gameboard = new Gameboard();
    const coordinatesA = [[0, 0], [0, 1]];
    gameboard.addShip(coordinatesA);
    coordinatesA.forEach((coord) => gameboard.receiveAttack(coord));
    const coordinatesB = [[0, 0], [1, 0]];
    expect(gameboard.addShip(coordinatesB)).toBe(false);
})

