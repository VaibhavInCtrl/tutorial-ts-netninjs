export class MyInvoice {
    
    constructor (
        readonly client: string,
        public payment: number,
        private details: string){
    }
    format(): string {
        return (`${this.client} owes us ${this.payment} amount for ${this.details}`)
    }
}
