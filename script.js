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

  document.getElementById("hours").innerHTML = addZero(hours);
  document.getElementById("mins").innerHTML = addZero(mints);
  document.getElementById("second").innerHTML = addZero(sec);
}, 1000);

function setAlarmTime() {
  var wakeUpTime = document.getElementById("wakeup");
  var wakeUpTimeValue = wakeUpTime.value;
  var text = wakeUpTime.options[wakeUpTime.selectedIndex].text;

  document.getElementById("wakeupTime").innerHTML = text;

  var lunchTime = document.getElementById("lunchTime");
  var lunchTiemValue = lunchTime.value;
  var text = lunchTime.options[lunchTime.selectedIndex].text;

  document.getElementById("lunch").innerHTML = text;

  var napTime = document.getElementById("napTime");
  var napTimeValue = napTime.value;
  var text = napTime.options[napTime.selectedIndex].text;

  document.getElementById("nap").innerHTML = text;

  var nightTime = document.getElementById("nightTime");
  var nightTimeValue = nightTime.value;
  var text = nightTime.options[nightTime.selectedIndex].text;

  document.getElementById("night").innerHTML = text;

  var d = new Date();
  var courrentHour = d.getHours();

  if (wakeUpTimeValue == courrentHour) {
    document.getElementById("img").src = "./image/Group 5194.svg";
    document.getElementById("notification").innerText =
      "RAB SOME HEALTHY BREAKFAST!!!";
    document.getElementById("notification").innerText =
      "GOOD MORNING !! WACK UP !!";
  } else if (lunchTiemValue == courrentHour) {
    document.getElementById("img").src = "./image/lunch_image.png";
    document.getElementById("notification").innerText =
      "Let's have some Lunch !!";
    document.getElementById("notification").innerText =
      "GOOD AFTERNOON !! TAKE SOME SLEEP ";
  } else if (napTimeValue == courrentHour) {
    document.getElementById("img").src = "./image/Group 5194.svg";
    document.getElementById("notification").innerText =
      "Stop Yawning, get some tea.. Its just evening!";
    document.getElementById("notification").innerText = "GOOD EVENING !!";
  } else if (nightTimeValue == courrentHour) {
    document.getElementById("img").src = "./image/goodnight_image.svg";
    document.getElementById("notification").innerText =
      "Close your eyes and go to sleep";
    document.getElementById("notification").innerText = "GOOD NIGHT !!";
  } else {
    document.getElementById("img").src = "./image/Group 5194.svg";
    document.getElementById("notification").innerText =
      "RAB SOME HEALTHY BREAKFAST!!!";
    document.getElementById("notification").innerText =
      "GOOD MORNING !! WACK UP !!";
  }
}
