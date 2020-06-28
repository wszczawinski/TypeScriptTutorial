"use strict";
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
