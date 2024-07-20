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
        hits: [],
        searching: false,
        lastHitIndex: 0,
    };

    return [human, computer];
}
