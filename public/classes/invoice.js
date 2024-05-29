export class MyInvoice {
    constructor(client, payment, details) {
        this.client = client;
        this.payment = payment;
        this.details = details;
    }
    format() {
        return (`${this.client} owes us ${this.payment} amount for ${this.details}`);
    }
}
