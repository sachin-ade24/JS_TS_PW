//anonymus  function:

let fun1 = function() {
    console.log('Hi.. Hello..');
};

fun1;//--> Blank console
fun1();//Hi.. Hello..
console.log(fun1);//[Function: fun1]

console.log('======================================================================');

let fun2 = function() {
    console.log('Byeeee.....');
    return 100;
};
let t1 = fun2();
console.log(t1);
/*
Byeeee.....
100
*/
console.log(fun2());
/*
Byeeee.....
100
*/

console.log('======================================================================');


/**
 * 
 * @param {string} browserName 
 */
let initDriver = function(browserName){
    console.log(`Browser name is: ${browserName}`);

    switch(browserName.trim().toLowerCase()){
        case 'chrome':
            console.log('Launch chrome');
            return true;
        case 'edge':
            console.log('Launch edge');
            return true;
        case 'firefox':
            console.log('Launch firefox');
            return true;
        default:
            console.log('Please pass the right browser.');
            return false;
    }
};

initDriver('chrome');
/*
Browser name is: chrome
Launch chrome
*/


let isInit = initDriver('edge');
if(isInit){
    console.log('Enter the URL: https://www.google.com');
}
/*
Browser name is: edge
Launch edge
Enter the URL: https://www.google.com
*/
