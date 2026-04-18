
import {Car, BMW, Audi} from './class_car.js';

let c = new Car();
c.start();//car --> start
c.stop();//car --> stop
c.refuel();//car --> refuel
c.acessPrivateVar();//I can access #password using acessPrivateVar() method of Car class --> This is encapsulation
/*
1234
Audi --> theftSafety
*/
c.getEngineData();//car --> engine data

console.log('======================================================================');

let b = new BMW();
b.start();//BMW --> start
b.stop();//car --> stop
b.refuel();//car --> refuel
b.autoParking();//BMW --> autoParking
b.acessPrivateVar();//1234
b.getEngineData();//car --> engine data

console.log('======================================================================');

let a = new Audi();
a.start();//car --> start
a.stop();//car --> stop
a.refuel();//car --> refuel
a.theftSafety();//Audi --> theftSafety
a.acessPrivateVar();//1234
a.getEngineData();//car --> engine data

console.log('======================================================================');

console.log(Car.wheels);//4
console.log(c.min_speed);//100
console.log(b.min_speed);//200
console.log(a.min_speed);//100

