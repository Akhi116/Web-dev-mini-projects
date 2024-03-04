const coin = document.querySelector("#coin");
const button = document.querySelector("#flip");
const statusbar = document.querySelector("#status");
const heads = document.querySelector("#headCount");
const tails = document.querySelector("#tailCount");

let headsCount = 0;
let tailsCount = 0;

function processResult(result) {
  if (result === "heads") {
    headsCount++;
    heads.innerHTML = headsCount;
  } else {
    tailsCount++;
    tails.innerHTML = tailsCount;
  }

  statusbar.innerHTML = result.toUpperCase();
}

function flipCoin() {
  const random = Math.random();

  const result = random < 0.5 ? "heads" : "tails";

  setTimeout(() => {
    coin.setAttribute("class", "animate-" + result);

    setTimeout(() => {
      processResult(result);
    }, 2500);
  }, 100);
}

button.addEventListener("click", flipCoin);
