import {MyInvoice} from './classes/invoice.js'
import { MylistTemplate } from './classes/listemplate.js';
import { MyPayments } from './classes/payments.js';
import { hasFormatter } from './interfaces/HasFormatter.js';
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

const form = document.querySelector(".new-item-form") as HTMLFormElement;

// console.log(form)

const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;


form.addEventListener("submit",(e:Event) => {
    e.preventDefault()
    let doc: hasFormatter;
    let values:[string, number, string] = [tofrom.value, amount.valueAsNumber, details.value]
    if (type.value === "invoice"){
        doc = new MyInvoice(...values);
    }
    else{
        doc = new MyPayments(...values);
    }
    const ul = document.querySelector('ul')!;
    let listElement = new MylistTemplate(ul);
    listElement.render(doc, type.value, 'end')
    console.log(doc)
})

// GENERICS

const addUID = <T extends {name: string}>(obj: T) => {
    const uid = Math.floor(Math.random() * 100);
    return {...obj, uid};
}

let newObj = {
    "name": "vaibhav"
}
let namee = "vaibhav"
const newerObj = addUID(newObj);
// addUID(namee);
newerObj.uid;
newerObj.name;
// if we try to access newerObj older values, error happens
// to combat this we can add <T> and pass obj as T, what this does is, whatever older info and type was passed is now retained
// now we can also add uid to strings, to combat this we can extend T to objects, like <T extends object>
// we can use {name: string} instead of objects to even define it more other than just objects, but this only checks for 
// name key, there might be other keys in the object and theri wont be any issue

// interfaces with generics

interface myresource<T> {
    uid: number,
    reference: string,
    data: T
}

const intGenericObj: myresource<string[]> = {
    uid: 23,
    reference: "asd",
    data: ["asdd"]
}

// Enums

enum MyResourceType {COAL, COKE, SINTER, KILN}

interface resourceobj<T> {
    uid: number,
    rstype: MyResourceType,
    data: T
}

let rsdoc1:resourceobj<String> = {
    uid: 12,
    rstype: MyResourceType.COAL,
    data:"hello"
}

console.log(rsdoc1)

// Tuples
const newArr = ["abc", 23, true]
newArr[0] = 22
// allowed, but we dont want to 
const newArr2:[string, number, boolean] = ["abc", 23, true]
type tupleType = [string, number, boolean];
let newTupleArr: tupleType[] = [];
newTupleArr.push(newArr2);


// different from arrays such that we can fix the position of the type of the value that are entered in the tuple and it cannot be anything else other than that type