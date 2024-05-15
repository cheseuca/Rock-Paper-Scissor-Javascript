//Pseudocode for the getComputerChoice
//Computer will choose a random number between 1 and 3
//If computer chooses 1, it will be rock
//if computer chooses 2, it will be paper
//if computer chooses 3, it will be scissor

function getComputerChoice() {
    var randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber == 1) {
        return "rock";
    }
    else if (randomNumber == 2) {
        return "paper";
    }
    else {
        return "scissor";
    }
}

console.log(getComputerChoice());
