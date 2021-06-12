let check = document.getElementById('check');

check.addEventListener(click, answerCheck);



function answerCheck() {
    var c = 0;
    var q1 = document.quiz.question1.innerHTML;
    var q2 = document.quiz.question2.innerHTML;
    var q3 = document.quiz.question3.innerHTML;
    var q4 = document.quiz.question4.innerHTML;
    var result = document.getElementById('result');
    if (q1 == "America") {
        c++;
        document.write(document.value)
    }
    if (q2 == "Russia") {
        c++;
        document.write(document.value)
    }
    if (q3 == "Florida") {
        c++;
        document.write(document.value)
    }
    if (q4 == "to keep slavery") {
        c++;
        document.write(document.value)
    }
    document.write(c);

    console.log(q1);
}