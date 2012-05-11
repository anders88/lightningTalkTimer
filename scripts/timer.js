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
    c.innerHTML = formatTime(secLeft);
    if (timerRunning && (secLeft > 0)) {
      secLeft--;
      var t = setTimeout("runTimer()",1000);
    }
}

function formatTime(seconds) {
    var minutes = parseInt(seconds/60)
    var secofmin = seconds % 60;

    if (minutes < 10) {
	minutes = "0" + minutes;
    }
    if (secofmin < 10) {
	secofmin = "0" + secofmin; 
    }

    return minutes + ":" + secofmin;
}