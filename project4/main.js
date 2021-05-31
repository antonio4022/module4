let playerChoiceRock = document.getElementById("rock");
let playerChoicePaper = document.getElementById("paper");
let playerChoiceScissor = document.getElementById("scissors");
let msg = document.getElementById("msg");
let result = document.getElementById("result");
let yourChoice = document.getElementById('yourChoice');
let userChoice
let computerChoice

rock.addEventListener("click", generateComputerChoice);
paper.addEventListener("click", generateComputerChoice);
scissors.addEventListener("click", generateComputerChoice);
playerChoiceRock.addEventListener("click", rockResult);
playerChoicePaper.addEventListener("click", paperResult);
playerChoiceScissor.addEventListener("click", scissorResult);




function generateComputerChoice(e) {

    let randomNum = Math.floor(Math.random() * 3) + 1;

    if (randomNum === 1) {
        computerChoice = 'rock';
    }
    if (randomNum === 2) {
        computerChoice = 'paper';
    }
    if (randomNum === 3) {
        computerChoice = 'scissors';
    }

    msg.innerHTML = 'The computer choose ' + computerChoice;
}


function rockResult(e) {
    userChoice = 'rock';
    if (computerChoice == userChoice) {
        result.innerHTML = 'It was a tie. try again'
        yourChoice.innerHTML = 'you choose ' + userChoice
    }
    if (computerChoice == 'rock' && userChoice == 'paper') {
        result.innerHTML = 'You win, paper beats Rock!'
        yourChoice.innerHTML = 'you choose ' + userChoice
    }
    if (computerChoice == 'rock' && userChoice == 'scissors') {
        result.innerHTML = 'You lose, rock beats scissors!'
        yourChoice.innerHTML = 'you choose ' + userChoice
    }
    if (computerChoice == 'paper' && userChoice == 'scissors') {
        result.innerHTML = 'You win, scissors beats paper!'
        yourChoice.innerHTML = 'you choose ' + userChoice
    }
    if (computerChoice == 'paper' && userChoice == 'rock') {
        result.innerHTML == 'You lose, paper beats Rock!'
        yourChoice.innerHTML = 'you choose ' + userChoice
    }
    if (computerChoice == 'scissors' && userChoice == 'rock') {
        result.innerHTML = 'You win, rock beats scissors!'
        yourChoice.innerHTML = 'you choose ' + userChoice
    }
    if (computerChoice == 'scissors' && userChoice == 'paper') {
        result.innerHTML = 'You lose, scissors beats papar!'
        yourChoice.innerHTML = 'you choose ' + userChoice
    }
}

function paperResult(e) {
    userChoice = 'paper';
    if (computerChoice == userChoice) {
        result.innerHTML = 'It was a tie. try again'
        yourChoice.innerHTML = 'you choose ' + userChoice
    }
    if (computerChoice == 'rock' && userChoice == 'paper') {
        result.innerHTML = 'You win, paper beats Rock!'
        yourChoice.innerHTML = 'you choose ' + userChoice
    }
    if (computerChoice == 'rock' && userChoice == 'scissors') {
        result.innerHTML = 'You lose, rock beats scissors!'
        yourChoice.innerHTML = 'you choose ' + userChoice
    }
    if (computerChoice == 'paper' && userChoice == 'scissors') {
        result.innerHTML = 'You win, scissors beats paper!'
        yourChoice.innerHTML = 'you choose ' + userChoice
    }
    if (computerChoice == 'paper' && userChoice == 'rock') {
        result.innerHTML == 'You lose, paper beats Rock!'
        yourChoice.innerHTML = 'you choose ' + userChoice
    }
    if (computerChoice == 'scissors' && userChoice == 'rock') {
        result.innerHTML = 'You win, rock beats scissors!'
        yourChoice.innerHTML = 'you choose ' + userChoice
    }
    if (computerChoice == 'scissors' && userChoice == 'paper') {
        result.innerHTML = 'You lose, scissors beats papar!'
        yourChoice.innerHTML = 'you choose ' + userChoice
    }
}

function scissorResult(e) {
    userChoice = 'scissors';
    if (computerChoice == userChoice) {
        result.innerHTML = 'It was a tie. try again'
        yourChoice.innerHTML = 'you choose ' + userChoice
    }
    if (computerChoice == 'rock' && userChoice == 'paper') {
        result.innerHTML = 'You win, paper beats Rock!'
        yourChoice.innerHTML = 'you choose ' + userChoice
    }
    if (computerChoice == 'rock' && userChoice == 'scissors') {
        result.innerHTML = 'You lose, rock beats scissors!'
        yourChoice.innerHTML = 'you choose ' + userChoice
    }
    if (computerChoice == 'paper' && userChoice == 'scissors') {
        result.innerHTML = 'You win, scissors beats paper!'
        yourChoice.innerHTML = 'you choose ' + userChoice
    }
    if (computerChoice == 'paper' && userChoice == 'rock') {
        result.innerHTML == 'You lose, paper beats Rock!'
        yourChoice.innerHTML = 'you choose ' + userChoice
    }
    if (computerChoice == 'scissors' && userChoice == 'rock') {
        result.innerHTML = 'You win, rock beats scissors!'
        yourChoice.innerHTML = 'you choose ' + userChoice
    }
    if (computerChoice == 'scissors' && userChoice == 'paper') {
        result.innerHTML = 'You lose, scissors beats papar!'
        yourChoice.innerHTML = 'you choose ' + userChoice
    }
}

