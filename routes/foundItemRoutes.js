const express=require('express');
const router=express.Router();
const foundItem=require('../models/foundItem');
const multer=require('multer');
const path=require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(`./components/uploads/`))
    },
    filename: function (req, file, cb) {
      const fileName=`${Date.now()}-${file.originalname}`;
      cb(null,fileName);
    }
  });
  
  const upload = multer({ storage: storage })


router.get('/',async(req,res)=>{
    const allItems= await foundItem.find().populate('postedby');
    return res.render('found',{user: req.user, allFoundItems: allItems, moment: require('moment')});
})


router.post('/', upload.single('itemimage'), async (req, res) => {
    console.log("founditem posted")
    const { name, option, description, location } = req.body;
    try {
      const newItem = await foundItem.create({
        name,
        option,
        description,
        location,
        postedby: req.user._id,
        imgPath: `/uploads/${req.file.filename}`,
      });
      return res.redirect('/found');
    } catch (err) {
      console.error('Error creating found item:', err);
      // Handle the error response here, e.g., res.status(500).send('Internal Server Error');
      return res.status(500).send('Internal Server Error');
    }
  });



module.exports=router;