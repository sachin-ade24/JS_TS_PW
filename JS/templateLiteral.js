//Template literal
//back tick: ``

let msg = `This is Sachin.`;
console.log(msg);


let para = `Hi. This is my JS code.
                I love JS
                    I want to learn PW`;
console.log(para);

para = `Hi. This is my JS code.
I love JS
I want to learn PW`;
console.log(para);

console.log("I love 'JavaScript' programming language.");
console.log('I love "JavaScript" programming language.');
console.log('I love \'JavaScript\' programming language.');
console.log('I love \"JavaScript\" programming language.');
console.log(`I love 'JavaScript' programming language.`);
console.log(`I love "JavaScript" programming language.`);
console.log(`I love \`JavaScript\` programming language.`);

console.log(`Hi, it's my birthday today.`);


//Dynamic values: Use placeholder --> ${}
let username = 'Admin';
console.log("Welcome " + username);
console.log(`Welcome ${username}`);

let productName = 'Apple iMac';
let price = 1000.33;
console.log(`${productName}: $${price}`);

let playerName = 'Virat Kohali';
//button[text()='Virat Kohali']
console.log(`//button[text()='${playerName}']`);

let n1 = 100;
let n2 = 200;
console.log(`Sum of n1 and n2: ${n1+n2}`);

let username1 = 'abc@def.com';
let password1 = '123@';
console.log(`The user credentials:-> 
    Username: ${username1},
    Password: ${password1}`);

// Type of the back tick or template literal:
let str = `Hello world!`;
console.log(typeof str);//string

console.log(username1, password1);
console.log(username1, password1, 'Admin');
console.log('Testing');
console.log('Price: ', 100);


//'' or "" --> Normal strin --> static string
//`` --> dynamic string
//${} --> placeholder
