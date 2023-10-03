const number = parseInt(prompt('Enter a number: '), 10);

if (number > 0) {
  console.log("The number is positive");
} else if (number === 0) {
  console.log("The number is zero");
} else {
  console.log("The number is negative")
}

// Check Number Type with nested if...else

const number2 = parseInt(prompt('Enter a number: '));

if (number2 >= 0) {
  if (number === 0) {
    console.log("The number is zero");
  } else {
    console.log("The number is positive");
  }
} else {
  console.log("The number is negative");
}