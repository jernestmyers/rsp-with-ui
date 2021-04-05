// ROCK PAPER SCISSORS

// sets initial scores to 0
let userScore = 0;
let cpuScore = 0;
let numberDraws = 0;



// get user selection and store under "playerSelection"
const userChoice = document.querySelectorAll(`.userPlay`);
    let playerSelection = ``;
    userChoice.forEach((userChoice) => {
        userChoice.addEventListener(`click`, () => {
            playerSelection = userChoice.id;
        }) 
    }) 

// get computer selection
function computerPlay() {
    const cpuOptions = [`Rock`, `Paper`, `Scissors`];
    let cpuSelection = Math.floor(Math.random() * cpuOptions.length);
    return cpuSelection;
}