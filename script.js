let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomChoice = Math.round(Math.random() * 2);
    return choices[randomChoice];
} 

function getHumanChoice() {
    const promptMessage = `Write one option(rock, paper, scissors):`;
    let choice = prompt(promptMessage);   

    return choice;
}

console.log(getHumanChoice());