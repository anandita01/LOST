const mongoose=require('mongoose');

//item data scheme
const foundItemSchema=new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    option:{
        type:String,
        enum:['found'],
        required:true
    },
    description:{
        type:String,
        required:true,
    },
    location:{
        type: String,
        required: true
    },
    imgPath:{
        type:String
    },
    postedby:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student"
    }
},{timestamps: true});

//creating item  model
const foundItem=mongoose.model('foundItem',foundItemSchema);
module.exports=foundItem;