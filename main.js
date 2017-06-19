var display = document.querySelector("#entry");
var numberButtons = document.querySelectorAll(".numberButton");
var operators = document.querySelectorAll(".operation");
var expression = "";
var operator = "";
var numbers = new Array;
var startNewNumber = true;
var isAfterEquals = false;

function evaluateExpression(n1, n2, o) {
  if (o == "+") {
    return n1 + n2;
  } else if (o == "-") {
    return n1 - n2;
  } else if (o == "/") {
    return n1 / n2;
  } else if (o == "X") {
    return n1 * n2;
  }
}

function numberClick(event) {
  const value = event.target.textContent;
  if (startNewNumber) {
    expression = '';
    startNewNumber = false;
  }
  expression += value;
  display.textContent = expression;
}

function operatorClick(event) {
  const value = event.target.textContent;
  if (isAfterEquals) {
    isAfterEquals = false;
    startNewNumber = true;
    operator = value;
    return;
  }
  if (numbers.length > 0) {
    const currentResult = evaluateExpression(
      parseFloat(numbers[0]),
      parseFloat(display.textContent),
      operator
    );
    numbers[0] = currentResult;
    display.textContent = numbers[0];
  } else {
    numbers.push(display.textContent);
  }
  operator = value;
  startNewNumber = true;
}

function clear() {
  expression = '';
  display.textContent = expression;
  startNewNumber = true;
  isAfterEquals = false;
  numbers = [];
}

function equals() {
  const currentResult = evaluateExpression(
    parseFloat(numbers[0]),
    parseFloat(display.textContent),
    operator
  );
  numbers[0] = currentResult;
  display.textContent = numbers[0];
  startNewNumber = true;
  isAfterEquals = true;
}

for (var i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener("click", numberClick);
}

for (var i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", operatorClick);
}

document.getElementById("clear").onclick = clear;
document.getElementById("equals").onclick = equals;
