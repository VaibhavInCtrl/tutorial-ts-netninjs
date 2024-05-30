import { hasFormatter } from "../interfaces/HasFormatter"

export class MyInvoice implements hasFormatter{
    
    constructor (
        readonly client: string,
        public payment: number,
        private details: string){
    }
    format(): string {
        return (`${this.client} has to give us ${this.payment} amount for ${this.details}`)
    }
}
