"use strict";
// let greet: Function;
// 1
var greet;
greet = function (name, greeting) {
    console.log(name + " says " + greeting);
};
// 2
var calc;
calc = function (numOne, numTwo, action) {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
// 3
var logDetails;
logDetails = function (minion) {
    console.log(minion.name + " is " + minion.age + " years old");
};
