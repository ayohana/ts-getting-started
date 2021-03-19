/* Module 3: Implement interfaces in TypeScript
   Lab Start  */

/*  EXERCISE 1
    TODO: Declare the Loan interface. */

interface Loan {
    principle: number,
    interestRate: number
}


/*  TODO: Declare the ConventionalLoan interface. */

interface ConventionalLoan extends Loan {
    months: number
}

/*  TODO: Update the calculateInterestOnlyLoanPayment function. */

function calculateInterestOnlyLoanPayment(loanTerms: Loan): string {
    // Calculates the monthly payment of an interest only loan
    let interest: number;
    let payment: number;

    interest = loanTerms.interestRate / 1200; // Calculates the Monthly Interest Rate of the loan
    payment = loanTerms.principle * interest;
    
    return 'The interest only loan payment is ' + payment.toFixed(2);
}

/*  TODO: Update the calculateConventionalLoanPayment function. */

function calculateConventionalLoanPayment(loanTerms: ConventionalLoan): string {
    // Calculates the monthly payment of a conventional loan
    let interest: number; 
    let payment: number;

    interest = loanTerms.interestRate / 1200; // Calculates the Monthly Interest Rate of the loan
    payment = loanTerms.principle * interest / (1 - (Math.pow(1 / (1 + interest), loanTerms.months)));

    return 'The conventional loan payment is ' + payment.toFixed(2);
}

let myLoan: Loan = {
    principle: 30000,
    interestRate: 5
}

let anotherLoan: ConventionalLoan = {
    principle: 30000,
    interestRate: 5,
    months: 180
}

let interestOnlyPayment = calculateInterestOnlyLoanPayment(myLoan);
let conventionalPayment = calculateConventionalLoanPayment(anotherLoan);

console.log(interestOnlyPayment);     //* Returns "The interest only loan payment is 125.00" 
console.log(conventionalPayment);     //* Returns "The conventional loan payment is 237.24" 