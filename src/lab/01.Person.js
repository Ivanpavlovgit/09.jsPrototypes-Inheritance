function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    Object.defineProperty(this, 'fullName', {
        enumerable: true,
        get: function () {
            return `${this.firstName} ${this.lastName}`
        },
        set: function (value) {
            [this.firstName, this.lastName] = value.split(' ');
        }
    });
}
const me=new Person('terminator','merminator');
console.log(me);
console.log(me.firstName);
console.log(me.lastName);
console.log(me.fullName);