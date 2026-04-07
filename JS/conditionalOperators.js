console.log(10 == 10);//true
console.log(10 === 10);//true

console.log('======================================================================');

//1.
let x = 10;
if(x>=10){
    console.log('Hi..');
} else{
    console.log('Bye..');
}

console.log('======================================================================');

//2.
let y = 9;
if(y>=10){
    console.log('Hi..');
} else{
    console.log('Bye..');
}

console.log('======================================================================');

//3.
if(true){
    console.log('Hi..');
} else{
    console.log('Bye..');//--> Unreachable code
}

console.log('======================================================================');

//4.
if(false){
    console.log('Hi..');//--> Unreachable code
} else{
    console.log('Bye..');
}

console.log('======================================================================');

//5.
let isEleExist = true;
if(isEleExist){
    console.log('Click on the element.');
} else{
    console.log('Throw error.');
}

console.log('======================================================================');

//6.
//Nested..if..
let marks = 80;
if(marks>=90){
    console.log('Grade: A');
    if(marks>=95){
        console.log('Grade: A++');
        if(marks === 100){
            console.log('Eligible for the scholarship.');
        } // --> Nested if..
    }
} else{
    if(marks<=80){
        console.log('Grade: B');
    } else{
        console.log('Grade: B++');
    }
}


//7.
//Back to back ifs.. --> Wrong approach of writing code
let browser = 'chrome';
//i
if(browser === 'chrome'){
    console.log('Launch Chrome.');
}
//ii
if(browser === 'firefox'){
    console.log('Launch firefox.');
}
//iii.
if(browser === 'edge'){
    console.log('Launch edge.');
}
//iv
if(browser === 'safari'){
    console.log('Launch safari.');
}
//Else is associated wit iv -> if
else{
    console.log('Please pass the right browser.');
}


//8.
//Corrected 7.
let browserName = 'chrome';
//i
if(browserName === 'chrome'){
    console.log('Launch Chrome.');
} else if(browserName === 'firefox'){
    console.log('Launch firefox.');
} else if(browserName === 'edge'){
    console.log('Launch edge.');
} else if(browserName === 'safari'){
    console.log('Launch safari.');
} else{
    console.log('Please pass the right browser.');
}
//Here 'break' cannot be used because for 'break' we need a loop. (To break the loop).
//but still it has some issues --> it checks all conditions for 'safari' --> performance issue
