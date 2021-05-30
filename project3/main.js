let button = document.getElementById("button");
let input = document.getElementById("text");
let msg = document.querySelector("#msg");
button.addEventListener("click", onSubmit);
let count = 0;
let randomNum = (Math.floor(Math.random() * 100) + 1);
function onSubmit(event) {
    event.preventDefault()
    let textGuess = input.value;
    if (button.innerHTML == "Reset") {
        console.log("resetting the game")
        randomNum = (Math.floor(Math.random() * 100) + 1);
        msg.innerHTML = '';
        count = 0;
        button.innerHTML = 'Submit';
        return
    }
    if (textGuess == '') {
        msg.innerHTML = '';
    }
    else if (textGuess == randomNum) {
        msg.innerHTML = "You Guessed Correct!!";
    }

    else if (textGuess > randomNum) {
        msg.innerHTML = "Too High Try again.";
    }

    else if (textGuess < randomNum) {
        msg.innerHTML = "Too Low Try again.";
    }

    else {
        msg.innerHTML = "Error!!";
    }


    count++

    console.log("count ", count)
    if (count >= 3) {
        console.log('No more tries left, time to reset')
        msg.innerHTML += " Your 3 tries have been used. The number was " + randomNum;
        input.value = '';
        button.innerHTML = 'Reset';
    }

}


