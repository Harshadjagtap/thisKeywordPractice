// this keyword in js
function User(){
    this.name = "Harshad";
    this.getName = function(){
        console.log(this.name);
        // that = this;
        // function myName(){
        //     console.log(that.name);
        // }
        let myName = ()=> {
            console.log(this.name);
        }
        myName();
    }
}

let harshad = new User();
harshad.getName();

// Date inbuild functions
let MyDate = new Date();
console.log(MyDate);
// for local date
console.log(MyDate.toLocaleDateString());
// for date & time (Local)
console.log(MyDate.toLocaleString());
// for time only 
console.log(MyDate.toLocaleTimeString());

let CustomDate = new Date("09/11/1994");
console.log(CustomDate);

console.log(CustomDate.getMonth());

let obj = {
    name:"Shreyash",
    class:"MSC",
    getData: function(){
        console.log(`Student Name is ${this.name} and class is ${this.class}`);
    }
}

console.log(obj);
// obj.Prototype.designation = "UI Developer";
// console.log(obj);