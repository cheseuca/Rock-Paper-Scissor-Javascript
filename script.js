
const showComputerChoice = document.querySelector("#computerChoice");
const myHumanChoice = document.querySelector("#choice");
const showPlayerChoice = document.querySelector("#playerChoice");
const showHumanPoints = document.querySelector("#humanPoints");
const showComputerPoints = document.querySelector("#computerPoints");
const showFinalResult = document.querySelector("#finalResult");
const showRoundResult = document.querySelector("#roundResult");
const newRound = document.querySelector("#newRound");


let humanScore = 0;
showHumanPoints.textContent = `Player:  ${humanScore}`;
let computerScore = 0;
showComputerPoints.textContent = `Computer: ${computerScore}`;
let round = 0;

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
        break;
    }

    if (myHumanChoice.value) {
        const computerChoice = getComputerChoice();
        const playerChoice = getHumanChoice();

        showComputerChoice.textContent = computerChoice;
        showPlayerChoice.textContent = playerChoice;
        showRoundResult.textContent = playRound(playerChoice, computerChoice);
    }
    playGame();
    updateScores();
});

function getHumanChoice() {
    //humanChoice will choose rock, paper or scissor and it is not case sensitive
    let humanChoice = myHumanChoice.value;

    //if humanChoice is not rock, paper or scissor, it will prompt the user to enter a valid input
    if (humanChoice == "rock" || humanChoice == "paper" || humanChoice == "scissor") {
        return humanChoice;
    }/*else{
        alert("Error");
        return; 
    }*/
}

function playRound(humanChoice, computerChoice) {
    //humanChoice vs computerChoice logic flow
    if (humanChoice == computerChoice) {
        round++;
        return "Tie";
    }
    else if (humanChoice == "rock" && computerChoice == "paper") {
        round++;
        computerScore++;
        return "Paper beats Rock, Computer wins!";
    }
    else if (humanChoice == "paper" && computerChoice == "scissor") {
        round++;
        computerScore++;
        return "Scissor beats Paper, Computer wins!";
    }
    else if (humanChoice == "scissor" && computerChoice == "rock") {
        round++;
        computerScore++;
        return "Rock beats Scissor, Computer wins!";
    }
    else if (humanChoice == "paper" && computerChoice == "rock") {
        round++;
        computerScore++;
        return "Paper beats Rock, User wins";
    }else if (humanChoice == "scissor" && computerChoice == "paper") {
        round++;
        humanScore++;
        return "Scissor beats Paper, User wins!";
    }else if (humanChoice == "rock" && computerChoice == "scissor") {
        round++;
        humanScore++
        return "Rock beats Scissor, User wins!";
    }
}

function playGame(){
    //playGame will have 5 rounds
    if (round === 5) {
        if (humanScore > computerScore) {
            showFinalResult.textContent = "User wins the game!";
        } else if (computerScore > humanScore) {
            showFinalResult.textContent = "Computer wins the game!";
        } else if (humanScore == computerScore) {
            showFinalResult.textContent = "It's a tie!";
        }
        // Disable the button after 5 rounds
        disableAllButtons();
        // This line is a placeholder for asking the player to play the game again
        newRound.textContent = "Refresh the Page to Play Again!";
    }
}

function disableAllButtons() {
    const allButtons = document.querySelectorAll("button");
    allButtons.forEach(button => button.disabled = true);
}

/*function resetGame() {
    humanScore = 0;
    computerScore = 0;
    round = 0;
    updateScores();
    showComputerChoice.textContent = '';
    showPlayerChoice.textContent = '';
    showRoundResult.textContent = '';
}*/

function updateScores() {
    showHumanPoints.textContent = humanScore;
    showComputerPoints.textContent = computerScore;
}
updateScores();