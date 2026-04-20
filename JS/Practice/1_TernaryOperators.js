//1.
let num1 = 100;
let num2 = 200;
let calculation = num1>=100 && num2>100 ? num1 + num2 : num2 - num1;
console.log(calculation);

//2.
let n = 20;
/*
let a = n>20 ? (a = n) : (a = n + 1);
console.log(a);//ReferenceError: Cannot access 'a' before initialization
*/
let a = n>30 ? n++:n--;
console.log(a);//20
console.log(n);//19

//3.
let c1 = 'Hello';
let c2 = c1.length>3 ? c1.concat(' world!') : c1;
console.log(c2);//Hello world!

//4.
let d = 15;
let bill = d>15 ? 100 : 200;
console.log(bill);//200
