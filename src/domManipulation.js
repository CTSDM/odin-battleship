import Player from './player'

export default function startGame(size) {
    loadGrid(size);
    const playersArr = createPlayers(size);
    let isComputerPlaying = true;
    createEvents(playersArr, isComputerPlaying, size);
    placeShips(playersArr);
}

function loadGrid(size) {
    console.log('doing something...');
    const divBoards = document.querySelectorAll('div.board');
    divBoards.forEach((divBoard) => {
        for (let row = 0; row < size; ++row) {
            for (let column = 0; column < size; ++column) {
                const div = document.createElement('div');
                div.classList.add('cell');
                div.dataset.row = row;
                div.dataset.column = column;
                divBoard.appendChild(div);
            }
        }
    });
}

function createPlayers(size) {
    const playerOne = new Player(size);
    const playerTwo = new Player(size);
    return [playerOne, playerTwo];

}

function createEvents(playersArr, flagComputer, size) {
    // We associate each player with a board;
    // the function inside the event listener should not be an anonymous function
    const divBoards = document.querySelectorAll('div.board');
    let turn = 0;
    divBoards.forEach((divBoard, index) => {
        if (flagComputer === false || !index) {
            divBoard.addEventListener('click', assignEventListener);
        }
    });

    function assignEventListener(event) {
        if (event.target.dataset.row !== undefined) {
            const row = event.target.dataset.row;
            const column = event.target.dataset.column;
            if (registerHit(playersArr, turn, row, column, event.target)) {
                turn = (turn === 0) ? 1 : 0;
                if (playersArr[turn ? 0 : 1].gameboard.areShipsLeft() === false) {
                    disableEventListeners();
                    return;
                }
            }
        }
        if (flagComputer === true && turn === 1) {
            while (true) {
                const coords = computerPlays(playersArr[1].gameboard.map.length);
                const row = coords[0], column = coords[1];
                const cell = divBoards[1].children[row * size + column];
                if (registerHit(playersArr, turn, row, column, cell))
                    turn = (turn === 0 ? 1 : 0);
                else
                    continue;
                break;
            }
            if (playersArr[turn ? 0 : 1].gameboard.areShipsLeft() === false) {
                disableEventListeners();
            }
        }
    }

    function disableEventListeners() {
        const divBoards = document.querySelectorAll('div.board');
        divBoards.forEach((divBoard) => {
            divBoard.removeEventListener('click', assignEventListener);
        });
    }
}


function registerHit(playersArr, turn, row, column, cell) {
    if (playersArr[turn].gameboard.positionsVisited[row][column] === undefined) {
        playersArr[turn].gameboard.receiveAttack([row, column]);
        if (playersArr[turn].gameboard.positionsVisited[row][column] === true)
            cell.classList.add('hit');
        else
            cell.classList.add('no-hit');
        return true;
    } else
        return false;
}

function computerPlays(size) {
    // it just return some random coordinates
    const x = Math.floor(Math.random() * size);
    const y = Math.floor(Math.random() * size);
    return [x, y];
}

function placeShips(playersArr) {
    const coordinatesShipsArr = getFixedCoordinates();
    coordinatesShipsArr.forEach((coordinates) => {
        playersArr[0].gameboard.addShip(coordinates);
        playersArr[1].gameboard.addShip(coordinates);
    });
    console.log(playersArr[0].gameboard.map);
    console.log(playersArr[1].gameboard.map);
}


function getFixedCoordinates() {
    // this function is used to get fixed coordinates to place the ship;
    const ship1 = [[0, 0], [0, 1]];
    const ship2 = [[1, 1], [1, 2], [1, 3], [1, 4], [1, 5]];
    return [ship1, ship2];
}
