const express = require('express');
const port = 8000;
const app = express();
// const body_parser = require('body-parser');
const db = require('./config/mongoose');
const dotenv = require('dotenv')
require('dotenv').config()


app.use(express.urlencoded({extended:true}))

app.use('/',require('./routes/index'))

app.listen(port,function(err){
    if(err){
        console.log(err)
    }
    console.log("Server is running on" ,`${port}`)
})