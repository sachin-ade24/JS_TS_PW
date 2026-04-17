
function startMachine(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('Start the machine..');
            resolve();
        }, 5000);
    });
};

function grindBeans(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('Grind the beans..');
            resolve();
        }, 3000);
    });
};

function boilWater(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('Boil the water..');
            resolve();
        }, 4000);
    });
};

function brewCoffee(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('Brew the coffee..');
            resolve();
        }, 3000);
    });
};

function pourCoffee(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('Pour the coffee into the cup..');
            resolve();
        }, 2000);
    });
};

function stopMachine(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('Stop the machine..');
            resolve();
        }, 4000);
    });
};

async function coffeeMachine(){
    console.log('Starting the coffee machine..');
    await startMachine();
    await grindBeans();
    await boilWater();
    await brewCoffee();
    await pourCoffee();
    await stopMachine();
    console.log('Enjoy your coffee..');
};

coffeeMachine();
/*
o/p:
Starting the coffee machine..
Start the machine..
Grind the beans..
Boil the water..
Brew the coffee..
Pour the coffee into the cup..
Stop the machine..
Enjoy your coffee..
*/

console.log('======================================================================');

function waitForElement(locator, timeout){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let isElementFound = true;
            if(isElementFound){
                let webElement = `driver.findElement('${locator}')`;
                resolve(webElement);
            } else{
                reject(null);
            }
        }, timeout);
    });
}

/**
 * 
 * @param {string} element 
 */
function click(element){
    console.log(`Clicked on the element: ${element}`);
}

async function clickOnTheButton(locator, timeout){
    click(await waitForElement(locator, timeout));
};

clickOnTheButton('//div', 5000);
