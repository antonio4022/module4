let sec = 0
let min = 0
let hour = 0
let meridian = "A.M.";

function theTime() {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    if (h > 12) {
        meridian = P.M.
            h - 12
    }
    if (m < 10) {
        m = 0 + m;
    }
    if (s < 10) {
        s = 0 + s;
    }
    var time = h + ":" + m + ":" + s + meridian;
    document.getElementById("clock").innerHTML = time;
    setInterval(theTime, 1000);

}

theTime();