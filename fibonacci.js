const number = parseInt(prompt("Enter the number of terms: "));
let n1 = 0,
  n2 = 1,
  nextTerm;

console.log("Fibonacci series:");

for (let i = 1; i <= number; i++) {
  console.log(n1);
  nextTerm = n1 + n2;
  n1 = n2;
  n2 = nextTerm;
}

//Fibonacci Sequence Up to a Certain Number

const number2 = parseInt(prompt("Enter a positive number: "));
let n3 = 0,
  n4 = 1,
  nextTerm2;

console.log("Fibonacci Series: ");
console.log(n3);
console.log(n4);

nextTerm2 = n3 + n4;

while (nextTerm2 <= number2) {
  console.log(nextTerm2);
  n3 = n4;
  n4 = nextTerm2;
  nextTerm2 = n3 + n4;
}
