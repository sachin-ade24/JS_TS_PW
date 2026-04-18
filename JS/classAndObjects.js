
class Employee{

    //class variables:
    name;
    age;
    salary;
    isPermanent;
    projectName;

    //constructor: only one constructor is allowed in JS
    constructor(name, age, salary, isPermanent, projectName){
        this.projectName = projectName;
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.isPermanent = isPermanent;
    };

    //methods:
    getInfo(){
        console.log(`${this.name}, ${this.age}, ${this.salary}, ${this.isPermanent}`);
    }

    employeeProject(){
        console.log(`${this.name} is working on ${this.projectName}`);
    };

};

let emp1 = new Employee('Sachin', 37, 20, true, 'Metro');

console.log(emp.name);//Sachin

emp.getInfo();//Sachin, 37, 20, true

let emp2 = new Employee('Prince', 5, null, false, null);

export {emp1, emp2};
