//Eighth Task Class and Object
class BankAccount {
    constructor(accountNumber, accountHolderName, balance = 0) {
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.balance = balance;
    }

    deposit(amount) {
        if (amount <= 0) {
            console.error("Deposist amount must be positive.");
        }
        this.balance += amount;
        console.log(`Deopsited ${amount}. New balance: ${this.balance}`);        
    }

    withdraw(amount) {
        if (amount <= 0) {
            console.error("Withdrawal amount must be positive");
            return;
        }
        if (amount > this.balance) {
            console.error("Insufficient funds.");
            return;
        }
        this.balance -= amount;
        console.log(`Withdrew ${amount}. New balance: ${this.balance}`);
    }   
    transfer(amount, recipentAccount) {
        if (amount <= 0) {
            console.error("Transfer amount must be positive.");
            return;
        }
        if (amount > this.balance) {
            console.error("Insufficient funds.");
            return;
        }
        this.withdraw(amount)
        recipentAccount.deposit(amount)
        console.log(`Transferred ${amount} to account ${recipentAccount.accountNumber}.`);
    }
}

const account1 = new BankAccount(111, "Ethan", 500)
const account2 = new BankAccount(122, "Ian", 400)

account1.deposit(200)
account1.withdraw(100)
account1.transfer(150, account2);
account1.withdraw(500)
account1.transfer(800, account2);

console.log(`Final balance of ${account1.accountHolderName}: ${account1.balance}`);
console.log(`Final balance of ${account2.accountHolderName}: ${account2.balance}`);
