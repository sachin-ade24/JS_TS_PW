
let str = 'Hello world!';

//length property:
/*
length:
    (property) String.length: number
    Returns the length of a String object.
*/
console.log(str.length);//12

let s1 = 'Hello';
let l1 = s1.length;
console.log(l1);//5

console.log('======================================================================');

//indexOf():
/*
indexOf():
    (method) String.indexOf(searchString: string, position?: number | undefined): number
    Returns the position of the first occurrence of a substring, or -1 if it is not present.

    @param searchString — The substring to search for in the string

    @param position — The index at which to begin searching the String object. If omitted, search starts at the beginning of the string.
*/
console.log(str.indexOf('H'));//0
console.log(str.indexOf('l'));//2
console.log(str.indexOf('world'));//6
console.log(str.indexOf('Hel'));//0
console.log(str.indexOf('p'));//-1
console.log(str.indexOf('l', str.indexOf('l')+1));//3

let s2 = 'world..';
let i1 = s2.indexOf('d.');
console.log(i1);//4

console.log('======================================================================');

/*
lastIndexOf():
    (method) String.lastIndexOf(searchString: string, position?: number | undefined): number
    Returns the last occurrence of a substring in the string, or -1 if it is not present.

    @param searchString — The substring to search for.

    @param position — The index at which to begin searching. If omitted, the search begins at the end of the string.
*/
console.log(str.lastIndexOf('l'));//9
console.log(str.lastIndexOf('Hello'));//0
console.log(str.lastIndexOf('lo'));//3
console.log(str.lastIndexOf('India'));//-1

let s3 = 'i Sachin';
let i2 = s3.lastIndexOf('i');
console.log(i2);//6

console.log('======================================================================');

/*
includes():
    (method) String.includes(searchString: string, position?: number | undefined): boolean

    Returns true if searchString appears as a substring of the result of converting this object to a String, at one or more positions 
    that are greater than or equal to position; otherwise, returns false.

    @param searchString — search string

    @param position — If position is undefined, 0 is assumed, so as to search all of the String.
*/
console.log(str.includes('Hell'));//true
console.log(str.includes('Sachin'));//false
console.log(str.includes(' '));//true
console.log(str.includes(''));//true
console.log(str.includes(str));

let flag = str.includes(' w');
console.log(flag);//true

console.log('======================================================================');

/*
startsWith():
    (method) String.startsWith(searchString: string, position?: number | undefined): boolean

    Returns true if the sequence of elements of searchString converted to a String is the same as the corresponding elements of this 
    object (converted to a String) starting at position. Otherwise returns false.
*/
console.log(str.startsWith('Hello'));//true
console.log(str.startsWith('world'));//false
console.log(str.startsWith('He'));//true
console.log(str.startsWith('H'));//true
console.log(str.startsWith('h'));//false
console.log(str.startsWith(str));//true

console.log('======================================================================');

/*
endsWith();
    (method) String.endsWith(searchString: string, endPosition?: number | undefined): boolean

    Returns true if the sequence of elements of searchString converted to a String is the same as the corresponding elements of this 
    object (converted to a String) starting at endPosition – length(this). Otherwise returns false.
*/
console.log(str.endsWith('!'));//true
console.log(str.endsWith('world!'));//true
console.log(str.endsWith(str));//true
console.log(str.endsWith(' world!'));//true

console.log('======================================================================');

/*
slice():
    (method) String.slice(start?: number | undefined, end?: number | undefined): string
    Returns a section of a string.

    @param start — The index to the beginning of the specified portion of stringObj.

    @param end
    The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the 
    character indicated by end. If this value is not specified, the substring continues to the end of stringObj.
*/
console.log(str.slice(0));//Hello world!
console.log(str.slice(1, 3));//el
console.log(str.slice(-12));//Hello world!
console.log(str.slice(-12, -7));//Hello
console.log(str.slice(-12, 12));//Hello world! --> 0 is -12 and 11 is -1; +ve: 0 to 11 and -ve: -12 to -1

console.log('======================================================================');

/*
substring():
    (method) String.substring(start: number, end?: number | undefined): string
    Returns the substring at the specified location within a String object.

    @param start — The zero-based index number indicating the beginning of the substring.

    @param end
    Zero-based index number indicating the end of the substring. The substring includes the characters up to, but not including, the 
    character indicated by end. If end is omitted, the characters from start through the end of the original string are returned.
*/
console.log(str.substring(0));
console.log(str.substring(0, 5));
console.log(str.substring(0, str.length));
console.log(str.substring(6));

console.log('======================================================================');

/*
charAt():
    (method) String.charAt(pos: number): string
    Returns the character at the specified index.

    @param pos — The zero-based index of the desired character.
*/
let st = 'Playwright';
console.log(st.charAt(0));//P
console.log(st.charAt(st.length-1));//t
console.log(st.charAt(-1));

console.log('======================================================================');

/*
charCodeAt():
    (method) String.charCodeAt(index: number): number
    Returns the Unicode value of the character at the specified location.

    @param index — The zero-based index of the desired character. If there is no character at the specified index, NaN is returned.
*/

//ASCII: 
// A-Z: 65 to 90
// a-z: 97 to 122
// 0 to 9: 48 to 57

console.log('A'.charCodeAt());//65
console.log('z'.charCodeAt());//122

