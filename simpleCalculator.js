const operator = prompt("Enter operator ( either +,-, * or / ): ");

const number1 = parseFloat(prompt("Enter first number: "));
const number2 = parseFloat(prompt("Enter second number: "));

let result;

if (operator === "+") {
  result = number1 + number2;
} else if (operator === "-") {
  result = number1 - number2;
} else if (operator === "*") {
  result = number1 * number2;
} else {
  result = number1 / number2;
}

console.log(`${number1} ${operator} ${number2} = ${result}`);

//Simple Calculator with Switch

let result2;

const operator2 = prompt("Enter operator ( either +, -, * or / ): ");

const number3 = parseFloat(prompt("Enter first number: "));
const number4 = parseFloat(prompt("Enter second number: "));

switch (operator2) {
  case "+":
    result2 = number3 + number4;
    console.log(`${number3} ${operator2} ${number4} = ${result2}`);
    break;
  case "-":
    result2 = number3 - number4;
    console.log(`${number3} ${operator2} ${number4} = ${result2}`);
    break;
  case "*":
    result2 = number3 * number4;
    console.log(`${number3} ${operator2} ${number4} = ${result2}`);
    break;
  case "/":
    result2 = number3 / number4;
    console.log(`${number3} ${operator2} ${number4} = ${result2}`);
    break;
  default:
    console.log("Invalid operator");
    break;
}
