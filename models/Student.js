const mongoose=require('mongoose');

//student data schema
const studentSchema=new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    mobile_no:{
        type: String,
        required: true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,

    }
})

//creating student model
const Student=mongoose.model('Student',studentSchema);
module.exports=Student;