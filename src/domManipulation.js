import imageShip1 from "./images/smallShip.png";
import imageShip2 from "./images/smallShip2.png";

const IMAGES_SHIPS = [imageShip1, imageShip2];
import Player from './player'

// the game now is not working when placing randomly the positions...!

export default function createBoard(size, numberOfShips) {
    // we load the grid
    // we obtain the ship positions
    // we draw it on the board
    // do a mockup!
    // don't launch the events until the game really starts!
    loadGrid(size);
    attachImages();
    const playersArr = [];
    createPlayers(playersArr, size);
    let isComputerPlaying = true;
    const restartPositionButton = document.getElementById('randomize-placement');
    restartPositionButton.addEventListener('click', () => {
        loadGrid(size);
        createPlayers(playersArr, size);
        placeShips(playersArr, numberOfShips, size);
    });
    placeShips(playersArr, numberOfShips, size);
    startGame(playersArr, isComputerPlaying, size);
}

function loadGrid(size) {
    const divBoards = document.querySelectorAll('div.board');
    divBoards.forEach((divBoard) => {
        divBoard.textContent = '';
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

function createPlayers(players, size) {
    players.splice(0, players.length);
    const playerOne = new Player(size);
    const playerTwo = new Player(size);
    players.push(playerOne);
    players.push(playerTwo);
}

function startGame(players, computer, size) {
    createEvents(players, computer, size);
    const startGameButton = document.getElementById('start-game');
    startGameButton.addEventListener('click', () => {
        const divShipPlacement = document.querySelector('.ship-selection');
        divShipPlacement.remove();
    });
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
        coordinatesShipsArr = getRandomCoordinates(nShips, size, i);
        coordinatesShipsArr.forEach((coordinates) => {
            playersArr[i].gameboard.addShip(coordinates);
        });
    }
}

function getRandomCoordinates(nShips, size, shipIndex) {
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
        let yValid = false;
        while (yValid === false) {
            let x, y;
            x = Math.floor(Math.random() * size);
            y = Math.floor(Math.random() * size);

            if (x + i + 2 > 9)
                continue;

            if (i > 0) {
                // We check if there are overlapping
                for (let k = 0; k < i; ++k) {
                    if (y === ship[k][0][1])
                        break;
                    if (k === i - 1)
                        yValid = true;
                }
            } else
                yValid = true;

            if (yValid) {
                ship[i].forEach((position, idx) => {
                    position[0] = x + idx;
                    position[1] = y;
                })
            }
        }
    }
    colorPlayerShips(ship, shipIndex);
    return ship;
}

function colorPlayerShips(matrixPositions, i) {
    // By default the player has the gameboard on the left
    // In this version we can see both players' ships
    if (i === 1)
        i = 0;
    else
        i = 1;
    const gameBoardPlayer = document.querySelectorAll('div.board');
    matrixPositions.forEach((shipPositions) => {
        shipPositions.forEach((position) => {
            gameBoardPlayer[i].children[position[0] * 10 + position[1]].classList.add('humanPlayer');
        });
    });
}

// let's create a drag and drop for the ship placement!
// let's start with one ship!
// add an event listener to the ship

function attachImages() {
    let activation = false;
    let indexShip = -1;
    const initialClickPosition = [];
    const shipContainer = [...document.querySelector('.ships-images').children];
    [...shipContainer].forEach((image, index) => {
        image.src = IMAGES_SHIPS[index];
        const width = 150 * (index + 1);
        image.style.width = `${width}px`;
        image.addEventListener('mousedown', (e) => {
            activation = true;
            indexShip = index;
            initialClickPosition[0] = e.clientX;
            initialClickPosition[1] = e.clientY;

        });
    });
    document.addEventListener('mousemove', (e) => {
        if (activation && indexShip !== -1) {
            shipContainer[indexShip].style.position = 'relative';
            shipContainer[indexShip].style.left = `${e.clientX - initialClickPosition[0]}px`;
            shipContainer[indexShip].style.top = `${e.clientY - initialClickPosition[1]}px`;
        }
    });
    document.addEventListener('mouseup', () => {
        // we need to check whether the mouseup event happened in a valid board position
        if (indexShip !== -1) {
            shipContainer[indexShip].style.position = 'static';
            shipContainer[indexShip].top = 0;
            shipContainer[indexShip].left = 0;
            indexShip = -1;
        }
    });
}
