import imageShip1 from "./images/smallShip.png";
import { shipsLeft, isValidShipPosition, getBoardSize, getNewShipPosition, shipCollision, computerPlays, getRandomCoordinates } from "./calculationFunctions";
import { addShipToPlayer, createGameRecord } from "./objectsModification";
import { setUpPlayerName } from "./usernameDOM.js";

const IMAGES_SHIPS = imageShip1;
import Player from './player'
import Gameboard from "./gameboard.js";

export default function createBoard(size, numberOfShips) {
    loadGrid(size);
    setUpPlayerName(disableButtons);
    setUpFunctionality(numberOfShips, size);
    disableButtons(true);
}

function setUpFunctionality(numberOfShips, size) {
    const playersArr = [];
    createPlayers(playersArr, size);
    randomPositionStart(playersArr, numberOfShips);
    setUpManualPosition(playersArr, numberOfShips);
    createDivShips(numberOfShips);
    setUpEventListenersShips(playersArr);
    startGame(playersArr, true, numberOfShips);
}

function disableButtons(flagDisable, flagLastButton = false) {
    const shipButtons = [...document.querySelector('.ship-selection').children];
    shipButtons.forEach((button, index) => {
        if (flagLastButton)
            if (index === shipButtons.length - 1)
                return
        button.disabled = flagDisable;
    });
}

function randomPositionStart(playersArr, numberOfShips) {
    const restartPositionButton = document.getElementById('randomize-placement');
    restartPositionButton.textContent = 'Randomize ship placement';
    restartPositionButton.addEventListener('click', () => {
        restartPlayersGrid(playersArr);
        playersArr.forEach((player, playerIndex) => {
            placeShipsGameboard(player, playerIndex, numberOfShips);
        });
        setUpManualPosition(playersArr, numberOfShips);
        // we enable the button of starting the game
        disableDivShips();
        disableStartButton(false);
    });
}

function placeShipsGameboard(player, playerIndex, nShips) {
    let coordinatesShipsArr;
    let size = player.gameboard.size;
    coordinatesShipsArr = getRandomCoordinates(nShips, size);
    coordinatesShipsArr.forEach((coordinates) => {
        addShipToPlayer(player, coordinates);
        if (playerIndex === 1)
            colorPlayerShips(coordinates, playerIndex);
    });
}

function setUpDivShips() {
    const shipContainer = [...document.querySelector('.ships-images').children];
    [...shipContainer].forEach((image) => {
        image.src = IMAGES_SHIPS;
    });
    enableDivShips();
    disableDivShips();
}

function enableDivShips() {
    const shipContainer = [...document.querySelector('.ships-images').children];
    [...shipContainer].forEach((image, index) => {
        restartImagePosition(image);
        restartSizeImage(image, index);
    });
}

function restartImagePosition(image) {
    image.style.position = 'static';
    image.top = 0;
    image.left = 0;
    image.style.transform = 'rotate(0deg)';
}

function restartSizeImage(image, index) {
    const width = 100 + 50 * index;
    image.style.width = `${width}px`;
    image.style.height = '50px';
}

function setUpEventListenersShips(playersArr) {
    let activation = false;
    let indexShip = -1;
    const initialClickPosition = [];
    const shipContainer = [...document.querySelector('.ships-images').children];
    [...shipContainer].forEach((image, index) => {
        image.addEventListener('mousedown', (eMouse) => {
            activation = true;
            indexShip = index;
            initialClickPosition[0] = eMouse.clientX;
            initialClickPosition[1] = eMouse.clientY;
        });
    });

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
            const boardPlayer1Coord = document.querySelector('.player1').getBoundingClientRect();
            if (isValidShipPosition(shipContainer[indexShip], boardPlayer1Coord)) {
                // let's place the ship
                // once i know the ship position is valid i can calculate the index where the ship can be placed
                // in this position is should check if there are ships on the to positions where the new ship can be placed
                const positions = getNewShipPosition(shipContainer[indexShip], boardPlayer1Coord);
                if (!shipCollision(playersArr[1], positions)) {
                    addShipToPlayer(playersArr[1], positions);
                    colorPlayerShips(positions, 1);
                    // place the ship within the gameboard
                    // delete the image that is associated to the placed ship
                    console.log('the ship can be placed');
                    shipContainer[indexShip].style.width = 0;
                    shipContainer[indexShip].style.height = 0;
                    // the condition below  means that all the ships have been placed correctly
                    if (shipsLeft(shipContainer)) {
                        placeShipsGameboard(playersArr[0], 0, shipContainer.length);
                        disableStartButton(false);
                        console.log('no ships left');
                    }
                } else {
                    console.log('the ship cannot be placed...');
                    restartImagePosition(shipContainer[indexShip]);
                }
            } else {
                console.log('the ship cannot be placed...');
                restartImagePosition(shipContainer[indexShip]);
            }
            indexShip = -1;
        }
    });
}

