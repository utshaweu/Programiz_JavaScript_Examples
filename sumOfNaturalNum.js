const number = parseInt(prompt("Enter a positive integer: "));

let sum = 0;

for (let i = 1; i <= number; i++) {
  sum += i;
}

console.log("The sum of natural numbers:", sum);

// Sum of Natural Numbers Using while Loop

const number2 = parseInt(prompt("Enter a positive integer: "));

let sum2 = 0,
  i = 1;

while (i <= number2) {
  sum2 += i;
  i++;
}

console.log("The sum of natural numbers:", sum2);
