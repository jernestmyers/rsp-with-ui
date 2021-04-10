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
        })
    }) 

// compares user vs cpu inputs and adds +1 to respective scores
// also calls function to update scores and display round results on the page
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
            gameOver(userScore);
            // alert(`You win!`);
            // window.location.reload();
        } else if (cpuScore == 5) {
            gameOver(userScore);
            // alert(`You lose!`);
            // window.location.reload();
        }
}

// adds click event to New Game button to just refresh page
const newGame = document.querySelector(`#new-game`);
    newGame.addEventListener(`click`, () => {
        console.log(`new game`);
        window.location.reload();
})

// updates score if user wins
function userScoreUpdate(userScore) {
    const userWonGame = document.querySelector(`#user-score`);
    const userScoreUpdated = document.createElement(`p`);
    userWonGame.removeChild(userWonGame.firstChild);
    userScoreUpdated.textContent = userScore;
    userWonGame.appendChild(userScoreUpdated);
}

// updates score if computer wins
function cpuScoreUpdate(cpuScore) {
    const cpuWonGame = document.querySelector(`#cpu-score`);
    const cpuScoreUpdated = document.createElement(`p`);
    cpuWonGame.removeChild(cpuWonGame.firstChild);
    cpuScoreUpdated.textContent = cpuScore;
    cpuWonGame.appendChild(cpuScoreUpdated);
}


// ouputs result of a draw
function displayDraw(playerSelection) {
    const roundResult = document.querySelector(`#round-result`);
    const resultToDisplay = document.createElement(`p`);
    roundResult.removeChild(roundResult.lastChild);
    resultToDisplay.textContent = `Draw! You both threw down ${playerSelection}.`;
    roundResult.appendChild(resultToDisplay);
}

// outputs result of user winning
function displayUserWins(playerSelection, cpuSelection) {
    const roundResult = document.querySelector(`#round-result`);
    const resultToDisplay = document.createElement(`p`);
    roundResult.removeChild(roundResult.lastChild);
    resultToDisplay.textContent = `You win! ${playerSelection} beats ${cpuSelection}.`;
    roundResult.appendChild(resultToDisplay);
}

// outputs result of cpu winning
function displayUserLoses(playerSelection, cpuSelection) {
    const roundResult = document.querySelector(`#round-result`);
    const resultToDisplay = document.createElement(`p`);
    roundResult.removeChild(roundResult.lastChild);
    resultToDisplay.textContent = `You lose! ${cpuSelection} beats ${playerSelection}.`;
    roundResult.appendChild(resultToDisplay);
}

// removes instructions and replaces buttons with a game over message that declares a winner
function gameOver(userScore) {
    function removeGameButtons(parent) {
        while (gameOver.firstChild) {
            gameOver.removeChild(gameOver.firstChild);
        }
    }
    const gameOver = document.querySelector(`#user-choice`);
    removeGameButtons(gameOver);

    function removeInst(parent) {
        while (removeInstructions.firstChild) {
            removeInstructions.removeChild(removeInstructions.firstChild);
        }
    }
    const removeInstructions = document.querySelector(`#instructions`);
    removeInst(removeInstructions);

    const finalMessage = document.createElement(`h1`);
    finalMessage.classList.add(`game-over`);
    finalMessage.textContent = `GAME OVER!`
    const winnerDeclared = document.createElement(`h2`);
    if (userScore == 5) {
        winnerDeclared.textContent = `Big ups, you won!`;
    } else {
        winnerDeclared.textContent = `Woah woah woah, it's okay to lose. Just try again!`;
    }
    gameOver.appendChild(finalMessage);
    gameOver.appendChild(winnerDeclared);
}


