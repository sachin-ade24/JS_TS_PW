//Callback Hell or Pyramid of Doom:
//When you will be dealing with multiple async aoperations which are dependent on each other --> Nested callback/indented callbacks
//Disadvantages: 1) Hard to read | 2) Hard to debug


/*
setTimeout(()=>{
    console.log('Wait for 5 seconds.');
}, 1000);

setTimeout((name, age)=>{
    console.log('Wait for 5 seconds...', name, age);
}, 3000, 'Sachin', 37);
*/


//Example: Coffee machine
//1. start machines --> 5 sec
//2. grind beans --> 3 sec
//3. boil water --> 4 sec
//4. brew coffee --> 3 sec
//5. pour into cup --> 2 sec

//1.
function startMachine(callback){
    setTimeout(()=>{
        console.log('Start machine...');
        callback();
    }, 5000);
};

//2.
function grindBeans(callback){
    setTimeout(()=>{
        console.log('Grind beans...');
        callback();
    }, 3000);
};

//3.
function boilWater(callback){
    setTimeout(()=>{
        console.log('Boil water...');
        callback();
    }, 4000);
};

//4.
function brewCoffee(callback){
    setTimeout(()=>{
        console.log('Brew coffee...');
        callback();
    }, 3000);
};

//5.
function pourCoffeeIntoCup(callback){
    setTimeout(()=>{
        console.log('Pour the coffee into the cup...');
        callback();
    }, 2000);
};

//6.
function stopMachine(callback){
    setTimeout(()=>{
        console.log('Stop the machine...');
        callback();
    }, 4000);
}

//Execution will happen after calling the function:
startMachine(() => {
    grindBeans(() => {
        boilWater(() => {
            brewCoffee(() => {
                pourCoffeeIntoCup(() => {
                    console.log('Coffee is ready...');
                    stopMachine(() => {
                        console.log('Machine has been stopped. Start it to continue...');
                    })
                })
            })
        })
    })
});
/*
Start machine...
Grind beans...
Boil water...
Brew coffee...
Pour the coffee into the cup...
Coffee is ready...
Stop the machine...
Machine has been stopped. Start it to continue...
*/
