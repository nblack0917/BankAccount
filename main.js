class BankAccount {
    constructor(accountNumber, owner, transactions) {
        this.accountNumber = accountNumber;
        this.owner = owner;
        this.transactions = []
    }
    balance() {
        let balance = 0;
        for(let trans of this.transactions) {
            balance += trans.amount
        }
        return balance.toFixed(2)
    }
    deposit(amt) {
        if (amt >= 0) {
            let deposit = new Transaction(amt)
            this.transactions.push(deposit)
        } else {
            console.log("Invalid deposit amount.")
        }
    }
    charge(amt, payee) {
        if (this.balance() - amt >= 0) {
            amt = -Math.abs(amt)
            let charge = new Transaction(amt, payee)
            this.transactions.push(charge)
        } else {
            console.log(`Charge denied! Invalid funds for charge.`)
        }

    }
}

class Transaction {
    constructor(amount, payee) {
        this.date = new Date();
        this.amount = amount;
        this.payee = payee;
    }
}

class SavingsAccount extends BankAccount {
    constructor(interestRate, accountNumber, owner, transactions) {
    super(accountNumber, owner, transactions);
    this.interestRate = interestRate;
    }
    withdraw(amt) {
        if (this.balance() - amt >= 0) {
            amt = -Math.abs(amt)
            let withdraw = new Transaction(amt)
            this.transactions.push(withdraw)
        } else {
            console.log(`Invalid funds for withdrawal.`)
        }
    }
    accrueInterest() {
        let bal = this.balance();
        console.log(`Your current balance is \$${bal}.`)
        let interestAccrued = bal * this.interestRate
        console.log(`You've accrued \$${interestAccrued.toFixed(2)} in interest.`)
        let interestBalance = new Transaction(interestAccrued)
        this.transactions.push(interestBalance)
        let newBal = this.balance();
        console.log(`Your new balance is \$${newBal} after interest.`)
    }

}

// const trans1 = new Transaction(245.43, "Jenny")
const account1 = new BankAccount(12345, "Nick")
const account2 = new BankAccount(12346, "Jenny")
const account3 = new SavingsAccount(0.2, 12347, "Nick")


account1.deposit(123.45)
account3.deposit(543.00)
account3.deposit(12.95)
account1.charge(43.25, "Jenny")
account2.deposit(43.25)
account1.charge(401.13, "David")
console.log(account1)
console.log(account2)
console.log(account3)
account3.accrueInterest()




