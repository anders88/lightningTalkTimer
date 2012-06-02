"use strict";

var totalSecs = 300;
var secLeft = 300;
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
    var c = document.getElementById("counter");
    secLeft = totalSecs;
    c.innerHTML = formatTime(secLeft);
}

function adjustTotal(diff) {
    var clockAtStart = (totalSecs === secLeft);
    if (totalSecs+diff > 0) {
	totalSecs = totalSecs + diff;
    }
    var tot = document.getElementById("totalTime");
    tot.innerHTML = formatTime(totalSecs);
    if (clockAtStart) {
	secLeft = totalSecs;
	var c = document.getElementById("counter");
	c.innerHTML = formatTime(secLeft);
    }

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