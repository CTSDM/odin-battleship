import imageShip1 from "./images/smallShip.png";

const IMAGES_SHIPS = imageShip1;
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
    placeShips(playersArr[1], 0, numberOfShips, size);
    randomPositionStart(size, playersArr, numberOfShips);
    setUpManualPosition(size, playersArr, numberOfShips);
}

function randomPositionStart(size, playersArr, numberOfShips) {
    const restartPositionButton = document.getElementById('randomize-placement');
    restartPositionButton.addEventListener('click', () => {
        const divShips = document.querySelector('.ships-images');
        restartPlayersGrid(size, playersArr);
        playersArr.forEach((player, playerIndex) => {
            placeShips(player, playerIndex, numberOfShips, size);
        });
        if (divShips) {
            divShips.remove();
        }
        setUpManualPosition(size, playersArr, numberOfShips);
        setUpStartButton();
        // the second parameter of start game must be modified
        startGame(playersArr, true, size);
    });
}

function setUpManualPosition(size, playersArr, nShips) {
    const buttonPrev = document.getElementById('manual-placement');
    const manualButton = document.createElement('button');
    manualButton.id = 'manual-placement';
    manualButton.textContent = 'Manual placement of the ship';
    manualButton.type = 'button';
    manualButton.addEventListener('click', () => {
        restartPlayersGrid(size, playersArr);
        createDivShips(nShips);
        attachImages(playersArr[0]);
        restartManualShipPlacement(manualButton, size, playersArr);
        manualButton.remove();
    });
    buttonPrev.insertAdjacentElement('beforebegin', manualButton);
    buttonPrev.remove();
}

function manualPositionStart(size, playersArr) {
    const manualPositionButton = document.getElementById('manual-placement');
    manualPositionButton.addEventListener('click', () => {
        restartPlayersGrid(size, playersArr);
        createDivShips();
        // we need to change the text and functionality of the manual ship place button...
        // for that i think it is better to remove the button and add a new one so the event listener are also removed
        // so we create a new button and delete the current button...
        attachImages(playersArr[0]);
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

function createDivShips(nShips) {
    const divShips = document.createElement('div');
    divShips.classList.add('ships-images');
    for (let i = 0; i < nShips; ++i) {
        const img = document.createElement('img');
        console.log(img);
        console.log(divShips);
        img.draggable = false;
        img.alt = `Ship of length ${i + 2}`;
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
        colorPlayerShips(coordinates, playerIndex);
        player.gameboard.addShip(coordinates);
    });
}

function getRandomCoordinates(nShips, size, playerIndex) {
    // Returns a matrix of nShips with different lengths that are not overlapping
    const shipArray = [];
    for (let i = 0; i < nShips; ++i) {
        shipArray.push([]);
    }
    for (let i = 0; i < nShips; ++i) {
        for (let j = 0; j < 2 + i; ++j) {
            shipArray[i].push([0, 0]);
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
                    if (y === shipArray[k][0][1])
                        break;
                    if (k === i - 1)
                        yValid = true;
                }
            } else
                yValid = true;

            if (yValid) {
                shipArray[i].forEach((position, idx) => {
                    position[0] = x + idx;
                    position[1] = y;
                })
            }
        }
    }
    return shipArray;
}

function colorPlayerShips(shipPositions, i) {
    // By default the player has the gameboard on the left
    // In this version we can see both players' ships
    if (i === 1)
        i = 0;
    else
        i = 1;
    const gameBoardPlayer = document.querySelectorAll('div.board');
    shipPositions.forEach((position) => {
        gameBoardPlayer[i].children[position[0] * 10 + position[1]].classList.add('humanPlayer');
    });
}
// let's create a drag and drop for the ship placement!
// let's start with one ship!
// add an event listener to the ship

