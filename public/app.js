import { MyInvoice } from './classes/invoice.js';
const me = {
    name: "vaibhav",
    age: 21,
    speak(word) {
        console.log(word);
    },
    spend(amount) {
        console.log(amount);
        return amount;
    },
};
me.speak("Well hello there");
me.spend(200);
console.log(me);
let inOne = new MyInvoice("vaibhav", 200, "my website work");
let inTwo = new MyInvoice("vaibhav2", 300, "your website work");
// inOne.format()
// inOne.client = "vishal"
let invoices = [];
invoices.push(inOne);
invoices.push(inTwo);
invoices.forEach(x => console.log(x.client, x.payment, x.format()));
const anchor = document.querySelector("a");
// console.log(anchor.href)
const form = document.querySelector(".new-item-form");
// console.log(form)
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
