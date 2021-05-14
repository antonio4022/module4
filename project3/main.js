let button = document.querySelector("#button");
let reset = document.querySelector("#resetButton");
let textGuess = document.querySelector("#text").value;
let msg = document.querySelector("#msg");
button.addEventListener("click", onSubmit());
reset.addEventListener("click", start);
let count = 0;
let numberOfGuess = 3;
let randomNum = (Math.floor(Math.random() * 100) + 1);

function onSubmit() {

    if (textGuess == randomNum) {
        msg.text = "You Guessed Correct!!";
        break;
    }
    else if (textGuess > randomNum) {
        msg.text = "Too High. Try again.";
        count++
    } else if (textGuess < randomNum) {
        msg.text = "Too Low Try again."
        count++
    } else if (count == numberOfGuess)
        break;
    else {
        msg.text = "Error!!";
    }

}

