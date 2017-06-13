var display = document.querySelector("#entry");
console.log(display);
var calcButtons = document.querySelectorAll(".calculatorButton");
console.log(calcButtons);
var expression = "";
console.log("expression: ", expression);
var operation = document.querySelectorAll(".operation");

function updateDisplay(event) {
  var value = event.target.textContent;
  console.log(value);
  expression += value;
  console.log("expression: ", expression);
  display.innerHTML = expression;
}

// loop through calcButtons
// As long a button doesn't have an id of equals, clear, or entry
// add a "click" eventListener and pass in update display

for (var i = 0; i < calcButtons.length; i++) {
  if (calcButtons[i].className) {
    calcButtons[i].addEventListener("click", updateDisplay);
  }
}
