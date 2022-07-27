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

function setAlarmTime(){
    
    var wakeUpTime = document.getElementById("wakeup");
    //var value = wakeUpTime.value;
    var text = wakeUpTime.options[wakeUpTime.selectedIndex].text;
    
    document.getElementById("wakeupTime").innerHTML = text;
    
    var lunchTime = document.getElementById("lunchTime");
    //var value = lunchTime.value;
    var text = lunchTime.options[lunchTime.selectedIndex].text;
    
    document.getElementById("lunch").innerHTML = text;
    
    var napTime = document.getElementById("napTime");
    //var value = napTime.value;
    var text = napTime.options[napTime.selectedIndex].text;
    
    document.getElementById("nap").innerHTML = text;
    
    var nightTime = document.getElementById("nightTime");
    //var value = nightTime.value;
    var text = nightTime.options[nightTime.selectedIndex].text;
    
    document.getElementById("night").innerHTML = text;

}
