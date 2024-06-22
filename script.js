
const showComputerChoice = document.querySelector("#computerChoice");
const myHumanChoice = document.querySelector("#choice");
const showPlayerChoice = document.querySelector("#playerChoice");
const showHumanPoints = document.querySelector("#humanPoints");
const showComputerPoints = document.querySelector("#computerPoints");
const showFinalResult = document.querySelector("#finalResult");
const showRoundResult = document.querySelector("#roundResult");
const newRound = document.querySelector("#newRound");

showComputerChoice.textContent = '';
showPlayerChoice.textContent = '';
showRoundResult.textContent = '';

const askPlayer = document.createElement("h3");
askPlayer.textContent = "Do you want to play again?";
const newGame = document.createElement("button");
newGame.textContent = "Yes";
const endGame = document.createElement("button");
endGame.textContent = "No";

newRound.appendChild(askPlayer);
newRound.appendChild(newGame);
newRound.appendChild(endGame);

askPlayer.style.display = "none";
newGame.style.display = "none";
endGame.style.display = "none";

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
    if(round === 5){
        if(humanScore > computerScore){
            showFinalResult.textContent = "User wins the game!";
        }else if(computerScore > humanScore){
            showFinalResult.textContent = "Computer wins the game!";
        }else if(humanScore == computerScore){
            showFinalResult.textContent = "It's a tie!";
        }

        askPlayer.style.display = "block";
        newGame.style.display = "block";
        endGame.style.display = "block";

        //This will ask the user if they want to play again and if they do, it will call playGame again
        newGame.addEventListener("click", () => {
            resetGame();
            playGame();
        },{once: true});
        endGame.addEventListener("click", () => {
            newRound.textContent = "Thanks for Playing!";
        },{once: true});
    }
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    round = 0;
    updateScores();
    showComputerChoice.textContent = '';
    showPlayerChoice.textContent = '';
    showRoundResult.textContent = '';
}

function updateScores() {
    showHumanPoints.textContent = `Player: ${humanScore}`;
    showComputerPoints.textContent = `Computer: ${computerScore}`;
}
updateScores();