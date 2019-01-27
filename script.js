var rockButton = document.querySelector('#rock-button');
var paperButton = document.querySelector('#paper-button');
var scissorsButton = document.querySelector('#scissors-button');
var resetButton = document.querySelector('#reset');
const winData = document.querySelector('#win');
const loseData = document.querySelector('#lose');
const drawData = document.querySelector('#draw');
var playerWin = 0;
var playerLose = 0;
var computerWin = 0;
var draw = 0;


function computerPlay() {
    var computerChoices = ["rock", "paper", "scissors"];
    var computerChose = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    return computerChose;
}

rockButton.addEventListener('click', () => {
    playRound('rock', computerPlay());
});
paperButton.addEventListener('click', () => {
    playRound('paper', computerPlay());
});
scissorsButton.addEventListener('click', () => {
    playRound('scissors', computerPlay());
});
resetButton.addEventListener('click', () => {
    resetGame();
});

function playRound(playerSelection, computerSelection) {
    var winText = 0;
    var loseText = 0;
    var drawText = 0;

    if (playerSelection === computerSelection) {
        alert('Draw');
        draw++;
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        alert('You lose, the computer chooses "PAPER"');
        playerLose++;
        computerWin++;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        alert('You win, the computer chooses "SCISSORS"');
        playerWin++;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        alert('You win, the computer chooses "ROCK"');
        playerWin++;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        alert('You lose, the computer chooses "SCISSORS"');
        playerLose++;
        computerWin++;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        alert('You lose, the computer chooses "ROCK"');
        playerLose++;
        computerWin++;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        alert('You win, the computer chooses "PAPER"');
        playerWin++;
    }

    winData.textContent = winText += playerWin;
    loseData.textContent = loseText += playerLose;
    drawData.textContent = drawText += draw;

    if (playerWin == 3) {
        alert('You WIN against a computer!, Very nice!!!');
        resetGame();
    } else if (computerWin == 3) {
        alert('You LOSE, Noob!!! Better luck next time');
        resetGame();
    }
}

function resetGame() {
    playerWin = 0;
    playerLose = 0;
    computerWin = 0;
    draw = 0;
    winData.textContent = '0';
    loseData.textContent = '0';
    drawData.textContent = '0';
}
console.log('dwdw');