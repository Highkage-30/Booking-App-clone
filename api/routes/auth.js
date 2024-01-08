import express from "express";


//This function is used when you want to create a new router object in your program to handle requests. 
const router=express.Router();

router.get("/",(req,res)=>{
    res.send("Hello this is auth endpoint")
})
 export default router;