// constructor
function Car(carName, carModal){
    this.carName = carName;
    this.carModal = carModal;
    // template string
    console.log(`The car name is ${this.carName} and the car modal is ${this.carModal}`);
}

let SUV = new Car("SUV", "100");
let Tata = new Car("Punch", "500");

console.log(SUV.carName);

// ES6 Classes
class Stud {
    constructor(Name, Class){
        this.Name = Name;
        this.Class = Class;
    }
    getStud(){
        console.log(`The student name is ${this.Name} and student class is ${this.Class}`);
    }
    setStud(newName, newClass){
        this.Name = newName;
        this.Class= newClass;
    }
}

let shreysh = new Stud("Shreyash", "MSC");
shreysh.getStud();

let stdInfo = new Stud("Harshad", "BSC");
stdInfo.getStud();

stdInfo.setStud("Ram", "MBA");
stdInfo.getStud();

class X{
    demo(){
        console.log("This is from demo under X");
    }
}

class Y extends X{
    demo1(){
        console.log("this is from demo under Y");
    }
}

let my_Y = new Y();
my_Y.demo();