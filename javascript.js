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
        console.log(`Draw! You both threw down ${playerSelection}.`);
    } else if   (cpuSelection == `Rock` && playerSelection == `Scissors` ||
                cpuSelection == `Scissors` && playerSelection == `Paper` ||
                cpuSelection == `Paper` && playerSelection == `Rock`) {
        cpuScore += 1;
        console.log(`You lose! ${cpuSelection} beats ${playerSelection}.`);
    } else {
        userScore += 1;
        console.log(`You win! ${playerSelection} beats ${cpuSelection}.`);
        }
        keepScore(userScore, cpuScore);
    }

// alerts winner of the game
function keepScore(userScore, cpuScore) {
        if (userScore == 2) {
            alert(`You win!`);
            window.location.reload();
        } else if (cpuScore == 2) {
            alert(`You lose!`);
            window.location.reload();
        }
}

const newGame = document.querySelector(`#new-game`);
    newGame.addEventListener(`click`, () => {
        console.log(`new game`);
        window.location.reload();
})
