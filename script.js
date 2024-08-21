

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomChoice = Math.round(Math.random() * 2);
    return choices[randomChoice];
} 
