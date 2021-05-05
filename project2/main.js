var color = ["rgb(236, 19, 19)", "rgb(236, 19, 19)", "rgb(255, 115, 0)", "rgb(161, 10, 161)", "rgb(7, 199, 7)", "rgb(252, 252, 32)"];
var i = 0;
document.getElementById("btn1").addEventListener("click", function () {
    if (i < color.length) {
        i++;
        document.querySelector("body").style.backgroundColor = color[i]
    } else {
        i = 0;
    }

});
let red = "rgb(236, 19, 19)";
let orange = "rgb(255, 115, 0)";
let purple = "rgb(161, 10, 161)";
let green = "rgb(7, 199, 7)";
let yellow = "rgb(252, 252, 32)";

document.getElementById("btn2").addEventListener("click", function (event) {
    document.querySelector("body").style.backgroundColor = red
});

document.getElementById("btn3").addEventListener("click", function (event) {
    document.querySelector("body").style.backgroundColor = orange
});

document.getElementById("btn4").addEventListener("click", function (event) {
    document.querySelector("body").style.backgroundColor = purple
});

document.getElementById("btn5").addEventListener("click", function (event) {
    document.querySelector("body").style.backgroundColor = green
});

document.getElementById("btn6").addEventListener("click", function (event) {
    document.querySelector("body").style.backgroundColor = yellow
});