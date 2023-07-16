
const mongoose = require('mongoose');

const DB = process.env.DATABASE;


mongoose.connect(DB)
    .then((data) => {
        console.log('connection suc');
    })
    .catch((error) => {
        console.log('error');
    })