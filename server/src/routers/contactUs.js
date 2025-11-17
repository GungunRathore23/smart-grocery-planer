const express= require("express");
const router = express.Router();

router.get("/contactInfo",(req,res)=>{
     try{
       const contactInfo={
         Companyname :"aartiessss",
         contactNO : 9399143499,
         EMAILCOMPANY:"gungunrathore94@gmail.com",
       };
       res.status(200).json({
       status : 200,
      message: "contant route is working perfectly ✅",
      data: contactInfo,
       } );
     }
     catch(error){
        res.status(500).json({
      status: 500,
      error: error.message,
      message: "Internal Server Error ❌",
    });
     }
} );
module.exports=router;