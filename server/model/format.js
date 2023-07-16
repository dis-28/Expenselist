const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
    ExpenseTitle: String,
    ExpenseAmount: Number,
    ExpenseDate: Date
})

const Expense = mongoose.model('Expense', expenseSchema);

module.exports = Expense;