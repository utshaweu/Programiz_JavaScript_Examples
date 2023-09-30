let a = prompt('Enter the first variable: ');
let b = prompt('Enter the second variable: ');

let temp;

temp = a;
a = b;
b = temp;

console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);


//Using es6(ES2015) Destructuring assignment

let c = prompt('Enter the first variable: ');
let d = prompt('Enter the second variable: ');

[c,d] = [d,c];

console.log(`The value of c after swapping: ${c}`);
console.log(`The value of d after swapping: ${d}`);

//Using Arithmetic Operators

let e = parseInt(prompt('Enter the first variable: '));
let f = parseInt(prompt('Enter the second variable: '));

 e = e + f;
 f = e - f;
 e = e - f;

 console.log(`The value of e after swapping: ${e}`);
 console.log(`The value of f after swapping: ${f}`);

 //Using Bitwise XOR operator

 let g = prompt('Enter the first variable: ');
 let h = prompt('Enter the second variable: ');

 g = g ^ h;
 h = g ^ h;
 g = g ^ h;

 console.log(`The value of g after swapping: ${g}`);
 console.log(`The value of h after swapping: ${h}`);