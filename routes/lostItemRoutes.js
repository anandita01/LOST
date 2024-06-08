const express=require('express');
const router=express.Router();
const lostItem=require('../models/lostItem');
const multer=require('multer');

router.post('/',(req,res)=>{

})
router.get('/',(req,res)=>{
    return res.render('lost')
})

module.exports=router;