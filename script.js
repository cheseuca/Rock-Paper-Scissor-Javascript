
const showComputerChoice = document.querySelector("#computerChoice");
const myHumanChoice = document.querySelector("#choice");
const showChoice = document.querySelector("#playerChoice");
const showHumanPoints = document.querySelector("#humanPoints");
const showComputerPoints = document.querySelector("#computerPoints");
const showFinalResult = document.querySelector("#finalResult");

function getComputerChoice() {
    //Computer will choose a random number between 1 and 3
    let randomNumber = Math.floor(Math.random() * 3) + 1;

    //Computer's random number will be converted to rock, paper or scissor
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

myHumanChoice.addEventListener("click", (event) => {
    let choice = event.target.id;

    switch (choice) {
        case "rock":
            myHumanChoice.value = "rock";
            break;
        case "paper":
            myHumanChoice.value = "paper";
            break;
        case "scissor":
            myHumanChoice.value = "scissor";
        break;
        default:
            myHumanChoice.value = null;
    }

    console.log(getHumanChoice());
    showComputerChoice.textContent = getComputerChoice();
    showChoice.textContent = getHumanChoice();
});

function getHumanChoice() {
    //humanChoice will choose rock, paper or scissor and it is not case sensitive
    let humanChoice = myHumanChoice.value;

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
    //humanChoice vs computerChoice logic flow
    if (humanChoice == computerChoice) {
        return "Tie";
    }
    else if (humanChoice == "rock" && computerChoice == "paper") {
        return "Paper beats Rock, Computer wins!";
    }
    else if (humanChoice == "paper" && computerChoice == "scissor") {
        return "Scissor beats Paper, Computer wins!";
    }
    else if (humanChoice == "scissor" && computerChoice == "rock") {
        return "Rock beats Scissor, Computer wins!";
    }
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