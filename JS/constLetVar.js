//var

//Declaration: Re-declararion is allowed with var
var x = 10;
var x = 20;
var x = 30;
console.log(x);//30


//Reassignment: is allowed with var
var y = 100;
y = 200;
y = 300;
console.log(y);


//Hoisting:
console.log(t);//at this line --> o/p: ReferenceError: t is not defined
var t = 90;//at this line --> o/p: undefined

//=========================================================================================================================================

//let
let a;
console.log(a);

//Reassignment: is allowed with let
let total = 900;
total = 970;
total = 1000;
console.log(total);

//Hoisting
//console.log(h);// at this line --> o/p: ReferenceError: h is not defined 
//let h = 25;//at this line --> o/p: ReferenceError: Cannot access 'h' before initialization

//=========================================================================================================================================

//const: Use for universal truth.
const PI = 3.14;
//PI = 9.5;//not allowed --> TypeError: Assignment to constant variable.
const LOGIN_TITLE = 'LoginPage';
const DAYS_IN_WEEK = 7;

//duplicate not allowed
// const tr = 100;
// const tr = 2000;

//const pi; //not allowed --> const must be initialized when defined

//Hoisting --> not allowed
// console.log(pi);
// const pi = 3.14;

//=========================================================================================================================================