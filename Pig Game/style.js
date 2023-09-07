//Selecting Elements //
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
const finalScore0 = document.querySelector(".player_score0");
const finalScore1 = document.querySelector(".player_score1");
const currentScore0 = document.querySelector(".current-score0");
const currentScore1 = document.querySelector(".current-score1");

const btnNew = document.querySelector(".btn-new");
const btnHold = document.querySelector(".btn-hold");
const btnRoll = document.querySelector(".btn-roll");
const dice = document.querySelector(".dice");

let score, currentScore, activePLayer, playing;
// Variables for js only //
const initial = function () {
  //   intial conditions of the game //
  score = [0, 0];
  currentScore = 0;
  playing = true;
  activePLayer = 0;
  //setting all the text content of game //
  finalScore0.textContent = 0;
  finalScore1.textContent = 0;
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;

  player0.classList.add("player--active");
  player1.classList.remove("player--active");
  dice.classList.add("hidden");
  document
    .querySelector(`.player--${activePLayer}`)
    .classList.remove("player--winner");
  btnHold.classList.remove("hidden");
  btnRoll.classList.remove("hidden");
};
initial();

//check winner //
const checkWinner = function () {
  let temp = document.querySelector(`.player_score${activePLayer}`);
  let x = parseInt(temp.textContent);
  if (x >= 100) {
    document
      .querySelector(`.player--${activePLayer}`)
      .classList.add("player--winner");
    btnHold.classList.add("hidden");
    btnRoll.classList.add("hidden");
    dice.classList.add("hidden");
  }
};
//active player //
const changePlayer = function () {
  if (player0.classList.contains("player--active")) {
    let x = parseInt(finalScore0.textContent);
    x += parseInt(currentScore0.textContent);
    finalScore0.textContent = x;
    player0.classList.remove("player--active");
    player1.classList.add("player--active");
    checkWinner();
    activePLayer = 1;
    currentScore0.textContent = 0;
  } else {
    let x = parseInt(finalScore1.textContent);
    x += parseInt(currentScore1.textContent);
    finalScore1.textContent = x;
    player1.classList.remove("player--active");
    player0.classList.add("player--active");
    checkWinner();
    activePLayer = 0;
    currentScore1.textContent = 0;
  }
};
btnHold.addEventListener("click", changePlayer);

// roll dice funtionality //
btnRoll.addEventListener("click", function () {
  // generate a random number btw 1 and 6//
  const rand = Math.trunc(Math.random() * 6) + 1;
  if (rand == 1) {
    if (player0.classList.contains("player--active")) {
      player0.classList.remove("player--active");
      player1.classList.add("player--active");
      checkWinner();
      activePLayer = 1;
      currentScore0.textContent = 0;
    } else {
      player1.classList.remove("player--active");
      player0.classList.add("player--active");
      checkWinner();
      activePLayer = 0;
      currentScore1.textContent = 0;
    }
  }
  //add image of doice according to number //
  dice.setAttribute("src", `/Pig Game//images/dice-${rand}.png`);
  dice.classList.remove("hidden");
  // update the current score //
  if (activePLayer == 0) {
    let x = parseInt(currentScore0.textContent);
    x += rand;
    currentScore0.textContent = x;
  } else {
    let y = parseInt(currentScore1.textContent);
    y += rand;
    currentScore1.textContent = y;
  }
});

// new game //
btnNew.addEventListener("click", function () {
  initial();
});


//pange //