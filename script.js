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

function playRound(humanChoice, computerChoice) {
    //if humanChoice is equal to computerChoice, it will be a tie
    if (humanChoice == computerChoice) {
        return "Tie";
    }
    //if humanChoice is rock and computerChoice is paper, computer wins and the computerScore will increment by one 
    else if (humanChoice == "rock" && computerChoice == "paper") {
        return "Paper beats Rock, Computer wins!";
    }
    //if humanChoice is paper and computerChoice is scissor, computer wins and the computerScore will increment by one
    else if (humanChoice == "paper" && computerChoice == "scissor") {
        return "Scissor beats Paper, Computer wins!";
    }
    //if humanChoice is scissor and computerChoice is rock, computer wins and the computerScore will increment by one
    else if (humanChoice == "scissor" && computerChoice == "rock") {
        return "Rock beats Scissor, Computer wins!";
    }
    //humanChoice will also have the same logic as computerChoice or its vice versa one
    else if (humanChoice == "paper" && computerChoice == "rock") {
        return "Paper beats Rock, User wins";
    }else if (humanChoice == "scissor" && computerChoice == "paper") {
        return "Scissor beats Paper, User wins!";
    }else if (humanChoice == "rock" && computerChoice == "scissor") {
        return "Rock beats Scissor, User wins!";
    }
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    let round = 1;

    //playGame will have 5 rounds and this uses for loops
    for(let i = 1; i <= 5; i++){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        let result = playRound(humanChoice, computerChoice);
        console.log(result);

        //if the user wins, the humanScore will increment by one
        if(result.includes("User wins")){
            humanScore++;
        }
        //if the computer wins, the computerScore will increment by one
        else if(result.includes("Computer wins")){
            computerScore++;
        }

        //After the 5th round, it will announce who is the winner and end the game
        if(round === 5){
            if(humanScore > computerScore){
                alert("User wins the game!");
            }else if(computerScore > humanScore){
                alert("Computer wins the game!");
            }else{
                alert("It's a tie!");
            }

            //playGame will ask the user if they want to play again and if they do, it will call playGame again
            let playAgain = confirm("Do you want to play again?");
            if (playAgain) { 
                playGame(); 
            } else { 
                alert("Thanks for playing!"); 
            }
        }
        round++;
    }
}

playGame();