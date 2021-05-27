let button = document.getElementById("button");
let input = document.getElementById("text");
let msg = document.querySelector("#msg");
button.addEventListener("click", onSubmit);
let count = 0;
let randomNum = (Math.floor(Math.random() * 100) + 1);
function onSubmit(event) {
    event.preventDefault()
    let textGuess = input.value;
    if (count == 3) {
        msg.innerHTML = "Your 3 tries have been used. The number was " + randomNum;
        input.value = '';
        button.innerHTML = 'Reset';


    } else if
        (textGuess == '') {
        msg.innerHTML = '';
        button.innerHTML = 'Submit';
        count = 0;
    } else if (textGuess == randomNum) {
        msg.innerHTML = "You Guessed Correct!!";
        button.innerHTML = 'Submit';
    }

    else if (textGuess > randomNum) {
        msg.innerHTML = "Too High Try again.";
        button.innerHTML = 'Submit';
        count++
    }

    else if (textGuess < randomNum) {
        msg.innerHTML = "Too Low Try again.";
        button.innerHTML = 'Submit';
        count++
    }

    else {
        msg.innerHTML = "Error!!";
        button.innerHTML = 'Submit';
    }

