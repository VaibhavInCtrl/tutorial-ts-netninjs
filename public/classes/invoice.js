export class MyInvoice {
    constructor(client, payment, details) {
        this.client = client;
        this.payment = payment;
        this.details = details;
    }
    format() {
        return (`${this.client} has to give us ${this.payment} amount for ${this.details}`);
    }
}
