const num1 = prompt("Enter a first positive integer: ");
const num2 = prompt("Enter a second positive integer: ");

let min = num1 > num2 ? num1 : num2;

while (true) {
  if (min % num1 == 0 && min % num2 == 0) {
    console.log(`The LCM of ${num1} and ${num2} is ${min}`);
    break;
  }
  min++;
}

// LCM Calculation Using HCF

let hef;

const number1 = prompt("Enter a first positive integer: ");
const number2 = prompt("Enter a second positive integer: ");

// find hcf
for (let i = 1; i <= number1 && i <= number2; i++) {
  if (number1 % i === 0 && number2 % i === 0) {
    hcf = i;
  }
}
//find lcm
let lcm = (number1 * number2) / hcf;

console.log(`HCF of ${number1} and ${number2} is ${lcm}.`);
