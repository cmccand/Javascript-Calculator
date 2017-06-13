var display = document.querySelector("#entry");
console.log(display);
var calcButtons = document.querySelectorAll(".calculatorButton");
console.log(calcButtons);
var expression = "";
console.log("expression: ", expression);
var operation = document.querySelectorAll(".operation");
var state = "evaluated";
var num1 = "";
var operator = "";
var num2 = "";

function handleEntry(event) {
  var value = event.target.textContent;
  console.log("you clicked: ", value);
  if (value == "C") {
    expression = "";
    state = "evaluated";
  } else if (/[0-9]/.test(value) && state == "evaluated") {
    num1 += value;
    expression += value;
  } else if (/[+X/\\-]/.test(value) && num1 != "" && state == "evaluated") {
    state = "num2Entry";
    operator = value;
    expression += value;
  } else if (state == "num2Entry") {
    if (/[0-9]/.test(value)) {
      num2 += value;
      expression += value;
    } else if (value == "=" && num2 != "") {
      expression = evaluateExpresssion(
        parseInt(num1),
        parseInt(num2),
        operator
      );
    }
  }

  display.textContent = expression;
}

// loop through calcButtons
// As long a button doesn't have an id of equals, clear, or entry
// add a "click" eventListener and pass in update display

for (var i = 0; i < calcButtons.length; i++) {
  calcButtons[i].addEventListener("click", handleEntry);
}
function evaluateExpresssion(n1, n2, o) {
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
