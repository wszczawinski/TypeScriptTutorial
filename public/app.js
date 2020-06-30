const me = {
    name: 'Dave',
    age: 100,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I spent', amount);
        return amount;
    },
};
const greetPerson = (person) => {
    console.log('Hello ', person.name);
};
greetPerson(me);
console.log(me);
import { Invoice } from './classes/Invoice.js';
const invOne = new Invoice('Bob', 'Glasses', 50);
const invTwo = new Invoice('John', 'Glasses', 30);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
const anchor = document.querySelector('a');
//if developer is sure that there is some anchor tag in html file
//can add '!' which will stap tsc from showing an error
// if (anchor) {
//     console.log(anchor);
// }
console.log(anchor.href);
const form1 = document.querySelector('form');
const form2 = document.querySelector('.new-item-form');
// console.log(form1.children);
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form2.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
