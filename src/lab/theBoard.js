const myOb = {};


Object.defineProperty(myOb, '_name', {value: 'George', enumerable: false, writable: true})


Object.defineProperty(myOb, 'name', {

    get() {
        return this._name;
    },
    set(value) {
        this._name = value;
    }, enumerable: true
});
console.log('Before ->', myOb.name);
myOb.name = 'Peter';
console.log('After ->', myOb.name);
console.log(myOb);
for (const key in myOb) {
    let counter = 1;
    console.log(counter, key, myOb[key]);
}
console.log(Object.getOwnPropertyNames(myOb));