import imageShip1 from "./images/smallShip.png";
import { shipsLeft, isValidShipPosition, getBoardSize, getNewShipPosition, shipCollision, computerPlays, getRandomCoordinates } from "./calculationFunctions";
import { addShipToPlayer, createGameRecord } from "./objectsModification";
import { setUpPlayerName } from "./usernameDOM.js";
import { getSunkShipPositions, isShipSunk, getLaunchingCoordinates } from "./auxFunctions.js";

const IMAGES_SHIPS = imageShip1;
import Player from './player'

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
                    shipContainer[indexShip].style.width = 0;
                    shipContainer[indexShip].style.height = 0;
                    // the condition below  means that all the ships have been placed correctly
                    if (shipsLeft(shipContainer)) {
                        placeShipsGameboard(playersArr[0], 0, shipContainer.length);
                        disableStartButton(false);
                    }
                } else
                    restartImagePosition(shipContainer[indexShip]);
            } else
                restartImagePosition(shipContainer[indexShip]);
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

function highlightAxis(cellIni, flagEnable) {
    const board = cellIni.parentElement;
    const boardArray = [...board.children];
    const row = cellIni.dataset.row;
    const column = cellIni.dataset.column;
    boardArray.forEach((cell) => {
        if (cell.dataset.row === row || cell.dataset.column === column) {
            if (flagEnable) {
                if (cell.classList.contains('hit') || cell.classList.contains('no-hit'))
                    cell.style.opacity = 0.3;
                else
                    cell.classList.add('highlight-target');
            }
            else {
                cell.classList.remove('highlight-target');
                if (cell.classList.contains('hit') || cell.classList.contains('no-hit'))
                    cell.style.opacity = 1;
            }
        }
    });
}

function highlightAxisEvent(event) {
    const cellEvent = event.target;
    highlightAxis(cellEvent, event.type === 'mouseenter');
}

function drawShipSunk(playersArr, row, column, turn) {
    const gameboardObject = playersArr[turn].gameboard;
    const shipSunkCoordinates = getSunkShipPositions(gameboardObject, row, column);
    const gameboardDivOpponent = document.querySelectorAll('.board');
    const indexOpponent = turn ? 0 : 1;
    const gameboardArrOpponent = [...gameboardDivOpponent[indexOpponent].children];
    shipSunkCoordinates.forEach((coordinate) => {
        gameboardArrOpponent.forEach((cell) => {
            if (+cell.dataset.row === coordinate[0] && +cell.dataset.column === coordinate[1]) {
                cell.classList.add('sunk');
                return
            }
        });
    });
}

function blinkAxis(boardArray, row, column) {
    const cellArr = [];
    boardArray.forEach((cell) => {
        if (+cell.dataset.row === +row || +cell.dataset.column === +column) {
            cellArr.push(cell);
        }
    });
    const delay = 1000; // ms
    let repetitions = 5;
    for (let indexRepetition = 0; indexRepetition - repetitions; ++indexRepetition) {
        setTimeout(function() {
            cellArr.forEach((cell) => {
                cell.classList.add('transition-selected-axis');
                cell.classList.add('selected-axis');
                cell.classList.remove('highlight-target');
                setTimeout(() => cell.classList.remove('selected-axis'), delay / repetitions / 2);
            });
        }, delay / repetitions * (indexRepetition - 1));
    }
    cellArr.forEach((cell) => {
        setTimeout(() => cell.classList.remove('transition-selected-axis'), delay);
    });
}

function createEvents(playersArr, flagComputer, numberOfShips) {
    const gameRecord = createGameRecord();
    // We associate each player with a board;
    // the function inside the event listener should not be an anonymous function
    const divBoards = document.querySelectorAll('div.board');
    const gameSpace = {
        turn: 0,
        computerIsPlaying: false
    };
    const divBoardChildrenArray = [...divBoards[1].children];
    divBoardChildrenArray.forEach((cell) => {
        cell.addEventListener('mouseup', function clicked(e) {
            // the cell will no longer be clickable once a hit is confirmed
            const row = e.target.dataset.row;
            const column = e.target.dataset.column;
            if (gameSpace.computerIsPlaying === false && gameSpace.turn === 0) {
                console.log(gameSpace.computerIsPlaying, gameSpace.turn);
                if (isHit(row, column, playersArr, gameSpace.turn)) {
                    handleHit(playersArr, gameSpace, row, column, e, gameRecord, divBoardChildrenArray, numberOfShips, flagComputer);
                    cell.removeEventListener('mouseup', clicked);
                    console.log(gameSpace.computerIsPlaying);
                }
            }
            //assignEventListener(e, playersArr, turn, computerIsPlaying, divBoardChildrenArray, numberOfShips, gameRecord, size, flagComputer);
        });
        cell.addEventListener('mouseenter', highlightAxisEvent);
        cell.addEventListener('mouseleave', highlightAxisEvent);
        if (flagComputer === false)
            divBoards[0].addEventListener('mouseup', assignEventListener);
    });
}

function handleHit(playersArr, gameSpace, row, column, e, gameRecord, divBoardChildrenArray, numberOfShips, flagComputer) {
    // disable highlightAxisEvent
    divBoardChildrenArray.forEach((cell) => {
        cell.removeEventListener('mouseenter', highlightAxisEvent);
        cell.removeEventListener('mouseleave', highlightAxisEvent);
    });
    blinkAxis(divBoardChildrenArray, row, column);
    const shipHit = registerHit(playersArr, gameSpace.turn, row, column, e.target, gameRecord[gameSpace.turn]);
    if (shipHit && isShipSunk(playersArr[gameSpace.turn].gameboard, row, column))
        drawShipSunk(playersArr, row, column, gameSpace.turn);
    gameRecord[gameSpace.turn].moves.push([row, column]);
    // the change of turn and endgame need to happen after a certain period of time
    gameSpace.turn = 1;
    if (playersArr[gameSpace.turn ? 0 : 1].gameboard.areShipsLeft() === false) {
        disableEventListeners();
        endGame(gameSpace.turn, playersArr, numberOfShips);
    }
    computerTurn(flagComputer, gameSpace, playersArr, gameRecord, divBoardChildrenArray);
}

