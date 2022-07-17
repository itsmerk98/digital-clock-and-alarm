
function addZero(number) {
    if (number < 10) {
        return "0" + number;
    } else {
        return number;
    }
}

window.setInterval(function () {
    var time = new Date();

    let hours = time.getHours();
    let mints = time.getMinutes();
    let sec = time.getSeconds();

    document.getElementById('hours').innerHTML = addZero(hours);
    document.getElementById('mins').innerHTML = addZero(mints);
    document.getElementById('second').innerHTML = addZero(sec);
}, 1000)
