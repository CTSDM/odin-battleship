export function setUpPlayerName() {
    const containerNames = document.querySelector('.players-container');
    setUpDivForm(containerNames);
}

function setUpDivForm(container) {
    const divContainerFormPlayerName = document.createElement('div');
    divContainerFormPlayerName.classList.add('container-form');
    setUpDivContainerFormName(divContainerFormPlayerName);
    container.insertAdjacentElement('afterend', divContainerFormPlayerName);
}

function setUpDivContainerFormName(divContainer) {
    const formPlayerName = document.createElement('form');
    setUpForm(formPlayerName);
    divContainer.appendChild(formPlayerName);
    formPlayerName.addEventListener('submit', formEvent);
}

function formEvent(e) {
    const form = e.target;
    e.preventDefault();
    const parentElement = e.target.parentElement;
    const inputPlayer = document.getElementById('player-name-text');
    const inputPlayerName = inputPlayer.value;
    if (isValidInput(inputPlayerName)) {
        setPlayerName(inputPlayerName);
        parentElement.remove();
    } else {
        showErrorMessageInput(form);
    }
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
    const divName = document.getElementById('player-name');
    divName.textContent = name;
}
