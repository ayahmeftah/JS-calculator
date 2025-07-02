/*Create a simple calculator app using JavaScript that runs in the browser. This calculator will take user input via prompt() and display results using alert(). The goal is to practice working with variables, user input, operators, and control flow.

The app should ask the user to input two numbers.
The app should then ask the user to choose an operation (+, -, *, /).
Perform the selected operation on the numbers.
Display the result using alert().
If the user enters invalid input (e.g., a non-number), display an error message.
The app should run inside a web browser (using an HTML file with a <script> tag).*/

/*Prevent division by zero and show an appropriate error message.
Automatically ask the user if they want to do another calculation WITHOUT refreshing the page.
Improve user experience with meaningful error handling and messages.
Allow users the option to get the exponent of a number (you might need to google this)
Allow users to find the Square Root of a number (this will be a control flow challenge as it will only require a single number input)*/

let repeat = false;

do {
    let num1 = prompt("Enter first number:");
    num1 = numberCheck(parseFloat(num1));

    if (isNaN(num1) == false) {
        let num2 = prompt("Enter second number:");
        num2 = numberCheck(parseFloat(num2));

        if (isNaN(num2) == false) {
            let operator = prompt("Enter operator (+, -, *, /, **, ***):\nNote: Use '**' for exponentiation");
            operator = operatorCheck(operator);

            while (operator === "/" && parseFloat(num2) === 0) {
                alert("Division by zero is not allowed. Please enter a non-zero second number");
                num2 = prompt("Enter second number:");
                num2 = numberCheck(parseFloat(num2));
                operator = prompt("Enter operator (+, -, *, /, **):\nNote: Use '**' for exponentiation");
                operator = operatorCheck(operator);
            }

            switch (operator) {
                case "+":
                    alert(`Result: ${num1} + ${num2} = ${parseFloat(num1) + parseFloat(num2)}`);
                    break;
                case "-":
                    alert(`Result: ${num1} - ${num2} = ${parseFloat(num1) - parseFloat(num2)}`);
                    break;
                case "*":
                    alert(`Result: ${num1} * ${num2} = ${parseFloat(num1) * parseFloat(num2)}`);
                    break;
                case "/":
                    alert(`Result: ${num1} / ${num2} = ${parseFloat(num1) / parseFloat(num2)}`);
                    break;
                case "**":
                    alert(`Result: ${num1} raised to the power of ${num2} = ${Math.pow(parseFloat(num1), parseFloat(num2))}`);
                    break;
                default:
                    operator = operatorCheck(operator);
            }
        }
    }

    let repeatMessage = prompt("Do you want to perform another calculation? (yes/no)");
    repeatMessage = repeatMessage.toLowerCase();

    if (repeatMessage === "no") {
        repeat = true;
    }

} while (repeat === false);

function numberCheck(num) {
    while (isNaN(num) || num === "") {
        alert("Invalid input, please enter a valid number");
        num = prompt("Enter a valid number:");
        num = parseFloat(num);
    }
    return num;
}
function operatorCheck(operator) {
    const validOperators = ["+", "-", "*", "/", "**"];
    while (!validOperators.includes(operator)) {
        alert("Invalid operator. Please enter +, -, *, /, or **");
        operator = prompt("Enter operator (+, -, *, /, **):\nNote: Use '**' for exponentiation");
        operator = operator;
    }
    return operator;
}