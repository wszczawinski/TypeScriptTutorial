let age: any = 20;

age = true;
console.log(age);
age = 'hello';
console.log(age);
age = 30;
console.log(age);

let mixed: any[] = [];

mixed.push(5);
mixed.push('Dave');
mixed.push(true);

console.log(mixed);

let minion: { name: any; age: any };

minion = { name: 'Bob', age: 20 };
console.log(minion);

console.log('Configured!!')
