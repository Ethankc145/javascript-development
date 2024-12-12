//Sixth Task Class and Object
class BankAccount{
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber
        this.balance = balance;
    }

    deposit(amount) {
        if (amount > 0) {
            console.log(`Deposited: $${amount}. New Balance: $${this.balance}`);
        } else {
            console.log("Deposit amount must be postive");
        }
    }

    withdraw(amount) {
        if ( amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrew: $${amount}. Remaining Balance: $${this.balance}`);
        } else if (amount > this.balance) {
            console.log("Insufficient balance.");
        } else {
            console.log("Withdrawal amount must be positive.");
        }
    }
}

const account1 = new BankAccount("123456", 1000)
const account2 = new BankAccount("789012", 500)

account1.deposit(500)
account1.withdraw(300)
account1.withdraw(-100)
account2.deposit(200)
account2.withdraw(800)
account2.deposit(-900)