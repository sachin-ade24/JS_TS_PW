//async-await:

//async function: always returns a promise

async function hello(){
    return 'Hello world!';
}

hello()
    .then(result => console.log(result));
/*
Hello world!
*/

console.log('======================================================================');

function fetchData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('User data --> Resolved the promise');
        }, 3000);
    });
};

async function getData(){
    console.log('getData() --> Fetching data..');
    let data = await fetchData();
    console.log(data);
    console.log('getData() --> Fetching of the data is completed.');
};

getData();
/*
o/p with 'await':

Fetching data..
Hello world!
User data --> Resolved the promise
Fetching of the data is completed.

*/

async function getData1(){
    console.log('getData1() --> Fetching data..');
    let data = fetchData();
    console.log(data);
    console.log('getData1() --> Fetching of the data is completed.');
};

getData1();

/*
o/p without 'await':

getData1() --> Fetching data..
Promise { <pending> }
getData1() --> Fetching of the data is completed.

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

function click(element){
    console.log(`Clicked on the element: ${element}`);
}

async function clickOnTheButton(locator, timeout){
    click(await waitForElement(locator, timeout));
};

clickOnTheButton('//div', 5000);
