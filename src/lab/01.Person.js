function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.write = function (message) {
    console.log(`${this.firstName} logs  ${message}`);
}
const foo = new Person('fname', 'lname');
console.log(foo.hasOwnProperty('write'));
console.log(foo instanceof Person);
console.log(Person.hasOwnProperty('write'));
console.log(Person.prototype.hasOwnProperty('write'));
foo.write('msaj');