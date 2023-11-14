export abstract class DioAccount {
    private readonly name: string;
    private readonly accountNumber = Math.floor(Math.random() * 1000);
    private balance: number = 0;
    private status: boolean = true;

    constructor(name: string) {
        this.name = name;
    }

    getName = (): string => {
        return this.name;
    }

    deposit = (value: number): void => {
        if(!this.validate()) {
            return console.log('Account is not active')
        }
        this.balance += value;
        console.log(`Deposit of ${value} done. Current balance: ${this.balance}`)
    }

    withdraw = (value: number): void => {
        if(!this.validate()) {
            return console.log('Account is not active')
        }
        if (this.balance >= value) {
            this.balance -= value;
            console.log(`Withdraw of ${value} done. Current balance: ${this.balance}`)
        } else {
            console.log('Insufficient funds')
        }
    }

    validate = (): boolean => {
        if (this.status) {
            return true;
        }
        return false
    }

    getAccountNumber = (): number => {
        return this.accountNumber;
    }

    getBalance = (): number => {
        return this.balance;
    }

    setBalance = (value: number): void => {
        this.balance = value;
    }

}
