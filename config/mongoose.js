const mongoose = require('mongoose');
const dotenv = require('dotenv')
require('dotenv').config()
mongoose.connect(process.env.mongo_url);

const db = mongoose.connection

db.on('error',console.error.bind(console,"error in connection"));

db.once('open',function(){
    console.log("connected to data base")
})

module.exports = db;