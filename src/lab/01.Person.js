class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(value) {
        this.firstName=value.split(' ')[0];
        this.lastName=value.split(' ')[1];
    }
}
const myPerson=new Person('pesho','meshev');
console.log(myPerson);
myPerson.fullName='MESHO PESHEV';
console.log(myPerson);
myPerson.firstName='hesho';
console.log(myPerson);