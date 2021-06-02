let sec = 0
let min = 0
let hour = 0
let meridian = "  A.M.";

function theTime() {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    if (h > 12) {
        meridian = "  P.M."
    }
    if (m < 10) {
        m = "0" + m;
    }
    if (s < 10) {
        s = "0" + s;
    }
    if (h > 12) {
        h = h - 12;
    }
    if (h == 0) {
        h = 1;
    }
    var time = h + ":" + m + ":" + s + meridian;
    document.getElementById("clock").innerHTML = time;
    setInterval(theTime, 1000);

}

theTime();