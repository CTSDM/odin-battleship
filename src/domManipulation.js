import imageShip1 from "./images/smallShip.png";
import { shipsLeft, isValidShipPosition, getBoardSize, getNewShipPosition, shipCollision, computerPlays, getRandomCoordinates } from "./calculationFunctions";
import { addShipToPlayer, createGameRecord, createPlayers } from "./objectsModification";
import { setUpPlayerName } from "./usernameDOM.js";
import { getSunkShipPositions, isShipSunk, getLaunchingCoordinates, checkValidPosition } from "./auxFunctions.js";

const IMAGES_SHIPS = imageShip1;

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
    for (let i = 0; i < shipButtons.length; ++i)
        shipButtons[i].disable = flagDisable;
    if (flagLastButton)
        shipButtons[shipButtons.length - 1] = true;
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
    shipContainer.forEach((image) => {
        image.src = IMAGES_SHIPS;
    });
    enableDivShips();
    disableDivShips();
}

function enableDivShips() {
    const shipContainer = [...document.querySelector('.ships-images').children];
    shipContainer.forEach((image, index) => {
        restartImagePosition(image);
        restartSizeImage(image, index);
    });
}

function disableDivShips() {
    const shipContainer = [...document.querySelector('.ships-images').children];
    shipContainer.forEach((image) => restartSizeImage(image, 0, 0));
}

function restartImagePosition(image) {
    image.style.position = 'static';
    image.top = 0;
    image.left = 0;
    image.style.transform = 'rotate(0deg)';
}

function restartSizeImage(image, index, flagWidth = 1) {
    const width = 100 * flagWidth + 50 * index;
    image.style.width = `${width * flagWidth}px`;
    image.style.height = `${50 * flagWidth}px`;
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

function highlightAxis(cellIni, flagEnable = true) {
    const boardArray = [...cellIni.parentElement.children];
    const row = +cellIni.dataset.row, column = +cellIni.dataset.column;
    const size = Math.sqrt(boardArray.length);
    const arrayIndex = [];
    for (let i = 0; i < size; ++i) {
        arrayIndex.push(row * size + i);
        arrayIndex.push(column + i * size);
    }
    arrayIndex.forEach((index) => {
        const cell = boardArray[index];
        if (flagEnable) {
            if (cell.classList.contains('hit') === false && cell.classList.contains('no-hit') === false)
                cell.classList.add('highlight-target');
        } else
            cell.classList.remove('highlight-target');
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
        const cell = gameboardArrOpponent[coordinate[1] + coordinate[0] * Math.sqrt(gameboardArrOpponent.length)];
        cell.classList.add('sunk');
    });
}

function blinkTarget(cellArray, row, column) {
    const size = Math.sqrt(cellArray.length);
    const cell = cellArray[column + row * size];
    const delay = 1000;
    // ms
    let repetitions = 5;
    for (let indexRepetition = 0; indexRepetition - repetitions; ++indexRepetition) {
        setTimeout(function() {
            cell.classList.add('transition-selected-axis');
            cell.classList.add('selected-axis');
            cell.classList.remove('highlight-target');
            setTimeout(() => cell.classList.remove('selected-axis'), delay / repetitions / 2);
        }, delay / repetitions * (indexRepetition - 1));
    }
    setTimeout(() => cell.classList.remove('transition-selected-axis'), delay);
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
        cell.addEventListener('mouseup', clicked);
        cell.addEventListener('mouseenter', highlightAxisEvent);
        cell.addEventListener('mouseleave', highlightAxisEvent);
    });
    function clicked(e) {
        const cell = e.target;
        const row = +e.target.dataset.row;
        const column = +e.target.dataset.column;
        if (gameSpace.computerIsPlaying === false && gameSpace.turn === 0) {
            if (checkValidPosition(playersArr, gameSpace.turn, row, column))
                handleHit(playersArr, gameSpace, row, column, e, gameRecord, divBoardChildrenArray, numberOfShips, flagComputer, clicked);
            cell.removeEventListener('mouseup', clicked);
        }
    }
}

function handleHit(playersArr, gameSpace, row, column, e, gameRecord, divBoardChildrenArray, numberOfShips, flagComputer, clickedEventFunction) {
    // disable highlightAxisEvent
    highlightAxis(divBoardChildrenArray[column + row * Math.sqrt(divBoardChildrenArray.length)], false);
    divBoardChildrenArray.forEach((cell) => {
        cell.removeEventListener('mouseenter', highlightAxisEvent);
        cell.removeEventListener('mouseleave', highlightAxisEvent);
    });
    blinkTarget(divBoardChildrenArray, row, column);
    const shipHit = registerHit(playersArr, gameSpace.turn, row, column, e.target, gameRecord[gameSpace.turn]);
    if (shipHit && isShipSunk(playersArr[gameSpace.turn].gameboard, row, column))
        drawShipSunk(playersArr, row, column, gameSpace.turn);
    gameRecord[gameSpace.turn].moves.push([row, column]);
    gameSpace.turn = 1;
    if (playersArr[0].gameboard.areShipsLeft() === false) {
        disableEventListeners(clickedEventFunction);
        endGame(gameSpace.turn, playersArr, numberOfShips);
    } else
        computerTurn(flagComputer, gameSpace, playersArr, gameRecord, divBoardChildrenArray, numberOfShips, clickedEventFunction);
}

