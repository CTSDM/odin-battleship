import Gameboard from './gameboard'

export default class Player {
    constructor(isHuman = true) {
        this.gameboard = new Gameboard();
        this.human = isHuman;
    }
}
