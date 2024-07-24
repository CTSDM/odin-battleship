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
