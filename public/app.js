"use strict";
var Invoice = /** @class */ (function () {
    function Invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes " + this.amount + " for " + this.details;
    };
    return Invoice;
}());
var invOne = new Invoice('Bob', 'Glasses', 50);
var invTwo = new Invoice('John', 'Glasses', 30);
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
invOne.client = 'Dave';
console.log(invoices);
var anchor = document.querySelector('a');
//if developer is sure that there is some anchor tag in html file
//can add '!' which will stap tsc from showing an error
// if (anchor) {
//     console.log(anchor);
// }
console.log(anchor.href);
var form1 = document.querySelector('form');
var form2 = document.querySelector('.new-item-form');
// console.log(form1.children);
// inputs
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form2.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
