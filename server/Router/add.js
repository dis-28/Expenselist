

const express = require('express');
const router = express.Router();
const bodyParser = require("body-parser");
const Expense = require('../model/format');


router.get('/', (req, res) => {
    res.send('hello from router');
})


router.post('/new', (req, res) => {

    const { ExpenseTitle, ExpenseAmount, ExpenseDate } = req.body;

    const bill = new Expense({ ExpenseTitle, ExpenseAmount, ExpenseDate });



    bill.save().then((data) => {
        res.status(201).json({ message: "bill added" });
    })
        .catch((error) => {
            res.status(500).json({ error: "Failed to add" });
        })
})
module.exports = router;