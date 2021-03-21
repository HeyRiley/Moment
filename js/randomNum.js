const title = document.querySelector(".js-title");
const range = document.querySelector(".js-range");
const randomForm = document.querySelector(".js-randForm");
const guessInput = randomForm.querySelector("input");
const result = document.querySelector(".js-result");

let answer = 0;
let maxValue = 0;

function generageNumber(maxValue) {
  const min = 0;
  const max = Math.floor(maxValue);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function paintResult(guess) {
  result.innerText = `You chose: ${guess}, the machine chose: ${answer}.
  ${guess === answer ? "You Won!" : "You lost!"}`;
}

function handleSubmit(event) {
  event.preventDefault();
  answer = generageNumber(maxValue);
  const guess = parseInt(guessInput.value);
  if (!guess) {
    return;
  }
  // console.log(answer, guess);
  paintResult(guess);
}

function handleRange() {
  maxValue = parseInt(range.value);
  const span = title.querySelector("span");
  span.innerText = `${maxValue}`;
}

function init() {
  range.addEventListener("change", handleRange);
  randomForm.addEventListener("submit", handleSubmit);
}

init();
