const myCollection = {};

Object.defineProperty(myCollection, 'size', {
    enumerable: false,
    get: function () {
        return Object.keys(this).length;
    }
});

myCollection['Jan'] = '+359-321-553-000';
myCollection['Clod'] = '+359-321-553-001';
myCollection['Van'] = '+359-321-553-222';
myCollection['Damme'] = '+359-321-553-333';
console.log(myCollection.size);
for (let key in myCollection) {
    console.log(key,myCollection[key]);
}
console.log(Object.getOwnPropertyNames(myCollection));