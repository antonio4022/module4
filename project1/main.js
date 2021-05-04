const decrementBtn = document.getElementById("decrement");
const incrementBtn = document.getElementById("increment");
const counter = document.getElementById("counter");

let counterValue = 0;


incrementBtn.addEventListener("click", function (event) {
    counterValue += 1;
    counter.innerHTML = counterValue;
});

decrementBtn.addEventListener("click", function (event) {
    counterValue -= 1;
    counter.innerHTML = counterValue;
});