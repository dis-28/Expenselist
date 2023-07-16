const mongoose = require('mongoose');
const dotenv = require('dotenv');
const express = require('express');
const cors = require("cors");

const app = express();
app.use(cors());

dotenv.config({ path: './config.env' });

const PORT = process.env.PORT;
const Expense = require('./model/format');
require('./DB/conn');

app.use(express.json());

const middleware = (req, res, next) => {
    next();
}
app.use(require('./Router/add'));
app.use(require('./Router/get'));

app.get('/', middleware, (req, res) => {
    res.send('hello from landing page');
})
app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
})