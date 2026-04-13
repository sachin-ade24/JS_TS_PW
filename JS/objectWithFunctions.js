//object with function:

let user = {

    //properties:
    name: 'Mukul',
    age: 30,
    dept: 'QA',
    salary: 34.44,
    city: 'Pune',
    company: 'IBM',

    //function:
    coding(){
        console.log("User's code is written here.");
    },

    travel(){
        console.log("User is travelling.");
    }
};

console.log(user);
/*
{
  name: 'Mukul',
  age: 30,
  dept: 'QA',
  salary: 34.44,
  city: 'Pune',
  company: 'IBM',
  coding: [Function: coding],
  travel: [Function: travel]
}
*/

console.log(user.name);//Mukul
console.log(user.company);//IBM

//call function inside the object:
user.coding();//User's code is written here.
user.travel();//User is travelling.

console.log('======================================================================');

let loginPage = {
    username: 'abc@d.com',
    password: 'abcd@123',
    role: 'QA',

    login(){
        console.log(`We already have: ${loginPage.username}, ${loginPage.password}, ${loginPage.role}.`);
        console.log(`With 'this' keyword: ${this.username}, ${this.password}, ${this.role}.`);
        //console.log(`Login to the application using: ${username} | ${password} | ${role}`);
        loginPage.resetPwd();//Valid --> Reset password.
        this.resetPwd();//Valid --> Reset password.
    },

    resetPwd(){
        console.log('Reset password.');
    },

    logout(){
        console.log('Logout from the application.');
    }
};

//loginPage.login(loginPage.username, loginPage.password, loginPage.role);
/*
We already have: abc@d.com, abcd@123, QA.
Login to the application using: abc@d.com | abcd@123 | QA
*/

loginPage.login();
/*
We already have: abc@d.com, abcd@123, QA.
With 'this' keyword: abc@d.com, abcd@123, QA.
*/

