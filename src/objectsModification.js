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
    };

    return [human, computer];
}
