"use strict";
// To view output in the console, run the following CLI commands:
// tsc --module commonjs module07_main.ts
// node module07_main.js
exports.__esModule = true;
/*  Module 7: Working with external libraries
    Lab Start */
/*  TODO Add the import statement. */
var LoanPrograms = require("./module07_loan-programs.js");
/*  TODO Update the function calls. */
var interestOnlyPayment = LoanPrograms.calculateInterestOnlyLoanPayment({ principle: 30000, interestRate: 5 });
var conventionalLoanPayment = LoanPrograms.calculateConventionalLoanPayment({ principle: 30000, interestRate: 5, months: 180 });
console.log(interestOnlyPayment); //* Returns "The interest only loan payment is 125.00" 
console.log(conventionalLoanPayment); //* Returns "The conventional loan payment is 237.24"
