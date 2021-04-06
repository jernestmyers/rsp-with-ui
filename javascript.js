// ROCK PAPER SCISSORS

const cpuOptions = [`Rock`, `Paper`, `Scissors`];


// get user selection and store under "playerSelection"
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
    console.log(playerSelection);
    console.log(cpuSelection);
    
}

