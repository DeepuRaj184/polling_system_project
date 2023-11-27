const questions_list = require('../models/questions');
const options = require('../models/options');

module.exports.question_create= async function(req,res){
    console.log(req.body)
    try{
        const questions_sent = await questions_list.create(req.body);
        return res.json(200,{
            questions:questions_sent}) 
    }
    catch(err){
        return res.send(err)
    }
}

module.exports.question_view = async function(req,res){
    try{
        await questions_list.findById(req.params.id).populate('options_ref').exec().then((data)=>{
            return res.json(200,{question:data})
        })
    }
    catch(err){
        console.log(err)
    }
}

module.exports.question_delete = async function(req,res){
    try{
        const question = await questions_list.findByIdAndDelete(req.params.id)
        return res.json(200,{
            message:"Deleted Successfully"
        })
    }
    catch(err){
        console.log(err)
    }
}
