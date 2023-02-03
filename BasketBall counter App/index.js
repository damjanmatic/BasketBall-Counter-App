// Home Points Increment Buttons

const btnH1 = document.querySelector('.home-1');
const btnH2 = document.querySelector('.home-2');
const btnH3 = document.querySelector('.home-3');

// Away Points Increment Buttons

const btnA1 = document.querySelector('.away-1');
const btnA2 = document.querySelector('.away-2');
const btnA3 = document.querySelector('.away-3');

// Functionality Buttons

const startBtn = document.querySelector('.continue');
const pauseBtn = document.querySelector('.pause');
const startRestart = document.querySelector('.new-game');
const restartTimer = document.querySelector('.resetTime');

// Time And Points Control

let homeScore = document.querySelector('.home-score-title');
let awayScore = document.querySelector('.away-score-title');
let time = document.querySelector('.time');
let homePoints = 0;
let awayPoints = 0;
let intervalId;
let quarterMinutes = 10;
let startingTime = quarterMinutes * 60;

// Time E-listeners

startRestart.addEventListener('click', startGame);
startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
restartTimer.addEventListener('click', resetTime)

//  Start Restart Functionality

function startGame() {
    homePoints = 0;
    awayPoints = 0;
    homeScore.textContent = homePoints;
    awayScore.textContent = awayPoints;
    let period = document.getElementById('period');
    period.value = '1';
    pauseTimer();
    quarterMinutes = 10;
    startingTime = quarterMinutes * 60
    time.textContent = '10:00'

}

// Home Score Increment Render
btnH1.addEventListener('click', function() {
    homePoints += 1;
    homeScore.textContent = homePoints;
})
btnH2.addEventListener('click', function() {
    homePoints += 2;
    homeScore.textContent = homePoints;
})
btnH3.addEventListener('click', function() {
        homePoints += 3;
        homeScore.textContent = homePoints;
    })
    // Away Score Increment Render

btnA1.addEventListener('click', function() {
    awayPoints += 1;
    awayScore.textContent = awayPoints;
})
btnA2.addEventListener('click', function() {
    awayPoints += 2;
    awayScore.textContent = awayPoints;
})
btnA3.addEventListener('click', function() {
    awayPoints += 3;
    awayScore.textContent = awayPoints;
})


//  Timer

function timer() {

    let minutes = Math.floor(startingTime / 60);
    let seconds = startingTime % 60;
    seconds = seconds < '10' ? '0' + seconds : seconds;
    time.textContent = `${minutes}:${seconds}`;
    startingTime--;
    if (minutes < 10) {
        time.textContent = `0${minutes}:${seconds}`
    }
    if (minutes < 0) {
        pauseTimer();
        time.textContent = `00:00`;
        let period = document.getElementById('period');
        if (period.value == '1' || period.value == '2' || period.value == '3') {
            period.value++;
        } else if (period.value == '4') {
            period.value = 'end';
        }
    }

}

// Interval Control

function startTimer() {
    intervalId = setInterval(timer, 1000)
}

function pauseTimer() {
    clearInterval(intervalId)
}

function resetTime() {
    quarterMinutes = 10;
    startingTime = quarterMinutes * 60
    timer()
}