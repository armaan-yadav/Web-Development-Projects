"use strict";
function generateRandomNumber(max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
let maximum = 20;
let minimum = 1;
let number = generateRandomNumber(maximum, minimum); //Random Number generated //

const guess = document.querySelector(".guess");
const check = document.querySelector(".check");
const message = document.querySelector(".message");
const score = document.querySelector(".score");
const hScore = document.querySelector(".highscore");

let highScore = 20;
// Trying to get and store the number entered by thre user //
let guessNumber = null;
guess.addEventListener("input", function () {
  guessNumber = parseInt(event.target.value);
});

//CHECK BUTTON -->  Comparing the input and actual number //
check.addEventListener("click", function () {
  if (guessNumber < number) {
    message.textContent = "Too Low!";
    highScore--;
    score.textContent = highScore;
    guess.value = "";
  }
  if (guessNumber > number) {
    highScore--;
    score.textContent = highScore;
    message.textContent = "Too High!";
    guess.value = "";
  }
  if (guessNumber == number) {
    // Winning Effect //
    message.textContent = "Congrats..You Won!!! :D";
    document.querySelector("body").style.backgroundColor = "green";
    if (hScore.textContent <= score.textContent || hScore.textContent == '0') {
      hScore.textContent = score.textContent;
    }
    // Next Round //
  }
});

// Again Function //
function again() {
  document.querySelector("body").style.backgroundColor = "#222";
  message.textContent = "Start guessing...";
  score.textContent = "20";
  number = generateRandomNumber(maximum, minimum);
  guess.value = "";
}
