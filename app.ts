import { DioAccount } from './classes/DioAccount';
import { CompanyAccount } from './classes/CompanyAccount';
import { PersonAccount } from './classes/PersonAccount';

const companyAccount = new CompanyAccount('Company Inc.');
const personAccount = new PersonAccount('John Doe', '123.456.789-00');

companyAccount.getLoan(1000);
personAccount.deposit(2000);