function disableDivShips() {
    const shipContainer = [...document.querySelector('.ships-images').children];
    [...shipContainer].forEach((image) => {
        image.style.width = '0px';
        image.style.height = '0px';
    });
}

function disableStartButton(flagEnable) {
    const button = document.getElementById('start-game');
    button.disabled = flagEnable;
}

function setUpManualPosition(playersArr, nShips) {
    const buttonPrev = document.getElementById('manual-placement');
    const manualButton = document.createElement('button');
    manualButton.id = 'manual-placement';
    manualButton.textContent = 'Manual placement of the ship';
    manualButton.type = 'button';
    manualButton.addEventListener('click', () => {
        restartPlayersGrid(playersArr);
        restartManualShipPlacement(manualButton, playersArr, nShips);
        manualButton.remove();
        disableStartButton(true);
        enableDivShips();
    });
    buttonPrev.insertAdjacentElement('beforebegin', manualButton);
    buttonPrev.remove();
}

function restartManualShipPlacement(manualPositionButton, playersArr) {
    const buttonRestart = document.createElement('button');
    buttonRestart.textContent = 'Restart manual ship placement';
    buttonRestart.type = 'button';
    buttonRestart.id = 'manual-placement';
    buttonRestart.addEventListener('click', () => {
        disableStartButton(true);
        restartPlayersGrid(playersArr);
        enableDivShips();
    });
    manualPositionButton.insertAdjacentElement('beforebegin', buttonRestart);
}

function createDivShips(nShips) {
    const divShips = document.createElement('div');
    divShips.classList.add('ships-images');
    for (let i = 0; i < nShips; ++i) {
        const img = document.createElement('img');
        img.draggable = false;
        img.alt = `Ship of length ${i + 2}`;
        divShips.appendChild(img);
    }
    document.body.appendChild(divShips);
    setUpDivShips();
}

