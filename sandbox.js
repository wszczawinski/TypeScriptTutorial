// explicit types
var character;
var age;
character = 'bob';
age = 30;
// arrays
var minions = []; //creates empty array which enables array methods
minions.push('dave');
// union types
var mixed = [];
mixed.push('hello');
mixed.push(20);
mixed.push(true);
console.log(mixed);
var uid;
uid = '123';
uid = 123;
// object
var minionOne;
minionOne = { name: 'dave', age: 30 };
var minionTwo;
minionTwo = { name: 'Bob', age: 20, pants: 'blue' };
