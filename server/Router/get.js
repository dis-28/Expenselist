

const express = require('express');
const router = express.Router();
const bodyParser = require("body-parser");
const Expense = require('../model/format');




router.get('/new', async (req, res) => {

    let expenses = await Expense.find({})
    res.json(expenses);
    console.log(expenses);
})
module.exports = router;