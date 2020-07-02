import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

const form = document.querySelector('.new-item-form') as HTMLFormElement;

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

//list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let doc: HasFormatter;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    } else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }

    list.render(doc, type.value, 'end');
});

//Generics  -  allows to create reusable blocks of code

const addUID = <T extends object>(obj: T) => {
    //'T' captures properties of the thing that was pass in (object in this case)
    //this enable to capture a specific of the type of 'thing'
    let uid = Math.floor(Math.random() * 100);
    return { ...obj, uid };
};

let docOne = addUID({ name: 'Dave', age: 100 });

console.log(docOne, docOne.name);

//with interfaces
interface Resource<T> {
    //'T' allows to assing type for 'data' based on the type of variable which will be pass in
    uid: number;
    resourceName: string;
    data: T;
}

const docThree: Resource<string> = {
    uid: 1,
    resourceName: 'person',
    data: 'banana',
};

const docFour: Resource<object> = {
    uid: 1,
    resourceName: 'person',
    data: { name: 'banana' },
};

const docFive: Resource<string[]> = {
    uid: 1,
    resourceName: 'shopping list',
    data: ['eggs', 'milk'],
};
