class Invoice {
    client: string;
    details: string;
    amount: number;

    constructor(c: string, d: string, a: number) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }

    format() {
        return `${this.client} owes ${this.amount} for ${this.details}`;
    }
}

const invOne = new Invoice('Bob', 'Glasses', 50);
const invTwo = new Invoice('John', 'Glasses', 30);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

console.log(invoices);

invOne.client = 'Dave';

console.log(invoices);



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
