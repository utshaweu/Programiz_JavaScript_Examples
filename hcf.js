let hcf;

const number1 = prompt("Enter a first positive integer: ");
const number2 = prompt("Enter a second positive integer: ");

for (let i = 1; i <= number1 && i <= number2; i++) {
  if (number1 % i === 0 && number2 % i === 0) {
    hcf = i;
  }
}

console.log(`HCF of ${number1} and ${number2} is ${hcf}`);

//HCF using while loop and if....else

let number3 = prompt("Enter a first positive integer: ");
let number4 = prompt("Enter a second positive integer: ");

while (number3 != number4) {
  if (number3 > number4) {
    number3 -= number4;
  } else {
    number4 -= number3;
  }
}

console.log(`HCf is ${number3}`);
