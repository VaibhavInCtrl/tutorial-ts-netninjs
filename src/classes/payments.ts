import { hasFormatter } from "../interfaces/HasFormatter"

export class MyPayments implements hasFormatter{
    
    constructor (
        readonly payer: string,
        public required: number,
        private details: string){
    }
    format(): string {
        return (`${this.payer} owes us ${this.required} amount for ${this.details}`)
    }
}
