import { DioAccount } from "./DioAccount";

export class PersonAccount extends DioAccount {
    private readonly cpf: string;

    constructor(name: string, cpf: string) {
        super(name);
        this.cpf = cpf;
    }

    deposit = (value: number): void => {
        if(!this.validate()) {
            return console.log('Account is not active')
        }
        const newValue: number = this.getBalance() + value + 10;
        this.setBalance(newValue);
        console.log(`Deposit of ${value} done. Current balance: ${this.getBalance()}`)
    }

    getCpf = (): string => this.cpf;
}
