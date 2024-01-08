import express from "express";
import Hotel from "../models/hotels.js";


//This function is used when you want to create a new router object in your program to handle requests. 
const router=express.Router();


//Create using async function as creating schema may take time
router.post("/",async(req,res)=>{
    
    const newHotel=new Hotel(req.body)

    try {
        const savedHotel=await newHotel.save()
        res.status(200).json(savedHotel)

    } catch (error) {
        res.status(500).json(error)
    }
}) 
// Update data , pass the id through url params
router.put("/:id",async (req,res)=>{
    try {
        const updateHotel = await Hotel.findByIdAndUpdate(req.params.id,
            {$set: req.body},
            {new:true})
        res.status(200).json(updateHotel);
    } catch (error) {
        res.status(500).json(error)
    }
})
//Delete hotel
router.delete("/:id",async (req,res)=>{
    try {
        await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json("Hotel is deleted")
    } catch (error) {
        res.status(500).json(error)
    }
})
//get one
router.get("/:id",async(req,res)=>{
    try {
        const hotel=await Hotel.findById(req.params.id)
        res.status(200).json(hotel)
    } catch (error) {
        res.status(500).json(error)
    }
})

// get all id
router.get("/",async(req,res)=>{
    try {
        const hotels=await Hotel.find()
        res.status(200).json(hotels)
    } catch (error) {
        res.status(500).json(error)
    }
})
export default router;