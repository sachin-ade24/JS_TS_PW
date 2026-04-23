
/*
1. push():
    (method) Array<number>.push(...items: number[]): number

    Appends new elements to the end of an array, and returns the new length of the array.

    @param items — New elements to add to the array.
*/

let num = [10, 20, 30, 40];
console.log(num.length);
console.log(num);
console.log(num.push(50));
console.log(num);
let l1 = num.push(60, 70, 80, 90);
if(l1===num.length){
    console.log(num);
}
/*
[
  10, 20, 30, 40, 50,
  60, 70, 80, 90
]
*/

/*
//Valid
let newNum = [100, 200];
num.push(newNum);
console.log(num);//[ 10, 20, 30, 40, 50, 60, 70, 80, 90, [ 100, 200 ] ]
*/

let num1 = [100, 200]
num.push(...num1);
console.log(num);
/*
[
   10, 20, 30, 40,  50,
   60, 70, 80, 90, 100,
  200
]
*/


console.log('======================================================================');


/*
2. unshift():
    (method) Array<number>.unshift(...items: number[]): number

    Inserts new elements at the start of an array, and returns the new length of the array.

    @param items — Elements to insert at the start of the array.

*/

let arrayNum = [1, 2, 3, 4];
arrayNum.unshift(5);
console.log(arrayNum);//[ 5, 1, 2, 3, 4 ]

let newArrayNum = [6, 7];
arrayNum.unshift(...newArrayNum);
console.log(arrayNum);
/*
[
  6, 7, 5, 1,
  2, 3, 4
]
*/

arrayNum.unshift(10, 9, 5);
console.log(arrayNum);
/*
[
  10, 9, 5, 6, 7,
   5, 1, 2, 3, 4
]
*/


console.log('======================================================================');


/*
pop():
    (method) Array<number>.pop(): number | undefined

    Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
*/
let numArr = [10, 1, 20, 2, 30, 3, 40, 4];
console.log(numArr);
/*
[
  10, 1, 20, 2,
  30, 3, 40, 4
]
*/
console.log(numArr.length);//8
let lastNum = numArr.pop();
console.log(lastNum);//4
console.log(numArr);
/*
[
  10, 1, 20, 2,
  30, 3, 40
]
*/
console.log(numArr.length);//7


console.log('======================================================================');


/*
shift():
   (method) Array<number>.shift(): number | undefined

    Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
*/
let arrayNumbers = [1, 9, 2, 8, 3, 7, 4, 6];
console.log(arrayNumbers);
/*
[
  1, 9, 2, 8,
  3, 7, 4, 6
]
*/
console.log(arrayNumbers.length);//8
let firstNum = arrayNumbers.shift();
console.log(firstNum);//1
console.log(arrayNumbers);
/*
[
  9, 2, 8, 3,
  7, 4, 6
]
*/
console.log(arrayNumbers.length);//7


console.log('======================================================================');


/*
splice();
    (method) Array<string>.splice(start: number, deleteCount?: number): string[] (+1 overload)

    Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

    @param start — The zero-based location in the array from which to start removing elements.

    @param deleteCount
    The number of elements to remove. Omitting this argument will remove all elements from the start paramater location to end of the array. 
    If value of this argument is either a negative number, zero, undefined, or a type that cannot be converted to an integer, the function 
    will evaluate the argument as zero and not remove any elements.

    @returns — An array containing the elements that were deleted.
*/
/*
Important: 
  The first parameter (2) defines the position where new elements should be added (spliced in).

  The second parameter (0) defines how many elements should be removed.

  The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.

  The splice() method returns an array with the deleted items.
*/
let fruits = ['Apple', 'Grapes', 'Banana' , 'Orange'];
console.log(fruits);//[ 'Apple', 'Grapes', 'Banana', 'Orange' ]
let removedFruits = fruits.splice(2, 1);//Gives back the array of the removed elements
console.log(fruits);//[ 'Apple', 'Grapes', 'Orange' ]


console.log('======================================================================');


//Add the new element at your desired index:
//push() can be done by using this:
fruits.splice(3, 0, 'Guava');//Here adding 'Guava' at the end of the array --> Meaning push(''Guava'') operation is happening here.
console.log(fruits);//[ 'Apple', 'Grapes', 'Orange', 'Guava' ]


console.log('======================================================================');


//unshift() operation can be done by using splice() i.e. a single or multiple elements can be added at the beginning of the array, given below:
fruits.splice(0, 0, 'Muskmelon', 'Watermelon');
console.log(fruits);//[ 'Muskmelon', 'Watermelon', 'Apple', 'Grapes', 'Orange', 'Guava' ]


console.log('======================================================================');


//shift() operation: It can remove a single or multiple elements from beginning of the array
fruits.splice(0, 1);
console.log(fruits);//[ 'Watermelon', 'Apple', 'Grapes', 'Orange', 'Guava' ]


