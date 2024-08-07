import imageShip1 from "./images/smallShip.png";
import { shipsLeft, isValidShipPosition, getBoardSize, getNewShipPosition, shipCollision, computerPlays, getRandomCoordinates } from "./calculationFunctions";
import { addShipToPlayer, createGameRecord, createPlayers } from "./objectsModification";
import { setUpPlayerName } from "./usernameDOM.js";
import { getSunkShipPositions, isShipSunk, getLaunchingCoordinates, checkValidPosition, getDifficulty } from "./auxFunctions.js";

const IMAGES_SHIPS = imageShip1;

export default function createBoard(size, numberOfShips) {
    loadGrid(size);
    setUpPlayerName(disableButtons);
    setUpFunctionality(numberOfShips, size);
    makeBoardDivVisible();
}

function makeBoardDivVisible() {
    const boardContainer = document.querySelector('.players-container');
    setTimeout(() => boardContainer.classList.add('scaling'), 100);
}

function setUpFunctionality(numberOfShips, size) {
    const playersArr = [];
    createPlayers(playersArr, size);
    randomPositionStart(playersArr, numberOfShips);
    setUpManualPosition(playersArr, numberOfShips, true);
    createDivShips(numberOfShips);
    setUpEventListenersShips(playersArr);
    startGame(playersArr, true, numberOfShips);
}

function changeGameTitle(state) {
    const spanTitle = document.querySelector('.game-title span');
    if (state === 0)
        spanTitle.textContent = '<WELCOME>';
    else if (state === 1)
        spanTitle.textContent = 'FIGHT!!!!';
    else if (state === 2)
        spanTitle.textContent = 'You win!';
    else if (state === 3)
        spanTitle.textContent = 'Game Over!';
}

function disableButtons(flagDisable, flagLastButton = false) {
    const shipButtons = [...document.querySelector('.ship-selection').children];
    for (let i = 0; i < shipButtons.length; ++i)
        shipButtons[i].disabled = flagDisable;
    if (flagLastButton)
        shipButtons[shipButtons.length - 1].disabled = true;
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
        removeInformationPlacement();
    });
}

function removeInformationPlacement() {
    if (document.body.lastChild.classList.contains('info'))
        document.body.removeChild(document.body.lastChild);
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
    const imagesElements = [...document.querySelectorAll('img')];
    imagesElements.forEach((image) => image.src = IMAGES_SHIPS);
    enableDivShips();
    disableDivShips();
}

function enableDivShips() {
    const imagesElements = [...document.querySelectorAll('img')];
    imagesElements.forEach((image, index) => {
        restartImagePosition(image);
        restartSizeImage(image, index);
    });
    disableDivShipContainer(false);
}

function disableDivShipContainer(flag = true) {
    const individualShipContainers = [...document.querySelectorAll('.ships-images div')];
    if (flag)
        individualShipContainers.forEach((div) => div.classList.remove('individual-ship'));
    else
        individualShipContainers.forEach((div) => div.classList.add('individual-ship'));

}

function disableDivShips() {
    const imagesElements = [...document.querySelectorAll('img')];
    imagesElements.forEach((image) => restartSizeImage(image, 0, 0));
    disableDivShipContainer(true);
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
    const imagesElements = [...document.querySelectorAll('img')];
    imagesElements.forEach((image, index) => {
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
                const image = imagesElements[indexShip];
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
            imagesElements[indexShip].style.position = 'relative';
            imagesElements[indexShip].style.left = `${e.clientX - initialClickPosition[0]}px`;
            imagesElements[indexShip].style.top = `${e.clientY - initialClickPosition[1]}px`;
        }
    });

    document.addEventListener('mouseup', () => {
        if (indexShip !== -1) {
            const boardPlayer1Coord = document.querySelector('.player1').getBoundingClientRect();
            if (isValidShipPosition(imagesElements[indexShip], boardPlayer1Coord)) {
                // let's place the ship
                // once i know the ship position is valid i can calculate the index where the ship can be placed
                // in this position is should check if there are ships on the to positions where the new ship can be placed
                const positions = getNewShipPosition(imagesElements[indexShip], boardPlayer1Coord);
                if (!shipCollision(playersArr[1], positions)) {
                    addShipToPlayer(playersArr[1], positions);
                    colorPlayerShips(positions, 1);
                    // place the ship within the gameboard
                    // delete the image that is associated to the placed ship
                    imagesElements[indexShip].style.width = 0;
                    imagesElements[indexShip].style.height = 0;
                    imagesElements[indexShip].parentElement.classList.remove('individual-ship');
                    // the condition below  means that all the ships have been placed correctly
                    if (shipsLeft(imagesElements)) {
                        placeShipsGameboard(playersArr[0], 0, imagesElements.length);
                        disableStartButton(false);
                        removeInformationPlacement();
                    }
                } else
                    restartImagePosition(imagesElements[indexShip]);
            } else
                restartImagePosition(imagesElements[indexShip]);
            indexShip = -1;
        }
    });
}

function disableStartButton(flagEnable) {
    const button = document.getElementById('start-game');
    button.disabled = flagEnable;
}

function setUpManualPosition(playersArr, nShips, disabledManual = false) {
    const buttonPrev = document.getElementById('manual-placement');
    const manualButton = document.createElement('button');
    manualButton.id = 'manual-placement';
    manualButton.textContent = 'Manual placement of the ship';
    manualButton.type = 'button';
    if (disabledManual)
        manualButton.disabled = true;
    manualButton.addEventListener('click', () => {
        restartPlayersGrid(playersArr);
        restartManualShipPlacement(manualButton, playersArr, nShips);
        manualButton.remove();
        disableStartButton(true);
        enableDivShips();
        showInstructionsManual();
    });
    buttonPrev.insertAdjacentElement('beforebegin', manualButton);
    buttonPrev.remove();
}

