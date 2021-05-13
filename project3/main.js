let button = document.querySelector("#button");
let reset = document.querySelector("#resetButton");
let textGuess = document.querySelector("#text");
let msg = document.querySelector("#msg");
button.addEventListener("click", onSubmit());
reset.addEventListener("click", start);
let count = 0;
let numberOfGuess = 3;
let randomNum = (Math.floor(Math.random() * 100) + 1);

function onSubmit() {
    while (count < numberOfGuess) {
        if (textGuess == randomNum) {
            msg.text = "You Guessed Correct!!";
            break;
        }
        else if (textGuess > randomNum) {
            msg.text = "Too High. Try again.";
        } else if (textGuess < randomNum) {
            msg.text = "Too Low Try again."
        } else {
            msg.text = "Error!!";
        }
        count++;
    }
}