function restartPlayersGrid(playersArr) {
    const size = getBoardSize(playersArr[0]);
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

function startGame(players, computer, nShips) {
    const startGameButton = document.getElementById('start-game');
    startGameButton.textContent = 'Start game!';
    startGameButton.addEventListener('click', () => {
        createEvents(players, computer, nShips);
        removeAllButtons();
    });
}

function removeAllButtons() {
    const buttonsDiv = document.querySelector('.ship-selection');
    while (buttonsDiv.children.length > 0)
        buttonsDiv.children[0].remove();
}

function createEvents(playersArr, flagComputer, numberOfShips) {
    const gameRecord = createGameRecord();
    // We associate each player with a board;
    // the function inside the event listener should not be an anonymous function
    const size = getBoardSize(playersArr[0]);
    const divBoards = document.querySelectorAll('div.board');
    let turn = 0;
    let computerIsPlaying = false;
    divBoards[1].addEventListener('click', assignEventListener);
    if (flagComputer === false)
        divBoards[0].addEventListener('click', assignEventListener);

    function assignEventListener(event) {
        const row = event.target.dataset.row;
        const column = event.target.dataset.column;
        let checkValid = checkValidPosition(playersArr, turn, row, column);
        if (checkValid && computerIsPlaying === false) {
            registerHit(playersArr, turn, row, column, event.target, gameRecord[turn]);
            gameRecord[turn].moves.push([row, column]);
            turn = (turn === 0) ? 1 : 0;
            if (playersArr[turn ? 0 : 1].gameboard.areShipsLeft() === false) {
                disableEventListeners();
                endGame(turn, playersArr, numberOfShips);
                return;
            }
        }
        if (flagComputer === true && turn === 1 && computerIsPlaying === false) {
            computerIsPlaying = true;
            enableComputerThinkingDiv(true);
            setTimeout(function() {
                while (true) {
                    const coords = computerPlays(playersArr[1].gameboard.map.length);
                    const row = coords[0], column = coords[1];
                    const cell = divBoards[0].children[row * size + column];
                    let checkValid = checkValidPosition(playersArr, turn, row, column);
                    gameRecord[turn].moves.push([row, column]);
                    if (checkValid) {
                        registerHit(playersArr, turn, row, column, cell, gameRecord[turn]);
                        turn = (turn === 0 ? 1 : 0);
                    } else
                        continue;
                    break;
                }
                if (playersArr[turn ? 0 : 1].gameboard.areShipsLeft() === false) {
                    disableEventListeners();
                    endGame(turn, playersArr, numberOfShips);
                }
                computerIsPlaying = false;
                enableComputerThinkingDiv(false);
            }, 1000);
        }
    }

    function disableEventListeners() {
        const divBoards = document.querySelectorAll('div.board');
        divBoards.forEach((divBoard) => {
            divBoard.removeEventListener('click', assignEventListener);
        });
    }
}

function enableComputerThinkingDiv(flag) {
    const divSeparators = [...document.querySelectorAll('.separator')];
    divSeparators.forEach((div, index) => {
        if (flag) {
            if (index !== 0)
                div.textContent = 'COMPUTER is THINKING';
        } else {
            div.textContent = '';
        }
    });
}

function endGame(turn, playersArr, numberOfShips) {
    console.log(turn);
    console.log('end game!');
    console.log(`player ${turn ? 0 : 1} won!`);
    setUpReplayGame(playersArr, numberOfShips);
}

function setUpReplayGame(playersArr, numberOfShips) {
    const divShips = document.querySelector('.ship-selection');
    const replayButton = document.createElement('button');
    replayButton.textContent = 'Play again';
    replayButton.type = 'button';
    replayButton.addEventListener('click', () => {
        setUpPlayButtons(playersArr, numberOfShips);
        replayButton.remove();
    });
    divShips.appendChild(replayButton);
}

function setUpPlayButtons(players, nShips) {
    restartPlayersGrid(players);
    const divButtons = document.querySelector('.ship-selection');
    createPlayButtons(divButtons, players, nShips);
    randomPositionStart(players, nShips);
    setUpManualPosition(players, nShips);
    startGame(players, true, nShips);
}

function createPlayButtons(container) {
    const resetButton = document.createElement('button');
    resetButton.id = 'randomize-placement';
    resetButton.type = 'button';
    const manualButton = document.createElement('button');
    manualButton.id = 'manual-placement';
    manualButton.type = 'button';
    const startButton = document.createElement('button');
    startButton.id = 'start-game';
    startButton.type = 'button';
    container.append(resetButton);
    container.append(manualButton);
    container.append(startButton);
}

function registerHit(playersArr, turn, row, column, cell, player) {
    playersArr[turn].gameboard.receiveAttack([row, column]);
    if (playersArr[turn].gameboard.positionsVisited[row][column] === true) {
        cell.classList.add('hit');
        player.hits.push(true);
    }
    else {
        cell.classList.add('no-hit');
        player.hits.push(false);
    }
}

function checkValidPosition(playersArr, turn, row, column) {
    if (playersArr[turn].gameboard.positionsVisited[row][column] === undefined)
        return true
    else
        return false
}

function colorPlayerShips(shipPositions, i) {
    if (i === 1)
        i = 0;
    else
        i = 1;
    const gameBoardPlayer = document.querySelectorAll('div.board');
    shipPositions.forEach((position) => {
        gameBoardPlayer[i].children[position[0] * 10 + position[1]].classList.add('humanPlayer');
    });
}
