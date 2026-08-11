"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let myName = 'Shalom';
let meaningOfLife;
let isLoading;
let anyDataType; //this indicates the incoming value can be any data type and Ts should expect any
let album; //this is a union data type, lets TS know the variable could hold a string pr number and either one is okay
myName = 'Shammah';
meaningOfLife = 42;
isLoading = true;
album = '1984'; //or 1984 works
const sum = (a, b) => {
    return a + b;
};
//---------------Union type use-cases------------------
//Post id coming from an api could be a string and converted to number for use on the frontend
let postId;
//Booleans could also be represented as 1 or 0
let isActive;
//TS inference can help you out when you are not particularly sure of what the type of an expression should be
let re = /\w+/g;
//# sourceMappingURL=main.js.map