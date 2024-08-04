export function setUpPlayerName(callbackDisableButtons) {
    const containerNames = document.querySelector('.players-container');
    setUpDivForm(containerNames, callbackDisableButtons);
}

function setUpDivForm(container, callback) {
    const divContainerFormPlayerName = document.createElement('div');
    divContainerFormPlayerName.classList.add('container-form');
    setUpDivContainerFormName(divContainerFormPlayerName, callback);
    container.insertAdjacentElement('afterend', divContainerFormPlayerName);
}

function setUpDivContainerFormName(divContainer, callback) {
    const formPlayerName = document.createElement('form');
    setUpForm(formPlayerName);
    divContainer.appendChild(formPlayerName);
    formPlayerName.addEventListener('submit', (e) => {
        formEvent(e, callback);
    });
}

function getPlayerName() {
    const inputPlayer = document.getElementById('player-name-text');
    const inputPlayerName = inputPlayer.value;
    return inputPlayerName;
}

function formEvent(e, callback) {
    const form = e.target;
    e.preventDefault();
    const parentElement = e.target.parentElement;
    const playerName = getPlayerName();
    if (isValidInput(playerName)) {
        setPlayerName(playerName);
        parentElement.remove();
        callback(false, true);
        changeGameTitle(0);
    } else {
        showErrorMessageInput(form);
    }
}

export function changeGameTitle(state) {
}

function isValidInput(name) {
    if (name.length > 0)
        return true
    return false;
}

function showErrorMessageInput(form) {
    if (document.querySelector('.error'))
        return
    const divErrorMessage = document.createElement('div');
    divErrorMessage.classList.add('error');
    divErrorMessage.textContent = 'Please fix your input';
    const formLastChild = form.children[form.children.length - 1];
    formLastChild.insertAdjacentElement('beforebegin', divErrorMessage);
}

function setUpForm(form) {
    form.id = 'player-data';
    const divPlayerName = document.createElement('div');
    const inputPlayerName = document.createElement('input');
    setUpInputPlayerName(inputPlayerName);
    setUpDivPlayerName(divPlayerName);
    form.appendChild(divPlayerName);
    form.appendChild(inputPlayerName);
}

function setUpDivPlayerName(divPlayerName) {
    const spanPlayerName = document.createElement('span');
    const inputPlayerName = document.createElement('input');
    inputPlayerName.placeholder = 'Your player name';
    inputPlayerName.id = 'player-name-text';
    spanPlayerName.textContent = 'Player name: ';
    divPlayerName.appendChild(spanPlayerName);
    divPlayerName.appendChild(inputPlayerName);
}

function setUpInputPlayerName(inputSubmit) {
    inputSubmit.type = 'submit';
    inputSubmit.value = 'Send';
}

function setPlayerName(name) {
    const divName = document.querySelector('.players-name');
    divName.textContent = name;
}
