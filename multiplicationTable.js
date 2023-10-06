const number = parseInt(prompt("Enter an integer: "));

for (let i = 1; i <= number; i++) {
  const result = i * number;
  console.log(`${number} * ${i} = ${result}`);
}

//Multiplication Table Up to a Range

const number2 = parseFloat(prompt("Enter an integer: "));
const range = parseFloat(prompt("Enter a range: "));

for (let i = 1; i <= range; i++) {
  const result = i * number2;
  console.log(`${number} * ${i} = ${result}`);
}
