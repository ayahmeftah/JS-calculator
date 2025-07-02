let repeat = false;

do {
    let num1 = prompt("Enter first number:");
    num1 = numberCheck(parseFloat(num1));

    if (isNaN(num1) == false) {
        let num2 = prompt("Enter second number:");
        num2 = numberCheck(parseFloat(num2));

        if (isNaN(num2) == false) {
            let operator = prompt("Enter operator (+, -, *, /, **, ***):\nNote: Use '**' for exponentiation\nNote: Use '***' for square root");
            operator = operatorCheck(operator.trim());

            while (operator === "/" && parseFloat(num2) === 0) {
                alert("Division by zero is not allowed. Please enter a non-zero second number");
                num2 = prompt("Enter second number:");
                num2 = numberCheck(parseFloat(num2));
                operator = prompt("Enter operator (+, -, *, /, **, ***):\nNote: Use '**' for exponentiation\nNote: Use '***' for square root");
                operator = operatorCheck(operator);
            }

            switch (operator) {
                case "+":
                    alert(`Result: \n${num1} + ${num2} = ${parseFloat(num1) + parseFloat(num2)}`);
                    break;
                case "-":
                    alert(`Result: \n${num1} - ${num2} = ${parseFloat(num1) - parseFloat(num2)}`);
                    break;
                case "*":
                    alert(`Result: \n${num1} * ${num2} = ${parseFloat(num1) * parseFloat(num2)}`);
                    break;
                case "/":
                    alert(`Result: \n${num1} / ${num2} = ${parseFloat(num1) / parseFloat(num2)}`);
                    break;
                case "**":
                    alert(`Result: \n${num1} raised to the power of ${num2} = ${Math.pow(parseFloat(num1), parseFloat(num2))}`);
                    break;
                case "***":
                    let num = squareRoot(num1, num2);
                    alert(`Result: \nSquare root of ${num} = ${Math.sqrt(parseFloat(num))}`);
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
    } else if (repeatMessage === "yes") {
        repeat = false;
    } else {
        while (repeatMessage !== "yes" && repeatMessage !== "no") {
            alert("Invalid input, please enter 'yes' or 'no'");
            repeatMessage = prompt("Do you want to perform another calculation? (yes/no)");
            repeatMessage = repeatMessage.toLowerCase();
        }

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
    const validOperators = ["+", "-", "*", "/", "**", "***"];
    while (!validOperators.includes(operator)) {
        alert("Invalid operator. Please enter +, -, *, /, **, or ***");
        operator = prompt("Enter operator (+, -, *, /, **, ***):\nNote: Use '**' for exponentiation\nNote: Use '***' for square root");
        operator = operator;
    }
    return operator;
}

function squareRoot(num1, num2) {
    let sqrtNum = prompt(`You have chosen to square root.\nPlease enter the number you would like to find the square root of, it can be your first entry, second entry, or any other number:\n First number entry: ${num1}\n Second number entry: ${num2}`);

    return numberCheck(parseFloat(sqrtNum));
}

