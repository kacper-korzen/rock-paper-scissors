let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomChoice = Math.round(Math.random() * 2);
    return choices[randomChoice];
} 

function getHumanChoice() {
    let choice = 0;
    const promptMessage = `Pick one number:
    1-rock
    2-paper
    3-scissors`;

    do{
        choice = parseInt(prompt(promptMessage));
    }while (choice < 1 || choice > 3);
    return choice;

}
