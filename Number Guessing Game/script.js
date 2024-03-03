//Element Selectors

const startBtn = document.querySelector(".js-start-btn");
const instruction = document.querySelector(".js-instruction");
const resetBtn = document.querySelector(".js-reset-btn");
const playerInput = document.querySelector(".js-player-input");
const result = document.querySelector(".js-result");
const scr = document.querySelector(".js-score");

let timeoutId;
let randomNumber;
let score = 20;
function generateRandom() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
}

//Event Listener

window.addEventListener("load", () => {
  playerInput.value = "";
});

startBtn.addEventListener("click", () => {
  resultHTML("");
  scr.innerHTML = 20;
  if (timeoutId) clearTimeout(timeoutId);
  instruction.innerHTML = "The Computer is choosing the random number";
  timeoutId = setTimeout(() => {
    generateRandom();
    instruction.innerHTML = "Guess the Number between 0 and 100 :)";
  }, 1000);
});

const resetDetails = function () {
  resultHTML("");
  instruction.innerHTML = playerInput.value = "";
  score = 20;
  scr.innerHTML = score;
};

resetBtn.addEventListener("click", resetDetails);

function resultHTML(str) {
  result.innerHTML = str;
}

function guessTheNumber() {
  if (score !== 0) {
    let playerGuess = +playerInput.value;
    const invalidNumCondition = playerGuess >= 0 && playerGuess <= 100;

    if (!playerGuess || playerGuess === "") {
      resultHTML("Ooops⛔....Enter the number...");
    }

    if (playerGuess === randomNumber) {
      result.style.color = "rgb(4, 228, 34)";
      resultHTML(`You Won 💥💥💥!!! You Scored: ${score}!!`);
      return;
    } else if (playerGuess > randomNumber && invalidNumCondition) {
      result.style.color = "rgb(70, 180, 253)";
      resultHTML("Guess the smaller number.📉.!!");
      score--;
      scr.innerHTML = score;
    } else if (playerGuess < randomNumber && invalidNumCondition) {
      result.style.color = "rgb(70, 180, 253)";
      resultHTML("Guess the greater number.📈.!!");
      score--;
      scr.innerHTML = score;
    } else if (playerGuess < 0 || playerGuess > 100) {
      result.style.color = "rgb(224, 57, 57)";
      resultHTML("Enter the number between 0 and 99 only.⛔.");
    }
  } else {
    result.style.color = "rgb(224, 57, 57)";
    resultHTML("You Lost 💩💩💩..Try again Buddy..😄");
  }
}

let timeoutId1;

playerInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    guessTheNumber();
  }

  if (timeoutId1) {
    clearTimeout(timeoutId1);
  }

  timeoutId1 = setTimeout(() => {
    result.innerHTML = "";
  }, 3500);
});