function disableEventListeners(eventFunction) {
    const divBoards = document.querySelectorAll('div.board');
    const divBoardChildrenArray = [...divBoards[1].children];
    divBoardChildrenArray.forEach((cell) => {
        cell.removeEventListener('mouseup', eventFunction);
        cell.removeEventListener('mouseenter', highlightAxisEvent);
        cell.removeEventListener('mouseleave', highlightAxisEvent);
        cell.classList.remove('highlight-target');
    });
}

function simplerLoops(coordinatesToTravel, cellArray, delay) {
    const size = Math.sqrt(cellArray.length);
    coordinatesToTravel.forEach((coordinate, index) => {
        setTimeout(function() {
            if (index > 0)
                highlightAxis(cellArray[coordinatesToTravel[index - 1][1] + coordinatesToTravel[index - 1][0] * size], false);
            highlightAxis(cellArray[coordinate[1] + coordinate[0] * size]);
            if (index === coordinatesToTravel.length - 1) {
                setTimeout(function() {
                    highlightAxis(cellArray[coordinate[1] + coordinate[0] * size], false);
                    blinkTarget(cellArray, coordinate[0], coordinate[1]);
                }, delay);
            }
        }, delay * index);
    }
    );
}

function computerTurn(flagComputer, gameSpace, playersArr, gameRecord, divBoardChildrenArray, numberOfShips, clickedEventFunction, isRandom = false) {
    if (flagComputer === true && gameSpace.turn === 1 && gameSpace.computerIsPlaying === false) {
        const divBoards = document.querySelectorAll('div.board');
        const size = getBoardSize(playersArr[0]);
        gameSpace.computerIsPlaying = true;
        enableComputerThinkingDiv(true);
        const programmableDelay = 50;
        let validPosition = false;
        setTimeout(function() {
            while (validPosition === false) {
                const [row, column] = computerPlays(playersArr[1].gameboard.map.length, gameRecord[gameSpace.turn], isRandom);
                validPosition = checkValidPosition(playersArr, gameSpace.turn, row, column)
                if (validPosition) {
                    gameRecord[gameSpace.turn].moves.push([row, column]);
                    const coordinatesToTravel = getLaunchingCoordinates([row, column], size);
                    const divBoardChildrenComputerArray = [...divBoards[0].children];
                    simplerLoops(coordinatesToTravel, divBoardChildrenComputerArray, programmableDelay);
                    setTimeout(function() {
                        gameSpace.computerIsPlaying = false;
                        gameSpace.turn = (gameSpace.turn === 0 ? 1 : 0);
                        enableComputerThinkingDiv(false);
                        blinkTarget(divBoardChildrenComputerArray, row, column);
                        divBoardChildrenArray.forEach((cell) => {
                            cell.addEventListener('mouseenter', highlightAxisEvent);
                            cell.addEventListener('mouseleave', highlightAxisEvent);
                        }
                        );
                    }, programmableDelay * coordinatesToTravel.length + 1);
                    const cell = divBoards[0].children[row * size + column];
                    const turn = gameSpace.turn;
                    setTimeout(function() {
                        if (registerHit(playersArr, turn, row, column, cell, gameRecord[turn])) {
                            gameRecord[turn].nonSunkShipsHitPosition.push([row, column]);
                            if (isShipSunk(playersArr[turn].gameboard, row, column)) {
                                gameRecord[turn].lastHitIndex = -1;
                                gameRecord[turn].removeSunkShip(getSunkShipPositions(playersArr[turn].gameboard, row, column));
                                drawShipSunk(playersArr, row, column, turn);
                            }
                            if (playersArr[gameSpace.turn ? 0 : 1].gameboard.areShipsLeft() === false) {
                                disableEventListeners(clickedEventFunction);
                                endGame(gameSpace.turn, playersArr, numberOfShips);
                            }
                        }
                    }, programmableDelay * (coordinatesToTravel.length + 1));
                }
            }
        }, 100);
    }
}

function enableComputerThinkingDiv(flag) {
    const divSeparators = [...document.querySelectorAll('.separator')];
    if (flag)
        divSeparators[1].textContent = 'Computer is THINKING';
    else
        divSeparators[1].textContent = '';
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
    disableStartButton(true);
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
