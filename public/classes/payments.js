export class MyPayments {
    constructor(payer, required, details) {
        this.payer = payer;
        this.required = required;
        this.details = details;
    }
    format() {
        return (`${this.payer} owes us ${this.required} amount for ${this.details}`);
    }
}
