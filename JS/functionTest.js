
//JS does not support to method overloading. So, avoid to create duplicate funtion
function search(){
    console.log('Hello search1');
}

function search(){
    console.log('Hello search2');
}

function search(productName){
    console.log('Hello search3', productName);
}
//JS will always execute latest function. So, latest function will be called always.
