// explicit types
let character: string;
let age: number;

character = 'bob';
age = 30;

// arrays
let minions: string[] = []; //creates empty array which enables array methods
minions.push('dave');

// union types
let mixed: (string | number | boolean)[] = [];
mixed.push('hello');
mixed.push(20);
mixed.push(true);
console.log(mixed);

let uid: string | number;
uid = '123';
uid = 123;

// object
let minionOne: object;
minionOne = { name: 'dave', age: 30 };

let minionTwo: {
    name: string;
    age: number;
    pants: string;
};

minionTwo = { name: 'Bob', age: 20, pants: 'blue' };
