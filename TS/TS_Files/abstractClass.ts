
//Abstract class:
/*
1. can not create object of the abstract class
2. can have abstract methods: the methods without body
3. can have non abstract methods: have method body
4. Abstract methods + non abstract methods --> 0 to 100% abstraction (partial abstraction)
*/

abstract class Page{

    //I can create constructor of the abstarct class (same as JAVA)
    //The constructor of the parent abstract class will be called when the child class child class object created
    //Note: As soon as I create object of the child class the parent abstract constructor will be called.
    constructor(){
        console.log('constructor for -- Page abstract class');
    };

    //abstract methods:
    abstract title(): void;
    abstract url(): void;

    //non abstract methods:
    pageLoading(): void{
        console.log('Page -- Page is loading in 20 seconds');
    };
    footers(): void{
        console.log('Page -- Display footer links');
    };
};

class LoginPage extends Page{
    constructor(){
        super();
        /*
        If we are creating child class constructor, it is mandatory to write --> super();
        It doesn't matter whether we have parent constructor defined or not (in the parent class)
        */
        console.log('LoginPage -- constructor');
    };
    override title(): void {
        console.log('LoginPage -- title');
    };
    override url(): void {
        console.log('LoginPage -- url');
    };
    override pageLoading(): void{
        console.log('LoginPage -- Page is loading in 05 seconds');
    };
    doLogin(username: string, password: string): void{
        console.log(username, password, 'LoginPage -- doLogin');
    };
};

let lp: LoginPage = new LoginPage();
//Note: As soon as I create object of the child class the parent abstract constructor will be called.
/*
constructor for -- Page abstract class
LoginPage -- constructor
*/
lp.title();//LoginPage -- title
lp.url();//LoginPage -- url
lp.pageLoading();//LoginPage -- Page is loading in 05 seconds
lp.doLogin('Sachin', 'abc@123');//Sachin abc@123 LoginPage -- doLogin

export{};