console.log('======================================================================');


//pop() operation can be done by splice:
fruits.splice(fruits.length-1, 1);
console.log(fruits);//[ 'Watermelon', 'Apple', 'Grapes', 'Orange' ]


console.log('======================================================================');


//splice can combine two arrays:
let newFruits = ['Strawberry', 'Cherry'];
fruits.splice(fruits.length, 0, ...newFruits);
console.log(fruits);//[ 'Watermelon', 'Apple', 'Grapes', 'Orange', 'Strawberry', 'Cherry' ]


console.log('======================================================================');


//Add Berries at the end:
fruits.splice(fruits.length, 0, 'Berries');
console.log(fruits);
/*
[
  'Watermelon',
  'Apple',
  'Grapes',
  'Orange',
  'Strawberry',
  'Cherry',
  'Berries'
]
*/


console.log('======================================================================');


//Replace Berries by Coconut:
fruits.splice(fruits.length-1, 1, 'Coconut');
console.log(fruits);
/*
[
  'Watermelon',
  'Apple',
  'Grapes',
  'Orange',
  'Strawberry',
  'Cherry',
  'Coconut'
]
*/


console.log('======================================================================');


//Splice can clear the array:
fruits.splice(0, fruits.length);
console.log(fruits);//[]


console.log('======================================================================');


/*
indexOf():
    (method) Array<number>.indexOf(searchElement: number, fromIndex?: number | undefined): number

    Returns the index of the first occurrence of a value in an array, or -1 if it is not present.

    @param searchElement — The value to locate in the array.

    @param fromIndex — The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.
*/
let marks = [1, 2, 3, 4, 1, 5, 6, 1];
console.log(marks.indexOf(1, marks.indexOf(1)+1));//4
console.log(marks.indexOf(7));//-1
console.log(marks.indexOf(1, marks.indexOf(1, marks.indexOf(1)+1)+1));//7
console.log(marks.lastIndexOf(1));//7


console.log('======================================================================');


/*
lastIndexOf():
    (method) Array<number>.lastIndexOf(searchElement: number, fromIndex?: number | undefined): number

    Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.

    @param searchElement — The value to locate in the array.

    @param fromIndex — The array index at which to begin searching backward. If fromIndex is omitted, the search starts at the last index in the array.
*/
console.log(marks.lastIndexOf(1));//7


console.log('======================================================================');


/*
length:
  (property) Array<string>.length: number
  Gets or sets the length of the array. This is a number one higher than the highest index in the array.
*/
/*
length:
The length property returns the length (size) of an array
*/
let fruits1 = ["Banana", "Orange", "Apple", "Mango"];
let len = fruits1.length;
console.log(len);//4


console.log('======================================================================');


/*
toString():
  (method) Array<string>.toString(): string
  Returns a string representation of an array.
*/
let newFruitsArr = ["Grapes", "Pineapples"];
let newFruitsStrArr = newFruitsArr.toString();
console.log(newFruitsStrArr);
/*
Grapes,Pineapples
*/


console.log('======================================================================');


/*
at():
  (method) Array<string>.at(index: number): string | undefined
  Returns the item located at the specified index.

  @param index — The zero-based index of the desired code unit. A negative index will count back from the last item.
*/
/*
at():
  The at() method returns an indexed element from an array.
  The at() method returns the same as [].
*/
let vehicles = ['Truck', 'Bus', 'Container'];
console.log(vehicles.at(0));//Truck
console.log(vehicles.at(1));//Bus
for(let i in vehicles){
  console.log(vehicles.at(i));
};
/*
Truck
Bus
Truck
Bus
Container
*/


console.log('======================================================================');


/*
join():
  (method) Array<string>.join(separator?: string | undefined): string
  Adds all the elements of an array into a string, separated by the specified separator string.

  @param separator — A string used to separate one element of the array from the next in the resulting string. 
  If omitted, the array elements are separated with a comma.
*/
/*
join():
  The join() method also joins all array elements into a string.
  It behaves just like toString(), but in addition you can specify the separator.
*/
let cars = ["Defender", "Discovery", "Range Rover"];
let joinCars = cars.join(' * ');
console.log(joinCars);
/*
Defender * Discovery * Range Rover
*/


console.log('======================================================================');


let isArrayFlag = Array.isArray(cars);
console.log(isArrayFlag);//true


console.log('======================================================================');


/*
concat():
  (method) Array<string>.concat(...items: ConcatArray<string>[]): string[] (+1 overload)
  Combines two or more arrays. This method returns a new array without modifying any existing arrays.

  @param items — Additional arrays and/or items to add to the end of the array.
*/
/*
concat():
  The concat() method creates a new array by merging (concatenating) existing arrays
*/
let alphabets1 = ['A', 'B', 'C'];
let alphabets2 = ['D', 'E', 'F'];
let concatinatedArr = alphabets1.concat(alphabets2);
console.log(concatinatedArr);//[ 'A', 'B', 'C', 'D', 'E', 'F' ]


