const express=require('express');
const router=express.Router();
const foundItem=require('../models/foundItem');
const multer=require('multer');

router.post('/',(req,res)=>{

})
router.get('/',(req,res)=>{
    res.render('found');
})

module.exports=router;