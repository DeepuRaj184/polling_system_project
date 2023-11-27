const mongoose = require('mongoose');

const questions_schema = new mongoose.Schema({
    question:{
        type:String
    },
    options_ref:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Options'
    }]
},{
    timestamps:true
})

const questions = mongoose.model('questions',questions_schema)

module.exports=questions;