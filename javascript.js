// ROCK PAPER SCISSORS

// set initial values
const cpuOptions = [`Rock`, `Paper`, `Scissors`];
let cpuScore = 0;
let userScore = 0;

// get user and cpu selection on click event
const userChoice = document.querySelectorAll(`.userPlay`);
    let playerSelection = ``;
    let cpuSelection = ``;
    userChoice.forEach((userChoice) => {
        userChoice.addEventListener(`click`, () => {
            playerSelection = userChoice.id;
            console.log(playerSelection);
            cpuSelection = cpuOptions[Math.floor(Math.random() * cpuOptions.length)];
            console.log(cpuSelection);
            playRound(playerSelection, cpuSelection);
            // playGame(userScore, cpuScore);
        })
    }) 

// compares user vs cpu inputs and adds +1 to respective scores
function playRound(playerSelection, cpuSelection) {
    if (playerSelection == cpuSelection) {
        displayDraw(playerSelection);
    } else if   (cpuSelection == `Rock` && playerSelection == `Scissors` ||
                cpuSelection == `Scissors` && playerSelection == `Paper` ||
                cpuSelection == `Paper` && playerSelection == `Rock`) {
        cpuScore += 1;
        displayUserLoses(playerSelection, cpuSelection);
    } else {
        userScore += 1;
        displayUserWins(playerSelection, cpuSelection);
        }
      userScoreUpdate(userScore);
      cpuScoreUpdate(cpuScore);
      keepScore(userScore, cpuScore);
    }

// alerts winner of the game
function keepScore(userScore, cpuScore) {
        if (userScore == 5) {
            alert(`You win!`);
            // window.location.reload();
        } else if (cpuScore == 5) {
            alert(`You lose!`);
            // window.location.reload();
        }
}

const newGame = document.querySelector(`#new-game`);
    newGame.addEventListener(`click`, () => {
        console.log(`new game`);
        window.location.reload();
})

function userScoreUpdate(userScore) {
    const userWonGame = document.querySelector(`#user-score`);
    const userScoreUpdated = document.createElement(`p`);
    userWonGame.removeChild(userWonGame.firstChild);
    userScoreUpdated.textContent = userScore;
    userWonGame.appendChild(userScoreUpdated);
}

function cpuScoreUpdate(cpuScore) {
    const cpuWonGame = document.querySelector(`#cpu-score`);
    const cpuScoreUpdated = document.createElement(`p`);
    cpuWonGame.removeChild(cpuWonGame.firstChild);
    cpuScoreUpdated.textContent = cpuScore;
    cpuWonGame.appendChild(cpuScoreUpdated);
}

function displayDraw(playerSelection) {
    const roundResult = document.querySelector(`#round-result`);
    const resultToDisplay = document.createElement(`p`);
    roundResult.removeChild(roundResult.lastChild);
    resultToDisplay.textContent = `Draw! You both threw down ${playerSelection}.`;
    roundResult.appendChild(resultToDisplay);
}

function displayUserWins(playerSelection, cpuSelection) {
    const roundResult = document.querySelector(`#round-result`);
    const resultToDisplay = document.createElement(`p`);
    roundResult.removeChild(roundResult.lastChild);
    resultToDisplay.textContent = `You win! ${playerSelection} beats ${cpuSelection}.`;
    roundResult.appendChild(resultToDisplay);
}

function displayUserLoses(playerSelection, cpuSelection) {
    const roundResult = document.querySelector(`#round-result`);
    const resultToDisplay = document.createElement(`p`);
    roundResult.removeChild(roundResult.lastChild);
    resultToDisplay.textContent = `You lose! ${cpuSelection} beats ${playerSelection}.`;
    roundResult.appendChild(resultToDisplay);
}