
function login(){
    console.log('Login to app');
    search();
}

function search(){
    console.log('Perform search');
    addToCart();
}

function addToCart(){
    console.log('Add to cart');
    //login();//--> This line initiates infinite calling. Avoid such things.
    //This is not actual infinite execution of functions. The execution will happen till stacks gets full i.e. the stack memory will exhaust.
    //And we will get: RangeError: Maximum call stack size exeecded.
}

login();

console.log('======================================================================');

//Recursive function
function billing(){
    console.log();
    let x = 10;
    let y = x + 10;
    console.log(y);
    //billing();//Recurssion happened --> Recursive function
}

billing();//RangeError: Maximum call stack size exeecded.
//Most of the times (not always) recursive function will result in --> RangeError: Maximum call stack size exeecded.



//Factorial program:
//Approach 1:
/*
    5! = (5-0) * (5-1)  * (5-2) 60 * (5-3) * (5-4);
*/
function getFactorialOfNum(num){
    let c = num;
    for(let i=1; i<num; i++){
        c = c * (num - i);
    }
    console.log(c);
}
getFactorialOfNum(4);


//Approach 2 --> Best approach:
function fact(num){
    if(num<0){
        return `The ${num} is a -ve number. Please pass a +ve number.`;
    }
    if(num == 0 || num == 1){
        return 1;
    }
    return num * fact(num - 1);
}
console.log(fact(-1));
