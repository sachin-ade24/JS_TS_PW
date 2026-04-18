
class Car{

    static wheels = 4;

    min_speed = 100;

    //private variables in class:
    #password = 1234;//The prvate property of the class cannot be accessed directly outside of the class
    /*
    For accessing the private property of the class outside of the class we need to do encapsulation
    We can create getter and setter methods or we can create a normal method in the same class  
    and call that method from outside of the class in the same file or in the different file.
    */

    acessPrivateVar(){
        console.log(this.#password);
    };

    start(){
        console.log('car --> start');
    };

    stop(){
        console.log('car --> stop');
    };

    refuel(){
        console.log('car --> refuel');
    };

    #getEngine(){
        console.log('car --> engine data');
    }

    getEngineData(){
        this.#getEngine();
    }

};

class BMW extends Car{

    min_speed = 200;

    start(){
        console.log('BMW --> start');
    };

    autoParking(){
        console.log('BMW --> autoParking');
    };

};

class Audi extends Car{
    theftSafety(){
        //this.acessPrivateVar();//valid: I can access #password via acessPrivateVar() of Car class.
        console.log('Audi --> theftSafety');
    };
};

/*

IMPORTANT:-->

let bmw =  new BMW();

bmw.start();//BMW --> start :--> overriden by BMW
bmw.autoParking()//BMW --> autoParking
bmw.stop();//car --> stop :--> inherited from car
bmw.refuel();//car --> refuel :--> inherited from car

console.log('======================================================================');

let car = new Car();

car.start();//car --> start
car.stop();//car --> stop
car.refuel();//car --> refuel

//console.log(car.#password);//invalid and not possible
console.log(car.min_speed);//valid
console.log(car.wheels);//undefined
console.log(Car.wheels);//4
car.acessPrivateVar();//1234
car.getEngineData();//car --> engine data
//Valid: we can access the private method by doing encapsulation

console.log('======================================================================');

let audi = new Audi();
audi.start();//car --> start
audi.stop();//car --> stop
audi.refuel();//car --> refuel
audi.theftSafety();//1234 Audi --> theftSafety

console.log('======================================================================');

*/

//export let c = new Car();//--> possible

export {Car, BMW, Audi};
