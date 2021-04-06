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
    }

function playGame(playerSelection, cpuSelection) {
    for (let round = 1; round < 6; round++) {
        playRound(playerSelection, cpuSelection);
        console.log(`userScore is ` + userScore);
        console.log(`cpuScore is ` + cpuScore);
        }
    
        if (userScore == 5) {
            alert(`You win! You won ${userScore} rounds and tied ${numberDraws} rounds.`);
        } else if (cpuScore == 5) {
            alert(`You lose! The computer won ${cpuScore} rounds and you tied ${numberDraws} rounds.`);
        }
    
        userScore = 0;
        cpuScore = 0;
}
