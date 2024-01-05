const express=require('express');
const {logEvents}=require('../utility/logger.js')
const userRoute=express.Router();
 
userRoute.use((req,res,next)=>{
    const msg=`route :userRoute | req is of method: ${req.method} and url : ${req,originalurl}`;
    logEvents(msg,__filename);
    next();
});

userRoute.get('/',(req,res)=>{
   res.send("At user Home Page");
})

module.exports=userRoute;