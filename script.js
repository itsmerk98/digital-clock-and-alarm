console.log("hello connected")

var time = new Date();

let hours = time.getHours();
let mints = time.getMinutes();
// let sec = time.getSeconds();

document.getElementById('hours').innerHTML = hours;
document.getElementById('mins').innerHTML = mints;


let seconds = setInterval(function () {
    document.getElementById('second').innerHTML = time.getSeconds();
}, 1000)
