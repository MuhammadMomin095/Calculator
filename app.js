// DOM Elements
var display = document.getElementById("display");
var buttons = document.querySelectorAll(".button");
var currentInput = "";
var operator = null;
var firstOperand = null;
var secondOperand = null;
buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        var value = button.textContent;
        if (value === "C") {
            // Clear the display
            currentInput = "";
            operator = null;
            firstOperand = null;
            secondOperand = null;
            display.value = "";
        }
        else if (value === "=") {
            // Perform calculation
            if (firstOperand && operator && currentInput) {
                secondOperand = currentInput;
                var result = calculate(Number(firstOperand), Number(secondOperand), operator);
                display.value = result.toString();
                currentInput = result.toString();
                firstOperand = null;
                operator = null;
                secondOperand = null;
            }
        }
        else if (value === "+" || value === "-" || value === "*" || value === "/") {
            // Store operator and first operand
            if (currentInput) {
                firstOperand = currentInput;
                operator = value;
                currentInput = "";
            }
        }
        else {
            // Append numbers to input
            currentInput += value;
            display.value = currentInput;
        }
    });
});
function calculate(a, b, operator) {
    switch (operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b;
        default:
            return 0;
    }
}
