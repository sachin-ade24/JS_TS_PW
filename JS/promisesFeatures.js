
let p1 = Promise.resolve('Task 1 done..');
p1.then((result)=>console.log(result));//Task 1 done..

let p2 = Promise.reject('Task 1 is not completed..');
p2.catch((error)=>console.log(error));//Task 1 is not completed..

console.log('======================================================================');

//Multiple promises handling:

//1. Promise.all(): run multiple promises in parallel mode and waits until all of then succeed

/*
all():
    (method) PromiseConstructor.all<[Promise<any>, Promise<any>, Promise<any>]>(values: [Promise<any>, Promise<any>, Promise<any>]): Promise<[any, any, any]> (+1 overload)
    Creates a Promise that is resolved with an array of results when all of the provided Promises resolve, or rejected when any Promise 
    is rejected.

    @param values — An array of Promises.

    @returns — A new Promise.
*/

let pr1 = Promise.resolve('Task 1 done');
let pr2 = Promise.resolve('Task 2 done');
let pr3 = Promise.resolve('Task 3 done');

Promise.all([pr1, pr2, pr3])
    .then((result)=>console.log(result));
/*
[ 'Task 1 done', 'Task 2 done', 'Task 3 done' ]
*/

//With wait:
let pr4 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('Display logo on the page.');
    }, 3000);
});

let pr5 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('Load the login form.');
    }, 2000);
});

let pr6 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('Load footer of the page.');
    }, 1000);
});

Promise.all([pr4, pr5, pr6]).then((result)=>console.log(result));
/*
[
  'Display logo on the page.',-->pr4
  'Load the login form.',-->pr5
  'Load footer of the page.'-->pr6
]
*/

//Now check the sequence of the promises after getting resolved here:
//This does not indicate that the first promise present at 0th index is getting resolved first and then second and then third
//All will start resolving parallely and displayed after the maximum time required for the promise which takes 3 seconds i.e. pr4
Promise.all([pr6, pr4, pr5]).then((result)=>console.log(result));
/*
o/p:
[
  'Load footer of the page.',-->pr6
  'Display logo on the page.',-->pr4
  'Load the login form.'-->pr5
]
*/

Promise.all([pr6, pr5, pr4]).then((result)=>console.log(result));
/*
o/p:
[
  'Load footer of the page.',-->pr6
  'Load the login form.',-->pr5
  'Display logo on the page.'-->pr4
]
*/

Promise.all([pr4, pr6, pr5]).then((result)=>console.log(result));
/*
o/p:
[
  'Display logo on the page.',-->pr4
  'Load footer of the page.',-->pr6
  'Load the login form.'-->pr5
]
*/

Promise.all([pr5, pr6, pr4]).then((result)=>console.log(result));
/*
[
o/p:
  'Load the login form.',-->pr5
  'Load footer of the page.',-->pr6
  'Display logo on the page.'-->pr4
]
*/

/*
Summary:
Parallel execution, ordered results (Maintains array order to display the o/p).
*/

console.log('======================================================================');

//Now consider the scenario: One of the promises is rejected/failed:
let pr7 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('pr7: Display logo on the page.');
    }, 1000);
});

let pr8 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject('pr8: Login form error with loading..');
    }, 2000);
});

let pr9 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('pr9: Load footer of the page.');
    }, 3000);
});

Promise.all([pr7, pr8, pr9])
    .then((result)=>console.log(result))
    .catch((error)=>console.log(error));

/*
If one promise fails or rejected --> all will fail
o/p:
pr8: Login form error with loading..
*/

/*
If all are failing then: it will display the first one which has less timeout in the program. 
Here, e.g. pr10 is diaplayed on the console.
*/

let pr10 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject('pr10: Display logo error on the page..');
    }, 1000);
});

let pr11 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject('pr11: Login form error with loading..');
    }, 2000);
});

let pr12 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject('pr12: error with loading footer of the page..');
    }, 3000);
});

Promise.all([pr11, pr12, pr10])
    .then((result)=>console.log(result))
    .catch((error)=>console.log(error));
/*
pr10: Display logo error on the page..
*/

console.log('======================================================================');

//2. Promise.race():

/*
Promise.race():
    (method) PromiseConstructor.race<readonly unknown[] | []>(values: readonly unknown[] | []): Promise<unknown> (+1 overload)
    Creates a Promise that is resolved or rejected when any of the provided Promises are resolved or rejected.

    @param values — An array of Promises.

    @returns — A new Promise.
*/

/*
Case 1: when promises have different timeouts --> The one which has lower timeout will win thw race i.e. will be displayed on the 
        console. other will not be displayed on the console. It means only one promise will get resolved or rejected and rest will not 
        get executed.
*/

