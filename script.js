

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

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        computerChoice = computerChoice.toLowerCase();
    
        let message = '';
    
        switch (`${humanChoice}_${computerChoice}`) {
            case 'rock_rock':
            case 'paper_paper':
            case 'scissors_scissors':
                message = 'It\'s a tie';    
                break;
            case 'rock_scissors':
            case 'paper_rock':
            case 'scissors_paper':
                message = `You win! ${humanChoice} beats ${computerChoice}`;
                humanScore++;
                break;
            case 'scissors_rock':
            case 'rock_paper':
            case 'paper_scissors':
                message = `You lose! ${computerChoice} beats ${humanChoice}`;
                computerScore++;
                break;
            
            default:
                message = 'Error';
        }
    
        console.log(message);
    }

    let humanChoice = '';
    let computerChoice = '';

    for (let i = 0; i < 5; i++) {
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);

    }
}

playGame();