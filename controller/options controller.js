const options_model = require('../models/options');
const questions_list = require('../models/questions');
const { options } = require('../routes');


module.exports.options_create = async function(req,res){
    questions_list.findById(req.params.id)
    .then((data)=>{
        options_model.create({
            options:req.body.options
        })
        .then((option)=>{
            data.options_ref.push(option)
            data.save()
            return res.json(200,{
                question:data
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    })
}

module.exports.options_delete = async function(req,res){
    try{
        const option = await options_model.findByIdAndDelete(req.params.id)
        return res.json(200,{
            deleted_option:option
        })
    }
    catch(err){
        console.log(err)
    }
}

module.exports.add_vote =async function(req,res){
    const option = await options_model.findById(req.params.id);
    const vote = {vote:option.vote+=1}
    await options_model.findByIdAndUpdate(req.params.id,vote)
    return res.json(200,{
        message:"vote added successfully"
    })
}