console.log('======================================================================');


/*
copyWithin():
  The copyWithin() method copies array elements to another position in an array
*/
/*
Important:
  The copyWithin() method overwrites the existing values.

  The copyWithin() method does not add items to the array.

  The copyWithin() method does not change the length of the array.
*/
let gamma = ['Aa', 'Bb', 'Cc', 'Dd'];
/*
copyWithin():
  method) Array<string>.copyWithin(target: number, start: number, end?: number | undefined): string[]
  Returns the this object after copying a section of the array identified by start and end to the same array starting at position target

  @param target
  If target is negative, it is treated as length+target where length is the length of the array.

  @param start
  If start is negative, it is treated as length+start. If end is negative, it is treated as length+end.

  @param end — If not specified, length of the this object is used as its default value.
*/
gamma.copyWithin(3, 0)
console.log(gamma);
/*
[ 'Aa', 'Bb', 'Cc', 'Aa' ]
*/
gamma.copyWithin(2, 1)
console.log(gamma);
/*
[ 'Aa', 'Bb', 'Bb', 'Cc' ]
*/
gamma.copyWithin(1, 2);
console.log(gamma);
/*
[ 'Aa', 'Bb', 'Cc', 'Cc' ]
*/
gamma.copyWithin(1, 0, 2);
console.log(gamma);
/*
[ 'Aa', 'Aa', 'Bb', 'Cc' ]
*/


console.log('======================================================================');


/*
Flattening an Array:
  Flattening an array is the process of reducing the dimensionality of an array.

  Flattening is useful when you want to convert a multi-dimensional array into a one-dimensional array.
*/
/*
flat():
  The flat() method creates a new array with sub-array elements concatenated to a specified depth.

  (method) Array<number[]>.flat<number[][], 1>(this: number[][], depth?: 1 | undefined): number[]
  Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

  @param depth — The maximum recursion depth
*/
let ar = [[1,2], [4,5], [7,9]];
let flattenedAr = ar.flat();
console.log(flattenedAr);//[ 1, 2, 4, 5, 7, 9 ]


console.log('======================================================================');


/*
flatMap():
  (method) Array<number>.flatMap<number, undefined>(callback: (this: undefined, value: number, index: number, array: number[]) => number | readonly number[], thisArg?: undefined): number[]
  Calls a defined callback function on each element of an array. Then, flattens the result into a new array. 
  This is identical to a map followed by flat with depth 1.

  @param callback
  A function that accepts up to three arguments. The flatMap method calls the callback function one time for each element in the array.

  @param thisArg
  An object to which the this keyword can refer in the callback function. If thisArg is omitted, undefined is used as the this value.
*/
/*
flatMap():
  The flatMap() method first maps all elements of an array and then creates a new array by flattening the array.
*/
const myAr = [1, 2, 3, 4, 5, 6];
const flatMappedArr = myAr.flatMap((n)=>[n, n*10]);
console.log(flatMappedArr);
/*
[
   1, 10,  2, 20,  3,
  30,  4, 40,  5, 50,
   6, 60
]
*/


console.log('======================================================================');


/*
toSpliced():
  The difference between the new toSpliced() method and the old splice() method is that the new method creates a new array, 
  keeping the original array unchanged, while the old method altered the original array.
*/
const months = ["Jan", "Feb", "Mar", "Apr"];
const spliced = months.toSpliced(2, 1, "Dec");
console.log(spliced);//[ 'Jan', 'Feb', 'Dec', 'Apr' ]


console.log('======================================================================');


/*
slice():
  The slice() method slices out a piece of an array into a new array.
*/
/*
Important: 
  The slice() method creates a new array.

  The slice() method does not remove any elements from the source array.
*/
const frts = ["Banana", "Orange", "Lemon", "Apple", "Mango"];//node arrayMethods.js
const newFrts1 = frts.slice(1);
console.log(newFrts1);//[ 'Orange', 'Lemon', 'Apple', 'Mango' ]
const newFrts2 = frts.slice(2);
console.log(newFrts2);//[ 'Lemon', 'Apple', 'Mango' ]
const newFrts3 = frts.slice(0, 3);
console.log(newFrts3);//[ 'Banana', 'Orange', 'Lemon' ]


console.log('======================================================================');

/*
Using delete() leaves undefined holes in the array.
*/
const devices = ['TV', 'Mobile Phone', 'Telephone', 'Computer'];
delete devices[2];
console.log(devices);
/*
[ 'TV', 'Mobile Phone', <1 empty item>, 'Computer' ]
*/