function isHit(row, column, playersArr, turn) {
    return checkValidPosition(playersArr, turn, row, column);
}

function disableEventListeners() {
    const divBoards = document.querySelectorAll('div.board');
    const divBoardChildrenArray = [...divBoards[1].children];
    divBoardChildrenArray.forEach((cell) => {
        cell.removeEventListener('mouseup', assignEventListener);
        cell.removeEventListener('mouseenter', highlightAxisEvent);
        cell.removeEventListener('mouseleave', highlightAxisEvent);
        cell.style.opacity = 1;
        cell.classList.remove('highlight-target');
    });
}

function computerTurn(flagComputer, gameSpace, playersArr, gameRecord, divBoardChildrenArray, isRandom = false) {
    if (flagComputer === true && gameSpace.turn === 1 && gameSpace.computerIsPlaying === false) {
        const divBoards = document.querySelectorAll('div.board');
        const size = getBoardSize(playersArr[0]);
        gameSpace.computerIsPlaying = true;
        enableComputerThinkingDiv(true);
        setTimeout(function() {
            while (true) {
                const [row, column] = computerPlays(playersArr[1].gameboard.map.length, gameRecord[gameSpace.turn], isRandom);
                if (checkValidPosition(playersArr, gameSpace.turn, row, column)) {
                    gameRecord[gameSpace.turn].moves.push([row, column]);
                    const coordinatesToTravel = getLaunchingCoordinates([row, column], size);
                    const divBoardChildrenComputerArray = [...divBoards[0].children];
                    let breakVar = false;
                    for (const [index, coordinates] of coordinatesToTravel.entries()) {
                        let cellIndex = 0;
                        let lastCell = undefined, currentCell = undefined;
                        for (let nIter = 0; nIter < divBoardChildrenComputerArray.length; ++nIter) {
                            setTimeout(function() {
                                const cellIter = divBoardChildrenComputerArray[cellIndex];
                                if (index > 0 && lastCell === undefined) {
                                    if (+cellIter.dataset.row === coordinatesToTravel[index - 1][0] && +cellIter.dataset.column === coordinatesToTravel[index - 1][1])
                                        lastCell = cellIter;
                                }
                                if (+cellIter.dataset.row === coordinates[0] && +cellIter.dataset.column === coordinates[1]) {
                                    currentCell = cellIter;
                                }
                                if (index === 0 && currentCell !== undefined)
                                    highlightAxis(currentCell, true);
                                else {
                                    if (currentCell !== undefined && lastCell !== undefined) {
                                        highlightAxis(lastCell, false);
                                        highlightAxis(currentCell, true);
                                        lastCell = undefined;
                                        currentCell = undefined;
                                        if (index === coordinatesToTravel.length - 1) {
                                            setTimeout(function() {
                                                highlightAxis(divBoardChildrenComputerArray[coordinates[0] * 10 + coordinates[1]], false);
                                                gameSpace.computerIsPlaying = false;
                                                gameSpace.turn = (gameSpace.turn === 0 ? 1 : 0);
                                                enableComputerThinkingDiv(false);
                                                blinkAxis(divBoardChildrenComputerArray, row, column);
                                                divBoardChildrenArray.forEach((cell) => {
                                                    cell.addEventListener('mouseenter', highlightAxisEvent);
                                                    cell.addEventListener('mouseleave', highlightAxisEvent);
                                                });
                                            }, 150);
                                            breakVar = true;
                                            return;
                                        }
                                    }
                                }
                                ++cellIndex;
                            }, 150 * (index + 1));
                            if (breakVar)
                                break;
                        }
                    }
                    const cell = divBoards[0].children[row * size + column];
                    const turn = gameSpace.turn;
                    setTimeout(function() {
                        if (registerHit(playersArr, turn, row, column, cell, gameRecord[turn])) {
                            gameRecord[turn].nonSunkShipsHitPosition.push([row, column]);
                            if (isShipSunk(playersArr[turn].gameboard, row, column)) {
                                gameRecord[turn].removeSunkShip(getSunkShipPositions(playersArr[turn].gameboard, row, column));
                                drawShipSunk(playersArr, row, column, turn);
                            }
                            console.log(coordinatesToTravel.length);
                        }
                    }, 150 * (coordinatesToTravel.length + 1));
                } else
                    continue;
                break;
            }
        }, 1000);
        if (playersArr[gameSpace.turn ? 0 : 1].gameboard.areShipsLeft() === false) {
            disableEventListeners();
            endGame(gameSpace.turn, playersArr, numberOfShips);
        }
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
    let shipWasHit = false;
    playersArr[turn].gameboard.receiveAttack([row, column]);
    if (playersArr[turn].gameboard.positionsVisited[row][column] === true) {
        shipWasHit = true;
        cell.classList.add('hit');
        cell.classList.remove('highlight-target');
        player.hits.push(true);
        if (turn === 1) {
            player.lastHitIndex = player.moves.length - 1;
            player.searching = true;
        }
    }
    else {
        cell.classList.add('no-hit');
        cell.classList.remove('highlight-target');
        player.hits.push(false);
    }
    return shipWasHit;
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
