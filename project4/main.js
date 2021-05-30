let playerChoiceRock = document.getElementById("rock");
let playerChoicePaper = document.getElementById("paper");
let playerChoiceScissor = document.getElementById("scissors");
let msg = document.getElementById("#msg");
let result = document.getElementById("#result");
let userChoice
let computerChoice
rock.addEventListener("click", generateComputerChoice);
paper.addEventListener("click", generateComputerChoice);
scissors.addEventListener("click", generateComputerChoice);



function generateComputerChoice(e) {
    let userChoice = playerChoiceRock || playerChoicePaper || playerChoiceScissors
    let randomNum = Math.floor(Math.random() * 3) + 1;
    if (randomNum === 1) {
        computerChoice = 'rock';
    }
    if (randomNum === 2) {
        computerChoice = 'paper'
    }
    if (randomNum === 3) {
        computerChoice = 'scissors'
    }

    console.log(userChoice);
    console.log(computerChoice);
    msg.innerHTML = 'computerChoice'
    function getResult() {
        if (computerChoice == userChoice) {
            msg.innerHTML = 'It was a tie. try again'
            console.log()
        }
        if (computerChoice == 'rock' && userChoice == 'paper') {
            msg.innerHTML = 'You win, paper beats Rock!'
        }
        if (computerChoice == 'rock' && userChoice == 'scissors') {
            msg.innerHTML = 'You lose, rock beats scissors!'
        }
        if (computerChoice == 'paper' && userChoice == 'scissors') {
            msg.innerHTML = 'You win, scissors beats paper!'
        }
        if (computerChoice == 'paper' && userChoice == 'rock') {
            msg.innerHTML == 'You lose, paper beats Rock!'
        }
        if (computerChoice == 'scissors' && userChoice == 'rock') {
            msg.innerHTML = 'You win, rock beats scissors!'
        }
        if (computerChoice == 'scissors' && userchoice == 'paper') {
            msg.innerHTML = 'You lose, scissors beats papar!'

        }
    }
}