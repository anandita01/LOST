const mongoose=require('mongoose');

//item data scheme
const lostItemSchema=new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    option:{
        type:String,
        enum:['lost'],
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
const lostItem=mongoose.model('lostItem',lostItemSchema);
module.exports=lostItem;