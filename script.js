"use strict"
let timerInterval;
let currentTime = 0;

function updateTime() {
    const timeElement = document.querySelector('.time');
    timeElement.textContent = `${currentTime} sec`;
}

function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        currentTime++;
        updateTime();
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
    currentTime = 0;
    updateTime();
}

function pauseTimer() {
    clearInterval(timerInterval);
}

const startButton = document.getElementById('start');
startButton.addEventListener('click', startTimer);

const pauseButton = document.getElementById('pause');
pauseButton.addEventListener('click', pauseTimer);

const stopButton = document.getElementById('stop');
stopButton.addEventListener('click', stopTimer);