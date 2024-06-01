import Player from './player'

export default function startGame(size, numberOfShips) {
    loadGrid(size);
    const playersArr = createPlayers(size);
    let isComputerPlaying = true;
    createEvents(playersArr, isComputerPlaying, size);
    placeShips(playersArr, numberOfShips, size);
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
    divBoards[1].addEventListener('click', assignEventListener);
    if (flagComputer === false)
        divBoards[0].addEventListener('click', assignEventListener);

    function assignEventListener(event) {
        if (event.target.dataset.row !== undefined) {
            const row = event.target.dataset.row;
            const column = event.target.dataset.column;
            if (registerHit(playersArr, turn, row, column, event.target)) {
                turn = (turn === 0) ? 1 : 0;
                if (playersArr[turn ? 0 : 1].gameboard.areShipsLeft() === false) {
                    disableEventListeners();
                    endGame();
                    return;
                }
            }
        }
        if (flagComputer === true && turn === 1) {
            while (true) {
                const coords = computerPlays(playersArr[1].gameboard.map.length);
                const row = coords[0], column = coords[1];
                const cell = divBoards[0].children[row * size + column];
                if (registerHit(playersArr, turn, row, column, cell))
                    turn = (turn === 0 ? 1 : 0);
                else
                    continue;
                break;
            }
            if (playersArr[turn ? 0 : 1].gameboard.areShipsLeft() === false) {
                disableEventListeners();
                endGame(turn);
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

function endGame(turn) {
    console.log('end game!');
    console.log(`player ${turn ? 0 : 1} won!`);
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

function placeShips(playersArr, nShips, size) {
    let coordinatesShipsArr;
    for (let i = 0; i < 2; ++i) {
        coordinatesShipsArr = getRandomCoordinates(nShips, size);
        coordinatesShipsArr.forEach((coordinates) => {
            console.log('printingCoordinates');
            console.log(coordinates);
            playersArr[i].gameboard.addShip(coordinates);
        });
    }
    console.log(playersArr[0].gameboard.map);
    console.log(playersArr[1].gameboard.map);
}

function getRandomCoordinates(nShips, size) {
    // Returns a matrix of nShips with different lengths that are not overlapping
    const ship = [];
    for (let i = 0; i < nShips; ++i) {
        ship.push([]);
    }
    for (let i = 0; i < nShips; ++i) {
        for (let j = 0; j < 2 + i; ++j) {
            ship[i].push([0, 0]);
        }
    }
    // The first length is 2 and then increases by 1
    // The ships are placed vertically
    for (let i = 0; i < nShips; ++i) {
        let isShipValid = false;
        while (!isShipValid) {
            let x, y;
            x = Math.floor(Math.random() * size);
            y = Math.floor(Math.random() * size);
            if (i > 0) {
                // We check if there are overlapping
                for (let k = 0; i < k; ++k) {
                    if (y === ship[k][0][1])
                        continue
                }
            }

            if (x + i + 2 > 9)
                continue

            ship[i].forEach((position, idx) => {
                position[0] = x + idx;
                position[1] = y;
            })
            isShipValid = true;
        }
    }
    return ship;
}
