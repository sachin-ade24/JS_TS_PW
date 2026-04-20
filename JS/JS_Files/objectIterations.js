let user = {
    name: 'Tom',
    age: 30,
    city: 'LA',
    isActive: true
};

//Iterate through keys:
for(let key in user){
    console.log(key);
}
/*
name
age
city
isActive
*/

console.log('======================================================================');

for(let key in user){
    console.log(user[key]);
}
/*
Tom
30
LA
true
*/

console.log('======================================================================');

for(let key in user){
    console.log(`${key}: ${user[key]}`);
}
/*
name: Tom
age: 30
city: LA
isActive: true
*/


//
let newUser = {
    name: 'Tom',
    age: 30,
    city: 'LA',
    isActive: true,
    address: {
        flat: 101,
        zip: 432121
    }
};
for(let key in newUser){
    console.log(key, ':', newUser[key]);
}
/*
name : Tom
age : 30
city : LA
isActive : true
address : { flat: 101, zip: 432121 }
*/

console.log('======================================================================');

let personInfo = {
    name: 'Tom',
    age: 30,
    city: 'LA',
    isActive: true,
    address: {
        flat: 101,
        zip: 432121,
        lat: 10.34,
        long: 11.22
    },
    devices: ['iphone', 'mouse', 'keyboard']
};

console.log(personInfo.devices);//[ 'iphone', 'mouse', 'keyboard' ]
console.log(personInfo.devices.length);//3
