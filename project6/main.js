let check = document.getElementById('check');

//check.addEventListener("click", answerCheck);



function answerCheck() {
    var ele1 = getElementsByName("question1");
    var ele2 = getElementsByName("question2");
    var ele3 = getElementsByName("question3");
    var ele4 = getElementsByName("question4");
    var result1 = getElementById("answer1");
    var result2 = getElementById("answer2");
    var result3 = getElementById("answer3");
    var result4 = getElementById("answer4");

    console.log("hi");
    for (i = 0; i < ele1.length; i++) {
        if (ele1[i].checked)
            document.getElementById("result1").innerHTML
                = "The correct answer is  " + ele1[i].value;
    }

    for (i = 0; i < ele2.length; i++) {
        if (ele2[i].checked)
            document.getElementById("result2").innerHTML
                = "The correct answer is  " + ele2[i].value;
    }
    for (i = 0; i < ele3.length; i++) {
        if (ele3[i].checked)
            document.getElementById("result3").innerHTML
                = "The correct answer is  " + ele3[i].value;
    }
    for (i = 0; i < ele4.length; i++) {
        if (ele4[i].checked)
            document.getElementById("result4").innerHTML
                = "The correct answer is " + ele4[i].value;
    }

}