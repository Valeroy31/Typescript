"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//generics
const stringEcho = (arg) => arg;
const echo = (arg) => arg;
const isObj = (arg) => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null);
};
// console.log(isObj(true));
// console.log(isObj('John'));
// console.log(isObj([1,2,3]));
// console.log(isObj({name: 'John'}))
// console.log(isObj(null))
const isTrue = (arg) => {
    return { arg, is: Boolean(arg) };
};
function identity(arg) {
    return arg;
}
let output = identity(['string', 47]);
console.log(output);
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
loggingIdentity([]);
const getUserProp = (Users, key) => {
    return Users.map((user) => user[key]);
};
//Using generic in a class
class StateObject {
    data;
    constructor(value) {
        this.data = value;
    }
    get state() {
        return this.data;
    }
    set state(value) {
        this.data = value;
    }
}
const store = new StateObject("John");
console.log(store.state);
//store.state = 12
const myState = new StateObject([15]);
