const mongoose=require('mongoose');

//item data scheme
const lostItemSchema=new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    type:{
        type:String,
        enum:['lost'],
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
const lostItem=mongoose.model('lostItem',lostItemSchema);
module.exports=lostItem;