const num1 = parseFloat(prompt("Enter first number: "));
const num2 = parseFloat(prompt("Enter second number: "));
const num3 = parseFloat(prompt("Enter third number: "));

let largest;

if (num1 >= num2 && num1 >= num3) {
  largest = num1;
} else if (num2 >= num1 && num2 >= num3) {
  largest = num2;
} else {
  largest = num3;
}

console.log(`The largest number is ${largest}`);

//Using Math.max()

const num4 = parseFloat(prompt("Enter first number: "));
const num5 = parseFloat(prompt("Enter second number: "));
const num6 = parseFloat(prompt("Enter third number: "));

const largest2 = Math.max(num4, num5, num6);

console.log(`The largest number is ${largest2}`);