import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { ListTemplate } from './classes/ListTemplate.js';
const form = document.querySelector('.new-item-form');
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
//list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
//Generics  -  allows to create reusable blocks of code
const addUID = (obj) => {
    //'T' captures properties of the thing that was pass in (object in this case)
    //this enable to capture a specific of the type of 'thing'
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'Dave', age: 100 });
console.log(docOne, docOne.name);
const docThree = {
    uid: 1,
    resourceName: 'person',
    data: 'banana',
};
const docFour = {
    uid: 1,
    resourceName: 'person',
    data: { name: 'banana' },
};
const docFive = {
    uid: 1,
    resourceName: 'shopping list',
    data: ['eggs', 'milk'],
};
