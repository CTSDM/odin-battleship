import Gameboard from './gameboard'

export default class Player {
    constructor(size, isHuman = true) {
        this.gameboard = new Gameboard(size);
        this.human = isHuman;
    }
}
