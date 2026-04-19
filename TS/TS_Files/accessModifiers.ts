
//public, private, protected -- access modifiers

/*
Table:
    ---------------------------------------------------------
    Modifier  |  Same Class |  Sub-Class    |   Outside Class
    ---------------------------------------------------------
    public    |  Allowed    |   Allowed     |   Allowed
    private   |  Allowed    |   Not allowed |   Not allowed
    protected |  Allowed    |   Allowed     |   Not allowed
    ---------------------------------------------------------
    
*/

class User{

    //writing public is not mandatory. If you don't write public/private/protected, by default it is considered as public.
    public testing(): void{
        console.log('testing method');
    };

    private coding(): void{
        console.log('coding method');
    };

    protected management(): void{
        console.log('management method');
    };

    public accessProtectedProperty(){
        this.management();
    }//encapsulation

    public accessPrivateProperty(){
        this.coding();
    }//encapsulation

};

console.log('======================================================================');

//Now, I am outside of the class:
let u1: User = new User();
u1.testing();//allowed
//u1.coding();//not allowed
//u1.management();//not allowed
u1.accessPrivateProperty();//encapsulation
u1.accessProtectedProperty();//encapsulation

console.log('======================================================================');

class Employee extends User{
    public working(): void{
        this.testing();//public property can be accessed by sub-class or child-class
        this.management();//protected property can be accessed by sub-class or child-class
        //this.coding();//private proprty cannot be accessed by sub-class or child-class
        //===================================================================================
        let e: Employee = new Employee();
        e.testing();//Can be accessed within sub-class or child-class
        e.management();//Can be accessed within sub-class or child-class
        e.accessPrivateProperty();//encapsulation
        e.accessProtectedProperty();//encapsulation
    }
};

console.log('======================================================================');

//Now, I am outside of the class:
let e1: Employee = new Employee();
e1.testing();//valid
e1.working();//valid
e1.accessPrivateProperty();//encapsulation
e1.accessProtectedProperty();//encapsulation

export{};
