//Pseudocode for the getComputerChoice

function getComputerChoice() {
    //Computer will choose a random number between 1 and 3
    let randomNumber = Math.floor(Math.random() * 3) + 1;

    //If computer chooses 1, it will be rock
    if (randomNumber == 1) {
        return "rock";
    }
    //if computer chooses 2, it will be paper
    else if (randomNumber == 2) {
        return "paper";
    }
    //if computer chooses 3, it will be scissor
    else {
        return "scissor";
    }
}

//Pseudocode for humanChoice
function getHumanChoice() {
    //humanChoice will choose rock, paper or scissor and it is not case sensitive
    let humanChoice = prompt("Enter rock, paper or scissor");

    //if humanChoice is not rock, paper or scissor, it will prompt the user to enter a valid input
    if (humanChoice === null) {
        alert("Game ended, Thanks for playing!");
        return;
    }
    else if (humanChoice.toLowerCase() == "rock" || humanChoice.toLowerCase() == "paper" || humanChoice.toLowerCase() == "scissor") {
        return humanChoice;
    }
    else {
        alert("Invalid input");
        return humanChoice;
    }
}

var humanScore = 0;
var computerScore = 0;

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

//Pseudocode for playRound

function playRound(humanChoice, computerChoice) {
    //if humanChoice is equal to computerChoice, it will be a tie
    if (humanChoice == computerChoice) {
        return "Tie";
    }
    //if humanChoice is rock and computerChoice is paper, computer wins and the computerScore will increment by one 
    else if (humanChoice == "rock" && computerChoice == "paper") {
        computerScore++;
        return "Paper beats Rock, Computer wins!";
    }
    //if humanChoice is paper and computerChoice is scissor, computer wins and the computerScore will increment by one
    else if (humanChoice == "paper" && computerChoice == "scissor") {
        computerScore++;
        return "Scissor beats Paper, Computer wins!";
    }
    //if humanChoice is scissor and computerChoice is rock, computer wins and the computerScore will increment by one
    else if (humanChoice == "scissor" && computerChoice == "rock") {
        computerScore++;
        return "Rock beats Scissor, Computer wins!";
    }else if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore++;
        return "Paper beats Rock, User wins";
    }else if (humanChoice == "scissor" && computerChoice == "paper") {
        humanScore++;
        return "Scissor beats Paper, User wins!";
    }else if (humanChoice == "rock" && computerChoice == "scissor") {
        humanScore++;
        return "Rock beats Scissor, User wins!";
    }
}

//getHumanChoice (user) can type rock paper and scissor and computerChoice (computer) will get its input from getComputerChoice function
console.log(playRound(humanChoice, computerChoice));
