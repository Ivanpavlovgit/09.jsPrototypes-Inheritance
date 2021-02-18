function Person(name){
    this.name=name;
}
Person.prototype.sayHi=function (){
    console.log(`${this.name} says hi!`);
}
function Employee(name,salary){
    Person.call(this,name);
    this.salary=salary;
}


//~~~~~~~~~~~~~Inherit with Object.create(class.class/obj.prototype)
//if inherited with just class.class/obj.prototype it copies the reference and after change the
// child prototype will change the parent type which is VERY BAD~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Employee.prototype=Object.create(Person.prototype);



Employee.prototype.collectSalary=function (){
    console.log(`${this.name} collected ${this.salary}`);
}

const myEmployYee=new Employee('Slave','50lv');
console.log(myEmployYee);
myEmployYee.sayHi();
myEmployYee.collectSalary();