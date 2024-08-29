'use strict';

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomChoice = Math.round(Math.random() * 2);
  return choices[randomChoice];
}

function getHumanChoice() {
  const promptMessage = `Write one option(rock, paper, scissors):`;
  let choice = prompt(promptMessage);

  return choice;
}

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

let humanScore = 0;
let computerScore = 0;
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    let message = "";

    switch (`${humanChoice}_${computerChoice}`) {
        case "rock_rock":
        case "paper_paper":
        case "scissors_scissors":
            message = "It's a tie";
            break;
        case "rock_scissors":
        case "paper_rock":
        case "scissors_paper":
            message = `You win! ${capitalizeFirstLetter(
            humanChoice
            )} beats ${capitalizeFirstLetter(computerChoice)}`;
            humanScore++;
            break;
        case "scissors_rock":
        case "rock_paper":
        case "paper_scissors":
            message = `You lose! ${capitalizeFirstLetter(
            computerChoice
            )} beats ${capitalizeFirstLetter(humanChoice)}`;
            computerScore++;
            break;

        default:
            message = "Error";
    }

    return message;
}

function whoWonMessage(...winningMessages) {
    const whoWonScore = document.querySelector("#whoWonScore");
    whoWonScore.textContent = "";

    for (const winningMessage of winningMessages) {
        whoWonScore.appendChild(winningMessage)
    }
}

function winningInfo(roundWinnerMessage, scoreInfo) {
    let gameWinner = document.createElement('p');

    if (humanScore === 5 ) {
        gameWinner.textContent = "YOU WON THE GAME";
        whoWonMessage(gameWinner);
        humanScore = 0;
        computerScore = 0;
    } else if (computerScore === 5) {
        gameWinner.textContent = "COMPUTER WON THE GAME";
        whoWonMessage(gameWinner);
        humanScore = 0;
        computerScore = 0;
    } else {
        whoWonMessage(roundWinnerMessage, scoreInfo);
    }
}
function playGame(optionButton) {
    let humanChoice = optionButton.dataset.option;
    let computerChoice = getComputerChoice();
    const roundWinnerMessage = document.createElement('p');
    roundWinnerMessage.textContent = playRound(humanChoice, computerChoice);
    
    const scoreInfo = document.createElement('p');
    scoreInfo.textContent = `YOU: ${humanScore} COMPUTER: ${computerScore}`;

    winningInfo(roundWinnerMessage, scoreInfo);
}

const optionButtons = document.querySelectorAll("button");

optionButtons.forEach((optionButton) => {
    optionButton.addEventListener("click", function () {
        playGame(optionButton);
    });
});