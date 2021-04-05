// ROCK PAPER SCISSORS

// sets initial scores to 0
let userScore = 0;
let cpuScore = 0;
let numberDraws = 0;

// randomly selects the index of an array containing options, then returns as Rock Paper or Scissors
function computerPlay() {
     let cpuOptions = [`Rock`, `Paper`, `Scissors`];
     return cpuOptions[Math.floor(Math.random() * (cpuOptions.length))];
 }

// prompts user to enter their choice, converts to lowercase, validates response, returns capitalized
function userPlay(event) {
    const userChoice = document.querySelectorAll(`.userPlay`);

    userChoice.forEach((userChoice) => {
        userChoice.addEventListener(`click`, () => {
            console.log(userChoice.id);
            return userChoice.id;
        })
    }) 
    // let userInput = prompt(`Let's throw down! Enter Rock, Paper, or Scissors.`);
    // let userLowerCase = userInput.toLowerCase();
    //     for ( ; (userLowerCase != `rock` && userLowerCase != `paper` && userLowerCase != `scissors`) ||
    //         userInput == null || userInput == `` ; ) {
    //           userInput = prompt(`Invalid entry. Try again! Enter Rock, Paper, or Scissors.`);
    //           userLowerCase = userInput.toLowerCase();
    //     }
    // return userLowerCase.replace(userLowerCase[0], userLowerCase[0].toUpperCase());
}

// plays a round of rock paper scissors and alerts user of result while also counting # of wins, losses, and draws
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        numberDraws += 1;
        alert(`Draw! You both threw down ${playerSelection}.`);
    } else if   (computerSelection == `Rock` && playerSelection == `Scissors` ||
                computerSelection == `Scissors` && playerSelection == `Paper` ||
                computerSelection == `Paper` && playerSelection == `Rock`) {
        cpuScore += 1;
        alert(`You lose! ${computerSelection} beats ${playerSelection}.`);
    } else {
        userScore += 1;
        alert(`You win! ${playerSelection} beats ${computerSelection}.`);
        }
    }

// runs a game of 5 rounds and alerts the results. also resets scores for another game.
function game() {
    for (let round = 1; round < 6; round++) {
    const playerSelection = userPlay();
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    console.log(`userScore is ` + userScore);
    console.log(`cpuScore is ` + cpuScore);
    console.log(`numberDraws is ` + numberDraws);
    }

    if (userScore > cpuScore) {
        alert(`You win! You won ${userScore} rounds and tied ${numberDraws} rounds.`);
    } else if (userScore < cpuScore) {
        alert(`You lose! The computer won ${cpuScore} rounds and you tied ${numberDraws} rounds.`);
    } else {
        alert(`You tied! You and the computer each won ${userScore} rounds and tied ${numberDraws} rounds.`);
    }

    userScore = 0;
    cpuScore = 0;
    numberDraws = 0;
}




// const userChoice = document.querySelectorAll(`.userPlay`);

// userChoice.forEach((userChoice) => {
//     userChoice.addEventListener(`click`, () => {
//         console.log(userChoice.id);
//     })
// })

