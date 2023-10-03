const a = Math.random();

console.log(a);

// Get a Random Number between 1 to 10

const b = Math.random() * (10 - 1) + 1;

console.log(`Random value between 1 to 10 is ${b}`);

// Integer Value between 1 and 10

const c = Math.floor(Math.random() * (10 - 1)) + 1;

console.log(`Random value between 1 and 10 is ${c}`);

//Integer Value between Two Numbers(Inclusive)

const max = parseInt(prompt("Enter a max value: "));
const min = parseInt(prompt("Enter a min value: "));

const d = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(`Random value between ${min} and ${max} is ${d}`);