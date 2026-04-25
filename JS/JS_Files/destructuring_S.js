
/*

CHAPTER 1:

🔷 What is Array Destructuring?

    Array destructuring is a JavaScript feature that lets you extract values from an array and assign them to variables in a single line.

👉 Instead of accessing values using indexes (arr[0], arr[1]), you “unpack” them directly.

🔸 1. Basic Idea:

    Without destructuring:
    let arr = [10, 20, 30];

    let a = arr[0];
    let b = arr[1];
    let c = arr[2];


    With destructuring:
    let arr = [10, 20, 30];

    let [a, b, c] = arr;

✅ Same result, but cleaner and shorter.


🔸 2. How it works
    let [a, b, c] = [10, 20, 30];

    👉 Mapping happens like this:

    a = 10
    b = 20
    c = 30

    It matches position by position.


🔸 3. Skipping values

    You can skip elements using commas:

    let arr = [10, 20, 30];

    let [a, , c] = arr;

    console.log(a); // 10
    console.log(c); // 30


🔸 4. Default values

    If a value is missing, you can provide a default:

    let arr = [10];

    let [a, b = 50] = arr;

    console.log(a); // 10
    console.log(b); // 50


🔸 5. Swap variables (very important)
    let x = 1;
    let y = 2;

    [x, y] = [y, x];

    console.log(x, y); // 2 1

👉 No temp variable needed.


🔸 6. Rest operator (...)

    Collect remaining values:

    let arr = [1, 2, 3, 4];

    let [a, ...rest] = arr;

    console.log(a);    // 1
    console.log(rest); // [2, 3, 4]


🔸 7. Using with functions
    function getValues() {
        return [100, 200];
    }

    let [a, b] = getValues();

    console.log(a, b); // 100 200


🔸 8. Destructuring in loops (your earlier example)
    let fr = ['a', 'b', 'c'];

    for (const [index, value] of fr.entries()) {
        console.log(index, value);
    }

    👉 Here:

    entries() gives [index, value]
    [index, value] destructures that pair directly


🔸 9. Nested destructuring
    let arr = [1, [2, 3]];

    let [a, [b, c]] = arr;

    console.log(a); // 1
    console.log(b); // 2
    console.log(c); // 3


🔥 Interview Quick Summary
    Extract values from array → in one line
    Based on position (index)
    Cleaner than arr[index]
    Supports:
    Skipping values
    Default values
    Rest operator (...)
    Nested arrays
    Very useful with:
    entries()
    Function returns
    Swapping variables

=======================================================================================================================================

CHAPTER 2:

🔷 What is Object Destructuring?

    Object destructuring lets you extract values from an object and assign them to variables in a clean, short way.

👉 Instead of:

    let user = { name: 'Tom', age: 30 };

    let name = user.name;
    let age = user.age;

👉 You can write:

    let { name, age } = user;


🔸 1. How it works (Core Rule)

👉 Matching happens by property name (NOT position)

    let user = { name: 'Tom', age: 30 };

    let { name, age } = user;

    console.log(name); // Tom
    console.log(age);  // 30


🔸 2. Rename variables (very important)
    let user = { name: 'Tom', age: 30 };

    let { name: userName, age: userAge } = user;

    console.log(userName); // Tom
    console.log(userAge);  // 30

👉 Useful when:

    Variable name already exists
    You want better naming


🔸 3. Default values
    let user = { name: 'Tom' };

    let { name, age = 25 } = user;

    console.log(name); // Tom
    console.log(age);  // 25

👉 Default is used only if property is undefined


🔸 4. Missing properties
    let user = { name: 'Tom' };

    let { city } = user;

    console.log(city); // undefined


🔸 5. Nested destructuring
    let user = {
        name: 'Tom',
        address: {
            city: 'Pune',
            pin: 12345
        }
    };

    let { address: { city, pin } } = user;

    console.log(city); // Pune
    console.log(pin);  // 12345


🔸 6. Rest operator (...)
    let user = {
        name: 'Tom',
        age: 30,
        city: 'Pune'
    };

    let { name, ...rest } = user;

    console.log(name); // Tom
    console.log(rest); // { age: 30, city: 'Pune' }


🔸 7. Using in function parameters (very common)
    function printUser({ name, age }) {
        console.log(name, age);
    }

    printUser({ name: 'Tom', age: 30 });

👉 Directly extracts values from object argument


🔸 8. Combining with arrays (real-world use)
    let users = [
        { name: 'Tom', age: 30 },
        { name: 'Jerry', age: 25 }
    ];

    for (let { name, age } of users) {
        console.log(name, age);
    }


🔸 9. Important difference from Array Destructuring
    Feature	Array Destructuring	Object Destructuring
    Based on	Position (index)	Property name
    Order matters?	✅ Yes	❌ No
    Syntax	[a, b]	{a, b}
    🔥 Interview Quick Points
    Extract values from object → in one line
    Based on key names
    Supports:
    Renaming (name: userName)
    Default values (age = 25)
    Nested objects
    Rest operator (...rest)
    Very useful in:
    API responses
    Function parameters
    Loops (arrays of objects)

*/