function attachImages(player) {
    let activation = false;
    let indexShip = -1;
    const initialClickPosition = [];
    const shipContainer = [...document.querySelector('.ships-images').children];
    [...shipContainer].forEach((image, index) => {
        image.src = IMAGES_SHIPS;
        const width = 100 + 50 * index;
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
                // let's place the ship
                // once i know the ship position is valid i can calculate the index where the ship can be placed
                // in this position is should check if there are ships on the to positions where the new ship can be placed
                const positions = getNewShipPosition(shipContainer[indexShip], player);
                if (positions) {
                    // place the ship within the gameboard
                    // delete the image that is associated to the placed ship
                    console.log(positions);
                    console.log('the ship can be placed');
                    shipContainer[indexShip].remove();
                } else {
                    console.log('the ship cannot be placed...');
                }
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

function getNewShipPosition(ship, player) {
    const boardPlayer1Coord = document.querySelector('.player1').getBoundingClientRect();
    const shipCoordinates = ship.getBoundingClientRect();
    let rotated;
    if (ship.style.transform === 'rotate(90deg)')
        rotated = true;
    else
        rotated = false;
    // at this point we know the ship is within bounds;
    // the coordinates of the ship represent all the indexes of the board where the ship will be placed
    // that is, that we need to have an array of arrays with all the position
    // we can use player.gameboad.add ... and set the coordinates like that
    // of course before adding we need to check whether or not that is something that is allowed
    const indexes = [];
    // we need to obtain the size of each ship
    let sizeShip = getShipSize(shipCoordinates, rotated);
    console.log(sizeShip);
    // for loop to have all the indexes
    for (let i = 0; i < sizeShip; ++i) {
        const coordinate = [];
        if (rotated) {
            coordinate.push(Math.floor((shipCoordinates.top - boardPlayer1Coord.top) / 50) + i);
            coordinate.push(Math.floor((shipCoordinates.left - boardPlayer1Coord.left) / 50));
        } else {
            coordinate.push(Math.floor((shipCoordinates.top - boardPlayer1Coord.top) / 50));
            coordinate.push(Math.floor((shipCoordinates.left - boardPlayer1Coord.left) / 50) + i);
        }
        indexes.push(coordinate);
    }
    console.log(player.gameboard);
    player.gameboard.addShip(indexes);
    colorPlayerShips(indexes, 1);
    return indexes;
}

function getShipSize(coordinates, isRotated) {
    if (isRotated)
        return Math.round((coordinates.bottom - coordinates.top) / 50);
    else
        return Math.round((coordinates.right - coordinates.left) / 50);
}

function isValidShipPosition(ship) {
    // when there is a mouse up it needs to be checked if a cell is within the coordinates
    // we have to take into account the size of the selected ship
    // its rotation too must be taken into account
    // in this function indexShip is always different from -1
    const boardPlayer1Coord = document.querySelector('.player1').getBoundingClientRect();
    const shipCoordinates = ship.getBoundingClientRect();
    let rotated;
    if (ship.style.transform === 'rotate(90deg)')
        rotated = true;
    else
        rotated = false;
    console.log(boardPlayer1Coord);
    console.log(shipCoordinates);
    let shipSize = getShipSize(shipCoordinates);
    if (boardPlayer1Coord.left < shipCoordinates.left && shipCoordinates.left < boardPlayer1Coord.right) {
        if (boardPlayer1Coord.top < shipCoordinates.top && shipCoordinates.top < boardPlayer1Coord.bottom)
            if (rotated) {
                if (shipCoordinates.top + (shipSize - 1) * 50 < boardPlayer1Coord.bottom)
                    return true;
            } else
                if (shipCoordinates.left + (shipSize - 1) * 50 < boardPlayer1Coord.right)
                    return true;
    }
    return false;
}

// <button id="start-game" type="button">Start the game!</button>
function setUpStartButton() {
    const button = document.getElementById('start-game');
    console.log(button);
    if (button)
        return;
    const divContainer = document.querySelector('.ship-selection');
    const startButton = document.createElement('button');
    startButton.id = 'start-game';
    startButton.type = 'button';
    startButton.textContent = 'Start the game!';
    divContainer.insertAdjacentElement('beforeend', startButton);
}
