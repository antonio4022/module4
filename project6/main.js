let check = document.getElementById('check');

//check.addEventListener("click", answerCheck);



function answerCheck() {
    var ele1 = document.getElementsByName("question1");
    var ele2 = document.getElementsByName("question2");
    var ele3 = document.getElementsByName("question3");
    var ele4 = document.getElementsByName("question4");
    ele1.checked = false;
    ele2.checked = false;
    ele3.checked = false;
    ele4.checked = false;
    let c = 0;





    for (i = 0; i < ele1.length; i++) {
        if (i === 3 && ele1[3].checked === true) {
            document.getElementById('answer1').innerHTML = "That is correct. (Operation paperclip)";
            c++

        } else {
            document.getElementById('answer1a').innerHTML = "That is incorrect.please try again";
        }

    }

    for (i = 0; i < ele2.length; i++) {
        if (i === 2 && ele2[2].checked === true) {
            document.getElementById('answer2').innerHTML = "That is correct. more than 20 million Russian lives lost.";
            c++
        } else {
            document.getElementById('answer2a').innerHTML = "That is incorrect.please try again";
        }
    }
    for (i = 0; i < ele3.length; i++) {
        if (i === 2 && ele3[2].checked === true) {
            document.getElementById('answer3').innerHTML = "That is correct. (Operation Northwoods)";

        } else {
            document.getElementById('answer3a').innerHTML = "That is incorrect.please try again";
        }

    }
    for (i = 0; i < ele4.length; i++) {
        if (ele4[1].checked === true) {
            document.getElementById('answer4').innerHTML = "That is correct. (The Missouri Comprimise.)";
            c++
        } else {
            document.getElementById('answer4a').innerHTML = "That is incorrect.please try again";
        }
    }

    return document.getElementById('correct').innerHTML = "You have " + c + " correct."
}