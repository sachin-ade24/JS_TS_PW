
//1. forEach();
const numbers1 = [45, 4, 9, 16, 25];
const ar1 = [4, 5, 6, 7, 9];
numbers1.forEach((n, i)=>console.log((n*2) + i));
/*
90
9
20
35
54
*/


console.log('======================================================================');


//2. map():
const numbers2 = [45, 4, 9, 16, 25];
const newNumAr2 = numbers2.map((n, i) => n + i);
console.log(newNumAr2);//[ 45, 5, 11, 19, 29 ]


console.log('======================================================================');


//3. flatMap():
const myArr = [1, 2, 3, 4, 5, 6];
const myAr = myArr.flatMap((n)=>[n, n*2]);
console.log(myAr);
/*
[
  1,  2, 2, 4,  3,
  6,  4, 8, 5, 10,
  6, 12
]
*/


console.log('======================================================================');


//4. filter():
const strArr = ['Sachin', 'Prince', 'Sachi', 'Kalpana'];
const filtered1 = strArr.filter((e)=>e.includes('in'));
console.log(filtered1);//[ 'Sachin', 'Prince' ]

const stAr = [12, 4, 7, 5];
const filtered2 = stAr.filter((n)=>n>5);
console.log(filtered2);


console.log('======================================================================');


//5. reduce():
const numbers3 = [15, 20, 25, 30];
const num2 = numbers3.reduce((acc, n, i) => acc + n + i, 0);
console.log(num2);//96

const strArr1 = ["I", "am", "a", "singer"];
const str1 = strArr1.reduce((acc, e, i)=>acc.concat(e, i));
console.log(str1);//Iam1a2singer3


console.log('======================================================================');


//6. reduceRight():
const numbers4 = [15, 20, 25, 75];
const r = numbers4.reduceRight((acc, n) => acc - n);
console.log(r);//15


console.log('======================================================================');


//7. every():
/*
    The every() method checks if all array values pass a test.
*/
const arr2 = [10, 20, 30, 40, 50];
const test1 = arr2.every((n)=>n%2==0);
console.log(test1);//true

const arr3 = [1, 5, 7, 9, 3, 2];
const test2 = arr2.every((e)=>e%2!=0);
console.log(test2);//false


console.log('======================================================================');

//8. some():
/*
    The some() method checks if some array values pass a test.
*/
const test3 = arr2.some((n)=>n%2==0);
console.log(test3);//true


console.log('======================================================================');


//9. Array.from():
/*
Array.from():
    The Array.from() method returns an Array object from:
        - Any iterable object
        - Any object with a length property
*/
const text = "ABCDEFG";
const resultArr = Array.from(text);
console.log(resultArr);
/*
[
  'A', 'B', 'C',
  'D', 'E', 'F',
  'G'
]
*/

const myNumbers = [1, 2, 3, 4, 5];
const resArr = Array.from(myNumbers, (n)=>n*n);
console.log(resArr);//[ 1, 4, 9, 16, 25 ]


console.log('======================================================================');


//10. keys(): The Array.keys() method returns an Array Iterator object with the keys of an array.
/*
    (method) Array<string>.keys(): ArrayIterator<number>
    Returns an iterable of keys in the array
*/
const fr = ["Banana", "Orange", "Apple", "Mango"];
for(const key of fr.keys()){
    console.log(key);
};
/*
0
1
2
3
*/


console.log('======================================================================');


//11. values();
for(const value of fr.values()){
    console.log(value);
};
/*
Banana
Orange
Apple
Mango
*/


console.log('======================================================================');


//13. entries(): The entries() method returns an Array Iterator object with key/value pairs.
/*
    (method) Array<string>.entries(): ArrayIterator<[number, string]>
    Returns an iterable of key, value pairs for every entry in the array
*/
for(const enrtry of fr.entries()){
    console.log(enrtry);
};
/*
[ 0, 'Banana' ]
[ 1, 'Orange' ]
[ 2, 'Apple' ]
[ 3, 'Mango' ]
*/


console.log('======================================================================');


//Create a Map from an array entries:
let m = new Map();
for(const [i, v] of fr.entries()){
    m.set(i, v);
};
console.log(m);
/*
Map(4) { 0 => 'Banana', 1 => 'Orange', 2 => 'Apple', 3 => 'Mango' }
*/

function getMapFromArray(array){
    let m = new Map();
    for(const [i, v] of array.entries()){
        m.set(i, v);
    };
    return m;
};

const arr4 = ["Tata Safari", "Tata Nexon", "Tata Harrier", "Tata Punch"];
console.log(getMapFromArray(arr4));
/*
Map(4) {
  0 => 'Tata Safari',
  1 => 'Tata Nexon',
  2 => 'Tata Harrier',
  3 => 'Tata Punch'
}
*/


console.log('======================================================================');


//with():
/*
ES2023 added the Array with() method as a safe way to update elements in an array without altering the original array.
*/
const arr5 = [11, 22, 33, 44, 55];
const arr6 = arr5.with(2, 77);
console.log(arr6);//[ 11, 22, 77, 44, 55 ]


console.log('======================================================================');


//Spread (...):
/*
The ... operator expands an array into individual elements.
*/
const arr7 = [1, 2, 3];
const arr8 = [4, 5, 6];
const arr9 = [...arr7, ...arr8];
console.log(arr9);//[ 1, 2, 3, 4, 5, 6 ]

const arr10 = [...arr9];
console.log(arr10);//[ 1, 2, 3, 4, 5, 6 ]

const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "Des"];
const q = [...q1, ...q2, ...q3, ...q4];
console.log(q);
/*
[
  'Jan', 'Feb', 'Mar',
  'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep',
  'Oct', 'Nov', 'Des'
]
*/


console.log('======================================================================');


//Rest (...):
/*
The rest operator (...) allows us to destruct an array and collect the leftovers:
*/
let a, rest;
let arr11 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr11);
/*
[
  1, 2, 3, 4,  5,
  6, 7, 8, 9, 10
]
*/

[a, ...rest] = arr11;
console.log(a);//1
console.log(rest);
/*
[
  2, 3, 4,  5, 6,
  7, 8, 9, 10
]
*/

console.log(arr11);
/*
[
  1, 2, 3, 4,  5,
  6, 7, 8, 9, 10
]
*/