let t1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('t1 --> Resolved..');
    }, 2000);
});

let t2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('t2 --> Resolved..');
    }, 500);
});

let t3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('t3 --> Resolved..');
    }, 1500);
});

Promise.race([t1, t2, t3])
    .then((result)=>console.log(result))
    .catch((error)=>console.log(error));
/*
o/p: is t2 --> because it has timeout = 500 ms, the lowest among all above (i.e. t1, t2, t3)
t2 --> Resolved..
*/

/*
case 2: When all promises have same timeout --> The one which is written first, will get executed i.e. either resolved or rejected.
*/

let t4 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('t4 --> Resolved t4..');
    }, 1000);
});

let t5 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('t5 --> Resolved t5..');
    }, 1000);
})

let t6 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('t6 --> Resolved t6..');
    }, 1000);
})

Promise.race([t4, t5, t6])
    .then((result)=>console.log(result))
    .catch((error)=>console.log(error))

/*
o/p:
t4 --> Resolved t4..
*/

console.log('======================================================================');

//2. Promise.allSettled():
/*
Waits for all the promises to finish, doesn't matter whether they resolve or reject
*/

/*
allSettled():
    (method) PromiseConstructor.allSettled<[Promise<any>, Promise<any>, Promise<any>]>(values: [Promise<any>, Promise<any>, Promise<any>]): Promise<[PromiseSettledResult<any>, PromiseSettledResult<any>, PromiseSettledResult<any>]> (+1 overload)
    Creates a Promise that is resolved with an array of results when all of the provided Promises resolve or reject.

    @param values — An array of Promises.

    @returns — A new Promise.
*/

let t7 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('t7: Resolved --> t7');
    }, 2000);
});

let t8 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('t8: Resolved --> t8');
    }, 1500);
});

let t9 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('t9: Resoved --> t9');
    }, 3500);
});

Promise.allSettled([t7, t8, t9])
    .then((result)=>console.log(result))
    .catch((error)=>console.log(error));

/*
o/p:
[
  { status: 'fulfilled', value: 't7: Resolved --> t7' },
  { status: 'fulfilled', value: 't8: Resolved --> t8' },
  { status: 'fulfilled', value: 't9: Resoved --> t9' }
]
*/


let t7_1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject('t7_1: Rejected --> t7_1');
    }, 2000);
});

let t8_1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('t8_1: Resolved --> t8_1');
    }, 1500);
});

let t9_1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('t9_1: Resoved --> t9_1');
    }, 3500);
});

Promise.allSettled([t7_1, t8_1, t9_1])
    .then((result)=>console.log(result))
    .catch((error)=>console.log(error));
/*
[
  { status: 'rejected', reason: 't7: Rejected --> t7' },
  { status: 'fulfilled', value: 't8: Resolved --> t8' },
  { status: 'fulfilled', value: 't9: Resoved --> t9' }
]
*/

//Promise.any(): returns the first successful or resolved promise
/*
any():
    (method) PromiseConstructor.any<[Promise<any>, Promise<any>, Promise<any>]>(values: [Promise<any>, Promise<any>, Promise<any>]): Promise<any> (+1 overload)
    The any function returns a promise that is fulfilled by the first given promise to be fulfilled, or rejected with an AggregateError 
    containing an array of rejection reasons if all of the given promises are rejected. It resolves all elements of the passed iterable 
    to promises as it runs this algorithm.

    @param values — An array or iterable of Promises.

    @returns — A new Promise.
*/

let t10 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('t10: Resolved --> t10');
    }, 900);
});

let t11 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('t11: Resolved --> t11');
    }, 1000);
});

let t12 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('t12: Resolved --> t12');
    }, 200);
});

Promise.any([t10, t11, t12])
    .then((result)=>console.log(result))
    .catch((error)=>console.log(error))

/*
o/p:
t12: Resolved --> t12
*/

let t10_1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('t10_1: Resolved --> t10_1');
    }, 900);
});

let t11_1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('t11_1: Resolved --> t11_1');
    }, 100);
});

let t12_1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('t12_1: Resolved --> t12_1');
    }, 200);
});

Promise.any([t10_1, t11_1, t12_1])
    .then((result)=>console.log(result))
    .catch((error)=>console.log(error))

/*
case 1: If only one of all promises is resolved, it will display that on the console.
case 2: If few promises get resolved, it will display the one which has lowest timeout.
case 3: If all resolved, it will display the one which has lowest timeout.
o/p:
t11_1: Resolved --> t11_1
*/

/*
case 4: all rejected
o/p:
[AggregateError: All promises were rejected] {
  [errors]: [
    't10_1: Rejected --> t10_1',
    't11_1: Rejected --> t11_1',
    't12_1: Rejected --> t12_1'
  ]
}
*/
