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
    const playersArr = [];
    createPlayers(playersArr, size);
    let isComputerPlaying = true;
    placeShips(playersArr[1], 0, numberOfShips, size);
    startGame(playersArr, isComputerPlaying, size);
    manualPositionStart(size, playersArr);
    randomPositionStart(size, playersArr, numberOfShips);
}

function randomPositionStart(size, playersArr, numberOfShips) {
    const restartPositionButton = document.getElementById('randomize-placement');
    restartPositionButton.addEventListener('click', () => {
        const divShips = document.querySelector('.ships-images');
        const manualPositionButton = document.getElementById('manual-placement');
        restartPlayersGrid(size, playersArr);
        playersArr.forEach((player, playerIndex) => {
            placeShips(player, playerIndex, numberOfShips, size);
        });
        if (divShips) {
            divShips.remove();
        }
        setUpManualPosition(manualPositionButton, size, playersArr);
    });
}

function setUpManualPosition(button, size, playersArr) {
    const manualButton = document.createElement('button');
    manualButton.id = 'manual-placement';
    manualButton.textContent = 'Manual placement of the ship';
    manualButton.type = 'button';
    manualButton.addEventListener('click', () => {
        restartPlayersGrid(size, playersArr);
        createDivShips();
        attachImages();
        restartManualShipPlacement(manualButton, size, playersArr);
        manualButton.remove();
    });
    button.insertAdjacentElement('beforebegin', manualButton);
    button.remove();
}

function manualPositionStart(size, playersArr) {
    const manualPositionButton = document.getElementById('manual-placement');
    manualPositionButton.addEventListener('click', () => {
        restartPlayersGrid(size, playersArr);
        createDivShips();
        // we need to change the text and functionality of the manual ship place button...
        // for that i think it is better to remove the button and add a new one so the event listener are also removed
        // so we create a new button and delete the current button...
        attachImages();
        restartManualShipPlacement(manualPositionButton, size, playersArr);
        manualPositionButton.remove();
    });
}

function restartManualShipPlacement(manualPositionButton, size, playersArr) {
    const buttonRestart = document.createElement('button');
    buttonRestart.textContent = 'Restart manual ship placement';
    buttonRestart.type = 'button';
    buttonRestart.id = 'manual-placement';
    buttonRestart.addEventListener('click', () => {
        console.log('restarting manual ship placement...');
        restartPlayersGrid(size, playersArr);
    });
    manualPositionButton.insertAdjacentElement('beforebegin', buttonRestart);
}

function createDivShips() {
    const divShips = document.createElement('div');
    divShips.classList.add('ships-images');
    for (let i = 2; i < 4; ++i) {
        const img = document.createElement('img');
        console.log(img);
        console.log(divShips);
        img.draggable = false;
        img.alt = `Ship of length ${i}`;
        divShips.appendChild(img);
    }
    document.body.appendChild(divShips);
}

function restartPlayersGrid(size, playersArr) {
    loadGrid(size);
    createPlayers(playersArr, size);
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

function placeShips(player, playerIndex, nShips, size) {
    let coordinatesShipsArr;
    coordinatesShipsArr = getRandomCoordinates(nShips, size, playerIndex);
    coordinatesShipsArr.forEach((coordinates) => {
        player.gameboard.addShip(coordinates);
    });
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
        // we need to add some initial 0deg rotation to the ships in order to not get an empty string when calling
        // the attribute style.transform
        image.style.transform = 'rotate(0deg)';
        image.addEventListener('mousedown', (eMouse) => {
            activation = true;
            indexShip = index;
            initialClickPosition[0] = eMouse.clientX;
            initialClickPosition[1] = eMouse.clientY;
        });
    });
    // we add rotation if the user press down the keyCode R
    document.addEventListener('keypress', (eKey) => {
        if (eKey.code === 'KeyR') {
            let newRotationValue;
            if (indexShip !== -1) {
                const image = [...shipContainer][indexShip];
                if (image.style.transform !== 'rotate(90deg)')
                    newRotationValue = 90;
                else
                    newRotationValue = 0;
                image.style.transform = `rotate(${newRotationValue}deg)`;
            }
        }
    });
    document.addEventListener('mousemove', (e) => {
        if (activation && indexShip !== -1) {
            shipContainer[indexShip].style.position = 'relative';
            shipContainer[indexShip].style.left = `${e.clientX - initialClickPosition[0]}px`;
            shipContainer[indexShip].style.top = `${e.clientY - initialClickPosition[1]}px`;
        }
    });
    document.addEventListener('mouseup', () => {
        if (indexShip !== -1) {
            if (isValidShipPosition(shipContainer[indexShip])) {
                console.log('the ship can be placed');
            } else
                console.log('the ship cannot be placed...');
            shipContainer[indexShip].style.position = 'static';
            shipContainer[indexShip].top = 0;
            shipContainer[indexShip].left = 0;
            shipContainer[indexShip].style.transform = 'rotate(0deg)';
            indexShip = -1;
        }
    });
}

function isValidShipPosition(ship) {
    // when there is a mouse up it needs to be checked if a cell is within the coordinates
    // we have to take into account the size of the selected ship
    // its rotation too must be taken into account
    // in this function indexShip is always different from -1
    const boardPlayer1Coord = document.querySelector('.player1').getBoundingClientRect();
    const shipCoordinates = ship.getBoundingClientRect();
    let rotated;
    if (ship.style.trasnform === 'rotate(90deg)')
        rotated = true;
    else
        rotated = false;
    if (boardPlayer1Coord.left < shipCoordinates.left && shipCoordinates.left < boardPlayer1Coord.right) {
        if (boardPlayer1Coord.top < shipCoordinates.top && shipCoordinates.top < boardPlayer1Coord.bottom)
            if (rotated) {
                if (shipCoordinates.top + 150 < boardPlayer1Coord.bottom)
                    return true;
            } else
                if (shipCoordinates.left + 150 < boardPlayer1Coord.right)
                    return true;
    }
    return false;
}
