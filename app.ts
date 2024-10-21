// DOM Elements
const display = document.getElementById("display") as HTMLInputElement;
const buttons = document.querySelectorAll(".button") as NodeListOf<HTMLButtonElement>;

let currentInput: string = "";
let operator: string | null = null;
let firstOperand: string | null = null;
let secondOperand: string | null = null;

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (value === "C") {
            // Clear the display
            currentInput = "";
            operator = null;
            firstOperand = null;
            secondOperand = null;
            display.value = "";
        } else if (value === "=") {
            // Perform calculation
            if (firstOperand && operator && currentInput) {
                secondOperand = currentInput;
                const result = calculate(Number(firstOperand), Number(secondOperand), operator);
                display.value = result.toString();
                currentInput = result.toString();
                firstOperand = null;
                operator = null;
                secondOperand = null;
            }
        } else if (value === "+" || value === "-" || value === "*" || value === "/") {
            // Store operator and first operand
            if (currentInput) {
                firstOperand = currentInput;
                operator = value;
                currentInput = "";
            }
        } else {
            // Append numbers to input
            currentInput += value;
            display.value = currentInput;
        }
    });
});

function calculate(a: number, b: number, operator: string): number {
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
