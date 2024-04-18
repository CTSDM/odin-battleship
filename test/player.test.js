import Gameboard from '../src/gameboard';
import Player from '../src/player'

test('Player has a gameboard', () => {
    const player = new Player();
    expect(player.gameboard instanceof Gameboard).toBe(true);
});

test('Player is human', () => {
    const player = new Player();
    expect(player.human).toBe(true);
});

test('Player is not human', () => {
    const player = new Player(false);
    expect(player.human).toBe(false);
});

