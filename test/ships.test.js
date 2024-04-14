import Ship from '../src/ships'

test('Checking if a ship of length 1 is sunk after no hits', () => {
    const ship = new Ship(1);
    expect(ship.isSunk()).toBe(false);
});

test('Checking if a ship of length 1 is sunk after 1 hit', () => {
    const ship = new Ship(1);
    ship.hit();
    expect(ship.isSunk()).toBe(true);
});

test('Checking if a ship of length 3 is sunk after 2 hits', () => {
    const ship = new Ship(3);
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(false);
});

