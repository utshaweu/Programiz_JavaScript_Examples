let sum = 0;
const number = prompt("Enter a three-digit positive integer: ");

let temp = number;

while (temp > 0) {
  //finding the one's digit
  let remainder = temp % 10;
  sum += remainder * remainder * remainder;

  //removing last digit from the number
  temp = parseInt(temp / 10);
}

if (sum === number) {
  console.log(`${number} is an Armstrong number`);
} else {
  console.log(`${number} is not an Armstrong number`);
}

//Check Armstrong Number of n Digits
const number2 = prompt("Enter a positive integer: ");
const numberOfDigits = number2.length;
let sum2 = 0;

let temp2 = number2;

while (temp2 > 0) {
  let remainder2 = temp2 % 10;
  sum2 += remainder2 ** numberOfDigits;
  temp2 = parseInt(temp2 / 10);
}

if (sum2 === number2) {
  console.log(`${number2} is an Armstrong number`);
} else {
  console.log(`${number2} is not an Armstrong number`);
}