console.log('======================================================================');

/*
toUpperCase():
    (method) String.toUpperCase(): string
    Converts all the alphabetic characters in a string to uppercase.
*/
console.log(st.toUpperCase());
console.log(str.toUpperCase());

console.log('======================================================================');

/*
toLowerCase():
    (method) String.toLowerCase(): string
    Converts all the alphabetic characters in a string to lowercase.
*/
console.log(str.toLowerCase());
console.log(st.toLowerCase());

console.log('======================================================================');

/*
trim():
    (method) String.trim(): string
    Removes the leading and trailing white space and line terminator characters from a string.
*/
console.log('   hello   '.trim());

/*
trimStart():
    (method) String.trimStart(): string
    Removes the leading white space and line terminator characters from a string.
*/
console.log('   hello   '.trimStart());

/*
trimEnd():
    (method) String.trimEnd(): string
    Removes the trailing white space and line terminator characters from a string.
*/
console.log('   hello   '.trimEnd());

console.log('======================================================================');

/*
replace():
    (method) String.replace(searchValue: string | RegExp, replaceValue: string): string (+3 overloads)
    Replaces text in a string, using a regular expression or search string.

    @param searchValue — A string or regular expression to search for.

    @param replaceValue — A string containing the text to replace. When the searchValue is a RegExp, all matches are replaced if the 
    g flag is set (or only those matches at the beginning, if the y flag is also present). Otherwise, only the first match of searchValue 
    is replaced.
*/
let strng = 'Playwright with JS';
console.log(strng.replace('JS', 'TS'));//Replaces the first occurrence of the given string

console.log('======================================================================');

/*
replaceAll():
    (method) String.replaceAll(searchValue: string | RegExp, replaceValue: string): string (+1 overload)
    Replace all instances of a substring in a string, using a regular expression or search string.

    @param searchValue — A string to search for.

    @param replaceValue — A string containing the text to replace for every successful match of searchValue in this string.
*/
let greet = ' He l  lo     ';
let hello = greet.replaceAll(' ', '');
console.log(hello);//Hello

let date = '16-04-2026';
console.log(date.replaceAll('-', '/'));//16/04/2026

console.log('======================================================================');

/*
concat():
    (method) String.concat(...strings: string[]): string
    Returns a string that contains the concatenation of two or more strings.

    @param strings — The strings to append to the end of the string.
*/
let s4 = "Sachin";
let s5 = "Ade";
let r1 = s4.concat(` ${s5}`);
console.log(r1);//Sachin Ade
let r2 = s5.concat(` ${s4}`);
console.log(r2);//Ade Sachin

console.log('======================================================================');

/*
padStart():
(method) String.padStart(maxLength: number, fillString?: string | undefined): string

Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length. T
he padding is applied from the start (left) of the current string.

@param maxLength
The length of the resulting string once the current string has been padded. If this parameter is smaller than the current string's 

length, the current string will be returned as it is.

@param fillString
The string to pad the current string with. If this string is too long, it will be truncated and the left-most part will be applied. The default value for this parameter is " " (U+0020).
*/
let s6 = '7';
let r3 = s6.padStart(3, 0);
console.log(r3);//007

console.log('======================================================================');

/*
padEnd():
    (method) String.padEnd(maxLength: number, fillString?: string | undefined): string
    Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length. 
    The padding is applied from the end (right) of the current string.

    @param maxLength
    The length of the resulting string once the current string has been padded. If this parameter is smaller than the 
    current string's length, the current string will be returned as it is.

    @param fillString
    The string to pad the current string with. If this string is too long, it will be truncated and the left-most part will be applied. 
    The default value for this parameter is " " (U+0020).
*/
let r4 = s6.padEnd(2, 0);
console.log(r4);//70

console.log('======================================================================');

/*
repeat():
    (method) String.repeat(count: number): string
    Returns a String value that is made from count copies appended together. If count is 0, the empty string is returned.

    @param count — number of copies to append
*/
let s7 = 'Cypress ';
let r5 = s7.repeat(4);
console.log(r5.trim());//Cypress Cypress Cypress Cypress

console.log('======================================================================');

/*
split():
    (method) String.split(separator: string | RegExp, limit?: number | undefined): string[] (+1 overload)
    Split a string into substrings using the specified separator and return them as an array.

    @param separator — A string that identifies character or characters to use in separating the string. If omitted, a single-element 
    array containing the entire string is returned.

    @param limit — A value used to limit the number of elements returned in the array.
*/
let languages = 'Java_Python_Ruby_JavaScript';
let langArr = languages.split('_');
console.log(langArr);//[ 'Java', 'Python', 'Ruby', 'JavaScript' ]

console.log('======================================================================');

/*
at():
    (method) String.at(index: number): string | undefined
    Returns a new String consisting of the single UTF-16 code unit located at the specified index.

    @param index — The zero-based index of the desired code unit. A negative index will count back from the last item.
*/
let fruit = 'Mango';
console.log(fruit.at(1));//a
console.log(fruit.at(fruit.length-1));//o

console.log('======================================================================');

/*
Can be used to get a character from a string:
*/
console.log(fruit[0]);//M
console.log(fruit[fruit.length-1]);//o
let char = fruit[3];
console.log(char);//g

console.log('======================================================================');
