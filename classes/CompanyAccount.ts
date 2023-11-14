import { DioAccount } from './DioAccount';

export class CompanyAccount extends DioAccount {
    constructor(name: string) {
        super(name);
    }

    getLoan(loanValue: number): void {
        if (!this.validate()) {
            return console.log('Account is not active')
        }
        this.deposit(loanValue);
        console.log('Loan granted');
    }
}
