let check = document.getElementById('check');

//check.addEventListener("click", answerCheck);



function answerCheck() {
    var ele1 = document.getElementsByName("question1");
    var ele2 = document.getElementsByName("question2");
    var ele3 = document.getElementsByName("question3");
    var ele4 = document.getElementsByName("question4");
    var result1 = document.getElementById("answer1");
    var result2 = document.getElementById("answer2");
    var result3 = document.getElementById("answer3");
    var result4 = document.getElementById("answer4");
    var correct = document.getElementById('correct');



    for (i = 0; i < ele1.length; i++) {
        if (ele1[i].checked == correct)
            "result1".innerHTML = "The correct answer is  " + ele1[i].value;
    }

    for (i = 0; i < ele2.length; i++) {
        if (ele2[i].checked == correct)
            "result2".innerHTML = "The correct answer is  " + ele2[i].value;
    }
    for (i = 0; i < ele3.length; i++) {
        if (ele3[i].checked == correct)
            "result3".innerHTML = "The correct answer is  " + ele3[i].value;
    }
    for (i = 0; i < ele4.length; i++) {
        if (ele4[i].checked == correct)
            "result4".innerHTML = "The correct answer is " + ele4[i].value;
    }

}