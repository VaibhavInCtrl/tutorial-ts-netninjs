import {MyInvoice} from './classes/invoice.js'
// important not .ts we use .js

interface MyPerson {
    name: string;
    age: number;
    speak(word: string): void;
    spend(amount: number): number;
}

const me:MyPerson = {
    name: "vaibhav",
    age: 21,
    speak(word: string): void {
        console.log(word)
    },
    spend(amount: number): number {
        console.log(amount);
        return amount;
    },
}

me.speak("Well hello there")
me.spend(200)
console.log(me)

let inOne: MyInvoice = new MyInvoice("vaibhav", 200, "my website work");
let inTwo: MyInvoice = new MyInvoice("vaibhav2", 300, "your website work");

// inOne.format()
// inOne.client = "vishal"

let invoices: MyInvoice[] = [];
invoices.push(inOne);
invoices.push(inTwo);

invoices.forEach(x => console.log(x.client, x.payment, x.format()))

const anchor = document.querySelector("a")!;

// console.log(anchor.href)

const form = document.querySelector(".new-item-form") as HTMLFormElement;

// console.log(form)

const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit",(e:Event) => {
    e.preventDefault()
    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber
    )
})

