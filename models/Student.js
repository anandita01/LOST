const mongoose=require('mongoose');
const bcrypt=require('bcrypt');

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
    password:{
        type:String,
        required:true,

    }
})

//creating hash function that is done before dtae is saved
studentSchema.pre('save',async function(next){
    const student=this;

    //checking wether the password was alreaty modified
    if(!student.isModified('password')) return next();

    try{
        //hash password generation
        //genrate salt;
        const salt=await bcrypt.genSalt(10);

        //hash password
        const hashedPassword= await bcrypt.hash(student.password,salt);

        //override the plain password
        student.password=hashedPassword;

        next();

    }
    catch(err)
    {
        return next(err);
    }
})

studentSchema.methods.comparePassword=async function(candidatePassword)
{
   try{
    const isMatch=await bcrypt.compare(candidatePassword,this.password);
    return isMatch;
   } 
   catch(err){
    throw err;
   }
}
//creating student model
const Student=mongoose.model('Student',studentSchema);
module.exports=Student;