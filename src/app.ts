import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Invoice('Dave', 'web work', 250);
// docTwo = new Payment('Mario', 'plumbing work', 200);

// let docs: HasFormatter[] = [];
// docs.push(docOne);

// const invOne = new Invoice('Bob', 'Glasses', 50);
// const invTwo = new Invoice('John', 'Glasses', 30);

// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);

// invoices.forEach(inv => {
//     console.log(inv.client, inv.amount, inv.format());
// });

// const anchor = document.querySelector('a')!;
// //if developer is sure that there is some anchor tag in html file
// //can add '!' which will stap tsc from showing an error

// // if (anchor) {
// //     console.log(anchor);
// // }

// console.log(anchor.href);

// const form1 = document.querySelector('form')!;
// console.log(form1.children);
const form = document.querySelector('.new-item-form') as HTMLFormElement;

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let doc: HasFormatter;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    } else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
});
