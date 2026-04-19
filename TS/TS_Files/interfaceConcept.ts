
//interface:
/*
1. interface is used to define protype for objects and classes
2. cannot create the object of interface
3. only andonly method declaration, no method body -- meaning no business logic
*/

//1. Interface with objects: Interface defines blueprint of the object

//Following is the blue prnt for the object belong to User interface
interface User{
    name: string;
    age: number;
    salary: number;
    city: string;
    readonly companyName: string;
    codingCapability(): void;
    calculateSalary(): number;
};

let user1: User = {
    name: "Sachin",
    age: 37,
    city: "Pune",
    companyName: "Company",
    salary: 20,
    codingCapability(): void{
        console.log(`${this.name} can code`);
    },
    calculateSalary(): number{
        return this.salary + (this.salary*0.1);
    }
};

console.log(user1);
/*
{
  name: 'Sachin',
  age: 37,
  city: 'Pune',
  companyName: 'Company',
  salary: 20,
  codingCapability: [Function: codingCapability],
  calculateSalary: [Function: calculateSalary]
}
*/
user1.codingCapability();//Sachin can code
console.log(user1.calculateSalary());//22

export{};
