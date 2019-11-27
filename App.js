// This require node to run without browser
// install node from following link https://nodejs.org/en/download/
// node node in system variables

//classes
//The important thing to remember is class must be declared first before initialization. In function you can initialize function before declaration.

//declaration
class Vehicle {
    constructor(fuel) {//constructor used to initialize variable, not necessary 
        this.fuel = fuel;
    }
}

let obj = new Vehicle("Petrol")
console.log("[Simple declaration{Line 16}]", obj.fuel)

//unnamed class
obj = class {
    constructor(fuel) {//constructor used to initialize variable, not necessary 
        this.fuel = fuel;
    }
}

console.log("[Unnamed declaration{Line:25}]", obj.name)

//named export
obj = class Vehicle {
    constructor(fuel) {//constructor used to initialize variable, not necessary 
        this.fuel = fuel;
    }
}

console.log("[Named declaration{Line:34}]", obj.name)

//constructor is used to initialize objects in class. Usage of more than one constructor will throw an error. super can be called in constructor for initializing parent class

// field declaration

class V {
    p = 0
    constructor(p) {
        this.p = p;
    }
    //getter method
    get p_val() {
        return this.p;
    }
}

obj = new V('Prince');
console.log("[Field Declaration{Line:52}]",obj.p_val)

//extends
class Person{
    constructor(){
        this.name="John Doe";
    }
    printMyName(){
        console.log(this.name)
    }
}
const p = new Person()
p.printMyName()

