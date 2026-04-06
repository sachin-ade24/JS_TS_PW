let a  = 10;
let b = 20;
console.log(a+b);//30; <-- This is not a concatination, this addition.

console.log('Hello' + 'Playwright'); //<-- This is a concatination.

let x = 'Hello';
let y = 'Playwright';

//console.log();
console.log(a + b + x + y);//30HelloPlaywright
console.log(x + y + a + b);//HelloPlaywright1020
console.log(x + y + (a + b));//HelloPlaywright30
console.log(a + b + x + y + a + b);//30HelloPlaywright1020

console.log('The value of a: ' + a);
console.log('The value of b: ' + b);
console.log('The sum of a and b: ' + (a+b));