function showInstructionsManual() {
    if (document.body.lastChild.classList.contains('info') === false) {
        const divInfo = document.createElement('div');
        const divInfoDrag = document.createElement('div');
        const divInfoRotation = document.createElement('div');
        divInfoDrag.textContent = 'Click and drag to place the ship into the battlefield!';
        divInfoRotation.textContent = 'While dragging the ship, you can press "R" to rotate it 90 degrees.';
        divInfo.appendChild(divInfoDrag);
        divInfo.appendChild(divInfoRotation);
        divInfo.classList.add('info');
        document.body.append(divInfo);
    }
}

function restartManualShipPlacement(manualPositionButton, playersArr) {
    const buttonRestart = document.createElement('button');
    buttonRestart.textContent = 'Restart manual ship placement';
    buttonRestart.type = 'button';
    buttonRestart.id = 'manual-placement';
    buttonRestart.addEventListener('click', () => {
        showInstructionsManual();
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
        const divIndividualContainer = document.createElement('div');
        const img = document.createElement('img');
        img.draggable = false;
        img.alt = `Ship of length ${i + 2}`;
        divIndividualContainer.appendChild(img);
        divShips.appendChild(divIndividualContainer);
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
        changeGameTitle(1);
        const gameDifficulty = getDifficulty();
        modifyComputerText(gameDifficulty);
        createEvents(players, computer, nShips, gameDifficulty);
        removeAllButtons();
    });
}

function toggleHidDifficultyDiv() {
    const divDifficulty = document.querySelector('.difficulty');
    divDifficulty.classList.toggle('hidden');
}

function removeAllButtons() {
    toggleHidDifficultyDiv();
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
        if (flagEnable)
            cell.classList.add('highlight-target');
        else
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
        cell.textContent = 'x';
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

function createEvents(playersArr, flagComputer, numberOfShips, isDifficult) {
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
                handleHit(playersArr, gameSpace, row, column, e, gameRecord, divBoardChildrenArray, numberOfShips, flagComputer, clicked, isDifficult);
            cell.removeEventListener('mouseup', clicked);
        }
    }
}

function handleHit(playersArr, gameSpace, row, column, e, gameRecord, divBoardChildrenArray, numberOfShips, flagComputer, clickedEventFunction, isDifficult) {
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
        endGame(gameSpace.turn, playersArr, numberOfShips, true);
    } else
        computerTurn(flagComputer, gameSpace, playersArr, gameRecord, divBoardChildrenArray, numberOfShips, clickedEventFunction, isDifficult);
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
                                gameRecord[turn].removeSunkShip(getSunkShipPositions(playersArr[turn].gameboard, row, column));
                                drawShipSunk(playersArr, row, column, turn);
                                gameRecord[turn].searching = false;
                            }
                            if (playersArr[gameSpace.turn ? 0 : 1].gameboard.areShipsLeft() === false) {
                                disableEventListeners(clickedEventFunction);
                                endGame(gameSpace.turn, playersArr, numberOfShips, false);
                            }
                        }
                    }, programmableDelay * (coordinatesToTravel.length + 1));
                }
            }
        }, 100);
    }
}

function enableComputerThinkingDiv(flag) {
    const divThinkingState = document.querySelector('.computer-state-movement');
    if (flag)
        divThinkingState.textContent = 'Computer is THINKING';
    else
        divThinkingState.textContent = '';
}

function endGame(turn, playersArr, numberOfShips, flagUserWin) {
    changeGameTitle(flagUserWin ? 2 : 3);
    setUpReplayGame(playersArr, numberOfShips, getWinnerDiv(1 - turn), flagUserWin);
}

function getWinnerDiv(winnerIndex) {
    const divWinner = document.createElement('div');
    const spanName = document.createElement('span');
    const spanArray = [document.createElement('span'), document.createElement('span')];
    const winnerName = [...document.querySelectorAll('.players-name')][winnerIndex].textContent;
    divWinner.classList.add('winner');
    spanName.textContent = `${winnerName} `;
    spanArray[0].textContent = 'Player ';
    spanArray[1].textContent = 'gets the competition!';
    divWinner.appendChild(spanArray[0]);
    divWinner.appendChild(spanName);
    divWinner.appendChild(spanArray[1]);
    return divWinner;
}

function setUpReplayGame(playersArr, numberOfShips, winnerDiv) {
    const divShips = document.querySelector('.ship-selection');
    const replayButton = document.createElement('button');
    replayButton.textContent = 'Play again';
    replayButton.type = 'button';
    replayButton.addEventListener('click', () => {
        toggleHidDifficultyDiv();
        modifyComputerText();
        changeGameTitle(0);
        setUpPlayButtons(playersArr, numberOfShips);
        replayButton.remove();
        winnerDiv.remove();
    });
    divShips.appendChild(winnerDiv);
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
        cell.classList.remove('humanPlayer');
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
    i = i === 0 ? 1 : 0
    const gameBoardPlayer = document.querySelectorAll('div.board');
    shipPositions.forEach((position) => {
        gameBoardPlayer[i].children[position[0] * 10 + position[1]].classList.add('humanPlayer');
    });
}

function modifyComputerText(isEasy) {
    const computerNameDiv = [...document.querySelectorAll('.players-name')][1];
    let textDifficulty;
    if (isEasy === undefined)
        textDifficulty = '';
    else
        textDifficulty = isEasy ? ' (easy)' : ' (hard)'
    computerNameDiv.textContent = `COMPUTER${textDifficulty}`;
}
