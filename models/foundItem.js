const mongoose=require('mongoose');

//item data scheme
const foundItemSchema=new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    type:{
        type:String,
        enum:['found'],
        required:true
    },
    description:{
        type:String,
        required:true,
        unique:true
    },
    location:{
        type: String,
        required: true
    },
    imgPath:{
        type:String
    }
})

//creating item  model
const foundItem=mongoose.model('foundItem',foundItemSchema);
module.exports=foundItem;