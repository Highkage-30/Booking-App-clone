import express from "express";
import hotel from "../models/hotel.js";


//This function is used when you want to create a new router object in your program to handle requests. 
const router=express.Router();


//Create using async function as creating schema may take time
router.post("/",async(req,res)=>{
    
    const newHotel=new hotel(req.body)

    try {
        const savedHotel=await newHotel.save()
        res.status(200).json(savedHotel)

    } catch (error) {
        res.status(500).json(error)
    }
}) 
export default router;