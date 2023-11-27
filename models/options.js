const mongoose = require('mongoose');

const options_schema = new mongoose.Schema({
    options:{
        type:String,
        required:true
    },
    question_ref:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'questions'
    },
    vote:{
        type:Number,
        default:0
    }
},{
    timestamps:true,
    strict:false
})

const Options = mongoose.model('Options',options_schema)

module.exports=Options;