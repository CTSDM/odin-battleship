import Player from './player'

export function addShipToPlayer(player, positions) {
    player.gameboard.addShip(positions);
}

export function createGameRecord() {
    const human = {
        moves: [],
        hits: [],
    };
    const computer = {
        moves: [],
        nonSunkShipsHitPosition: [],
        hits: [],
        searching: false,
        lastHitIndex: 0,
        removeSunkShip(shipSunkCoordinates) {
            for (const coordinate of shipSunkCoordinates) {
                for (let i = this.nonSunkShipsHitPosition.length - 1; i >= 0; --i) {
                    if (this.nonSunkShipsHitPosition[i][0] === coordinate[0] && this.nonSunkShipsHitPosition[i][1] === coordinate[1]) {
                        this.nonSunkShipsHitPosition.splice(i, 1);
                        break;
                    }
                }
            }
        },
    };

    return [human, computer];
}

export function createPlayers(players, size) {
    players.splice(0, players.length);
    const playerOne = new Player(size);
    const playerTwo = new Player(size);
    players.push(playerOne);
    players.push(playerTwo);
}
