// Basic formula area of a triangle
// area = ( base * height ) / 2

const baseValue = prompt('Enter the base of a triangle');
const heightValue = prompt('Enter the height of a triangle');

const areaValue = ( baseValue * heightValue ) / 2;

console.log(`The area of the triangle is ${areaValue}`);

// Area When All Sides are Known
/*
  Heron's formula
  s = (a+b+c)/2
  area = √(s(s-a)*(s-b)*(s-c))
*/

const side1 = parseInt(prompt('Enter side1: '));
const side2 = parseInt(prompt('Enter side2: '));
const side3 = parseInt(prompt('Enter side3: '));

const s = (side1 + side2 + side3) / 2;
const a = Math.sqrt(s * (s-side1) * (s-side2) * (s-side3));

console.log(`The area of the triangle is ${a}`);

