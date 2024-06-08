const express=require('express');
const db = require('./db');
const path=require('path');


const app=express();



//conecting to view engine for server side rendering
app.set("view engine","ejs");
app.set("views",path.resolve("./views"))

app.use('/components', express.static(path.join(__dirname, 'components')));

//body parser
app.use(express.json());
app.use(express.urlencoded({extended:false}));



//import routers
const studentRoutes=require('./routes/studentRoutes');
const lostItemRoutes=require('./routes/lostItemRoutes');
const foundItemRoutes=require('./routes/foundItemRoutes');


//use routers
app.use('/student',studentRoutes);
app.use('/lost',lostItemRoutes);
app.use('/found',foundItemRoutes);

app.get('/postitem', (req, res) => {
   return res.render('postitem')
});
app.use('/',async(req,res)=>{
   return res.render("home")
});


const PORT=3002;

app.listen(PORT,()=>{
    console.log('listening to port 3002');
})