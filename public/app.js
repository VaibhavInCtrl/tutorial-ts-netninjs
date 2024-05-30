import { MyInvoice } from './classes/invoice.js';
import { MylistTemplate } from './classes/listemplate.js';
import { MyPayments } from './classes/payments.js';
// important not .ts we use .js
// interface MyPerson {
//     name: string;
//     age: number;
//     speak(word: string): void;
//     spend(amount: number): number;
// }
// const me:MyPerson = {
//     name: "vaibhav",
//     age: 21,
//     speak(word: string): void {
//         console.log(word)
//     },
//     spend(amount: number): number {
//         console.log(amount);
//         return amount;
//     },
// }
// me.speak("Well hello there")
// me.spend(200)
// console.log(me)
// let docOne: hasFormatter;
// let docTwo: hasFormatter;
// docOne = new MyInvoice("vaibhav3", 223, "this website work")
// let inOne: MyInvoice = new MyInvoice("vaibhav", 200, "my website work");
// let inTwo: MyInvoice = new MyInvoice("vaibhav2", 300, "your website work");
// inOne.format()
// inOne.client = "vishal"
// let invoices: MyInvoice[] = [];
// invoices.push(inOne);
// invoices.push(inTwo);
// invoices.forEach(x => console.log(x.client, x.payment, x.format()))
// const anchor = document.querySelector("a")!;
// console.log(anchor.href)
const form = document.querySelector(".new-item-form");
// console.log(form)
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    let values = [tofrom.value, amount.valueAsNumber, details.value];
    if (type.value === "invoice") {
        doc = new MyInvoice(...values);
    }
    else {
        doc = new MyPayments(...values);
    }
    const ul = document.querySelector('ul');
    let listElement = new MylistTemplate(ul);
    listElement.render(doc, type.value, 'end');
    console.log(doc);
});
// GENERICS
const addUID = (obj) => {
    const uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let newObj = {
    "name": "vaibhav"
};
let namee = "vaibhav";
const newerObj = addUID(newObj);
// addUID(namee);
newerObj.uid;
newerObj.name;
const intGenericObj = {
    uid: 23,
    reference: "asd",
    data: ["asdd"]
};
// Enums
var MyResourceType;
(function (MyResourceType) {
    MyResourceType[MyResourceType["COAL"] = 0] = "COAL";
    MyResourceType[MyResourceType["COKE"] = 1] = "COKE";
    MyResourceType[MyResourceType["SINTER"] = 2] = "SINTER";
    MyResourceType[MyResourceType["KILN"] = 3] = "KILN";
})(MyResourceType || (MyResourceType = {}));
let rsdoc1 = {
    uid: 12,
    rstype: MyResourceType.COAL,
    data: "hello"
};
console.log(rsdoc1);
// Tuples
const newArr = ["abc", 23, true];
newArr[0] = 22;
// allowed, but we dont want to 
const newArr2 = ["abc", 23, true];
let newTupleArr = [];
newTupleArr.push(newArr2);
// different from arrays such that we can fix the position of the type of the value that are entered in the tuple and it cannot be anything else other than that type
