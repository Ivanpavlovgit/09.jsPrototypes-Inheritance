'use strict'
const myOb = {};

Object.defineProperty(myOb,'name',{
    value: 'John',
    writable:true,
    enumerable:true,
    configurable:false
});
console.log(myOb);
//delete myOb.name;
console.log(myOb);
Object.defineProperty(myOb,'name',{
    value:'can change'
});

Object.defineProperty(myOb,'name',{
    configurable:true
});
