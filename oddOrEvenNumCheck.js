const number = parseInt(prompt("Enter a number: "));

if (number % 2 === 0) {
  console.log("The number is even");
} else {
  console.log("The number is odd");
}

// Using Ternary Operator

const number2 = parseInt(prompt("Enter a number: "));

const result = (number % 2 === 0) ? "even" : "odd";

console.log(`The number is ${result}`);