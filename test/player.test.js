import Gameboard from '../src/gameboard';
import Player from '../src/player'

const size = 10;
test('Player has a gameboard', () => {
    const player = new Player(size);
    expect(player.gameboard instanceof Gameboard).toBe(true);
});

test('Player is human', () => {
    const player = new Player(size);
    expect(player.human).toBe(true);
});

test('Player is not human', () => {
    const player = new Player(size, false);
    expect(player.human).toBe(false);
});

