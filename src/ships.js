export default class Ship {
    #length
    constructor(length) {
        this.#length = length;
    }

    hit() {
        this.#length -= 1;
    }

    isSunk() {
        return this.#length === 0 ? true : false;
    }
}
