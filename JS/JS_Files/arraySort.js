
/*=======================================================  Alphabetic Sort  =========================================================*/

//1. sort():
/*
    The sort() method sorts an array alphabetically
*/
let arr1 = ['Sachin', 'Prince', 'Kalpana', 'Sachi'];
arr1.sort();
console.log(arr1);
/*
[ 'Kalpana', 'Prince', 'Sachi', 'Sachin' ]
*/


console.log('======================================================================');


//2. reverse():
/*
(method) Array<number>.reverse(): number[]
Reverses the elements in an array in place. This method mutates the array and returns a reference to the same array.
*/
let arr2 = [1, 2, 3, 4, 5];
arr2.reverse();
console.log(arr2);//[ 5, 4, 3, 2, 1 ]


console.log('======================================================================');


//3. toSorted():
/*
    The toSorted() method as a safe way to sort an array without altering the original array.
    The difference between toSorted() and sort() is that the first method creates a new array, keeping the original array unchanged, 
    while the last method alters the original array.
*/
let arr3 = ['d', 'c', 'z', 'k', 'p'];
let arr4 = arr3.toSorted();
console.log(arr4);//[ 'c', 'd', 'k', 'p', 'z' ]


console.log('======================================================================');


//4. toReversed():
/*
    The toReversed() method as a safe way to reverse an array without altering the original array.
    The difference between toReversed() and reverse() is that the first method creates a new array, keeping the original array unchanged, 
    while the last method alters the original array.
*/
let arr5 = ['One', 'Two', 'Three', 'Four'];
let arr6 = arr5.toReversed();
console.log(arr6);//[ 'Four', 'Three', 'Two', 'One' ]


console.log('======================================================================');


/*=======================================================  Numeric Sort  =========================================================*/


//Use compare function to sort numbers
//Ascending order:
const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b)=>{
    return a - b;
});
console.log(points);
/*
[ 1, 5, 10, 25, 40, 100 ]
*/

//Descending order:
points.sort((a, b)=>{
    return b - a;
});
console.log(points);
/*
[ 100, 40, 25, 10, 5, 1 ]
*/


console.log('======================================================================');


//Math.min.apply: finds the lowest number in an array
const minNum = Math.min.apply(null, points);
console.log(minNum);//1

//Math.max.apply: finds the highest number in an array
const maxNum =  Math.max.apply(null, points);
console.log(maxNum);//100


console.log('======================================================================');


//Max number:
const newArr = [12, 2, 34, 100, 1, 0, -2];
//Approach 1:
const maxNumNewArr1 = newArr.reduce((acc, n)=>{
    if(acc < n){
        acc = n;
    };
    return acc;
}, newArr[0]);
console.log(maxNumNewArr1);//100

//Approach 2:
const maxNumNewArr2 = newArr.reduce((acc, n)=>{
    return n > acc ? n : acc;
});
console.log(maxNumNewArr2);//100


console.log('======================================================================');


//Min number:
//Approach 1:
const minNumNewArr3 = newArr.reduce((acc, n)=>{
    if(acc > n){
        acc = n;
    };
    return acc;
}, newArr[0]);
console.log(minNumNewArr3);//-2

//Approach 2:
const minNumNewArr4 = newArr.reduce((acc, n)=>{
    return acc > n ? n : acc;
});
console.log(minNumNewArr4);//-2
