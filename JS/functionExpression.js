//Function expression:

let cart = function addToCart(){
    console.log('Add to cart');
}

//function expression name: cart
//actual function name: addToCart

//call the function:
//addToCart();//--> ReferenceError: addToCart is not defined
cart();//Add to cart
console.log(cart.name);

let newCart = function addToCart(){
    console.log('Add to new cart');
    return 100;
}
newCart();//This will not give you 100. To get 100 you have to either log it or save it into another variable and then log it.
console.log(newCart());//This will give you 100.
let cart_new = newCart();
console.log(cart_new);//This will give you 100.
console.log(newCart.name);


let newCart1 = function addToCart(productName){
    console.log('Add to new cart: ', productName);
    return true;
}
console.log(newCart1('Samsun Galaxy Tab'));//This gives you 'true'
let n1 = newCart1('Samsun Galaxy Tab');//better approach
console.log(n1);//simple and better --> //This gives you 'true'


function waitForElementPresenceWithExplicitWaitOnThePage(productName){
    console.log('Add to new cart with wait: ', productName);
    return true;
}
console.log(waitForElementPresenceWithExplicitWaitOnThePage('Macbook'));

let waitForEle = waitForElementPresenceWithExplicitWaitOnThePage;//This is also possible
console.log(waitForEle);//oes not show any erro. But not the right way to call or log on console --> [Function: waitForElementPresenceWithExplicitWaitOnThePage]
console.log(waitForEle('Nothing Phone'));

