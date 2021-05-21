let button = document.querySelector("#button");
let input = document.querySelector("#text");
let msg = document.querySelector("#msg");
button.addEventListener("click", onSubmit);
let count = 1;
let randomNum = (Math.floor(Math.random() * 100) + 1);
function onSubmit(event) {
    event.preventDefault()
    let textGuess = input.value;
    textGuess = ''

    if (count == 3) {
        msg.innerHTML = "Your 3 tries have been used. Start over.";
        button.innerHTML = 'reset';
        count = 1;
        textGuess = ''
    }
    else if (textGuess == randomNum) {
        msg.innerHTML = "You Guessed Correct!!";
        button.innerHTML = 'Submit';
    }
    else if (textGuess > randomNum) {
        msg.innerHTML = "Too High. Try again.";
        button.innerHTML = 'Submit';
        count++
    } else if (textGuess < randomNum) {
        msg.innerHTML = "Too Low Try again."
        button.innerHTML = 'Submit';
        count++
    }
    else {
        msg.innerHTML = "Error!!";
        button.innerHTML = 'Submit';
    }

}

