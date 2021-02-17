const myObj = {
    name: 'Pesho',
    age: 21
};
console.log(Object.getOwnPropertyDescriptor(myObj, 'name'));
Object.defineProperty(myObj, 'lastName', {
    value: 'Peshev',
    writable: true,
    enumerable: true,
    configurable: true
})
console.log(Object.getOwnPropertyDescriptor(myObj, 'age'));
console.log(myObj);
for (const myObjKey in myObj) {
    console.log(myObjKey);
}//logs the keys
for (const myObjKey in myObj) {
    console.log(myObjKey,myObj[myObjKey]);
}//logs the keys and values