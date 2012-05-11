"use strict";

var secLeft = 100;
var timerRunning = false;

function start() {
    if (!timerRunning) {
	timerRunning = true;
	runTimer();
    }
}

function stop() {
    timerRunning = false;
}

function reset() {
    secLeft = 100;
}



function runTimer() {
    var c = document.getElementById("counter");
    c.innerHTML = "Sec left " + secLeft;
    if (timerRunning && (secLeft > 0)) {
      secLeft--;
      var t = setTimeout("runTimer()",1000);
    }
}