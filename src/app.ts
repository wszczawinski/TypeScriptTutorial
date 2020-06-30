interface isPerson {
    name: string;
    age: number;
    speak(a: string): void;
    spend(a: number): number;
}

const me: isPerson = {
    name: 'Dave',
    age: 100,
    speak(text: string): void {
        console.log(text);
    },
    spend(amount: number): number {
        console.log('I spent', amount);
        return amount;
    },
};

const greetPerson = (person: isPerson) => {
    console.log('Hello ', person.name);
};

greetPerson(me);

console.log(me);

import { Invoice } from './classes/Invoice.js';

const invOne = new Invoice('Bob', 'Glasses', 50);
const invTwo = new Invoice('John', 'Glasses', 30);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});

const anchor = document.querySelector('a')!;
//if developer is sure that there is some anchor tag in html file
//can add '!' which will stap tsc from showing an error

// if (anchor) {
//     console.log(anchor);
// }

console.log(anchor.href);

const form1 = document.querySelector('form')!;
const form2 = document.querySelector('.new-item-form') as HTMLFormElement;

// console.log(form1.children);

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form2.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
