// let greet: Function;

// 1
let greet: (a: string, b: string) => void;

greet = (name: string, greeting: string) => { //has to much daclared values
    console.log(`${name} says ${greeting}`);
};

// 2
let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
    if (action === 'add') {
        return numOne + numTwo;
    } else {
        return numOne - numTwo;
    }
};

// 3
let logDetails: (obj: { name: string; age: number }) => void;
type person = { name: string; age: number };

logDetails = (minion: person) => {
    console.log(`${minion.name} is ${minion.age} years old`);
};
