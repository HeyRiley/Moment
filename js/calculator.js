const table = document.querySelector("table");
const btn = table.querySelectorAll("button");
const print = document.querySelector(".js-print");
let firstVal = "",
  secondVal = "",
  operator = "";
let firstDone = false,
  secondDone = false;
let result = 0;

function doOperation(firstVal, secondVal, operator) {
  const num1 = parseFloat(firstVal);
  const num2 = parseFloat(secondVal);

  if (operator === "*") {
    return num1 * num2;
  } else if (operator === "/") {
    return num1 / num2;
  } else if (operator === "+") {
    return num1 + num2;
  } else if (operator === "-") {
    return num1 - num2;
  } else {
    return;
  }
}

function calculate() {
  result = doOperation(firstVal, secondVal, operator);
  console.log(result);
  print.innerText = result;
  firstVal = result;
  secondVal = "";
  secondDone = false;
}

function handleClick(e) {
  const input = e.target.innerText;
  const input_CN = e.target.className;
  const NUMBER = "number",
    OPERATOR = "operator",
    RESET = "reset",
    EQUALS = "equals";

  if (input_CN === RESET) {
    console.log("reset");
    firstDone = false;
    secondDone = false;
    firstVal = "";
    secondVal = "";
    print.innerText = 0;
  }
  if (input_CN === NUMBER) {
    if (!firstDone) {
      firstVal += input;
      print.innerText = firstVal;
      console.log("1val", firstVal);
    } else {
      secondVal += input;
      print.innerText = secondVal;
      console.log("2val", secondVal);
    }
  } else if (input_CN === OPERATOR) {
    if (!firstDone) {
      firstDone = true;
    }
    operator = input;
    console.log("부호", operator);
    if (firstDone && secondDone) {
      calculate();
    }
  } else if (input_CN === EQUALS) {
    secondDone = true;
    console.log(firstVal, secondVal, firstDone && secondDone);
    if (firstDone && secondDone) {
      calculate();
    }
  }
}

function init() {
  btn.forEach(function (b) {
    b.addEventListener("click", handleClick);
  });
}

init();
