const mongoose=require('mongoose');
const mongoURL=  'mongodb://127.0.0.1:27017/khojmandi';//local data base server URL + datbase name

mongoose.connect(mongoURL);// connecting to datbase server

const db=mongoose.connection;//creating an object of the connection 

//event listener
db.on('connected',()=>{
    console.log('Connected to MongoDB server')
})
db.on('error',(err)=>{
    console.error('MongoDB connection error:',err);
})
db.on('disconnected',()=>{
    console.log('MongoDB disconnected');
})

module.exports=db;//exporting db