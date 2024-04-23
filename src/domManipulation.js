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
    const divBoards = document.querySelectorAll('div.board');
    let turn = 0;
    divBoards.forEach((divBoard, index) => {
        if (flagComputer === false || !index) {
            divBoard.addEventListener('click', (e) => {
                if (e.target.dataset.row !== undefined) {
                    const row = e.target.dataset.row;
                    const column = e.target.dataset.column;
                    if (playersArr[index].gameboard.positionsVisited[row][column] === undefined && turn === index) {
                        turn = (turn === 0) ? 1 : 0;
                        playersArr[index].gameboard.receiveAttack([row, column]);
                        if (playersArr[index].gameboard.positionsVisited[row][column] === true)
                            e.target.classList.add('hit');
                        else
                            e.target.classList.add('no-hit');
                    }
                }
                if (flagComputer === true && turn === 1) {
                    while (true) {
                        const coords = computerPlays(playersArr[1].gameboard.map.length);
                        const row = coords[0], column = coords[1];
                        if (playersArr[1].gameboard.positionsVisited[row][column] === undefined) {
                            const cell = divBoards[1].children[row * size + column];
                            turn = (turn === 0) ? 1 : 0;
                            playersArr[1].gameboard.receiveAttack(coords);
                            if (playersArr[1].gameboard.positionsVisited[row][column] === true) {
                                cell.classList.add('hit');
                            }
                            else
                                cell.classList.add('no-hit');
                        } else
                            continue;
                        break;
                    }
                }
                if (playersArr[index].gameboard.areShipsLeft() === false) {
                    console.log('end game');
                    // load logic for end game
                    // we should be able to disable all the event listeners...
                }
            });
        }
    });
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
