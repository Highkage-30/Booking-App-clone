import express from "express";
import { createHotel, deleteHotel, getAllHotel, getHotel, updateHotel } from "../controllers/hotelController.js";
import { verifyAdmin } from "../utils/verify.js";

//This function is used when you want to create a new router object in your program to handle requests. 
const router=express.Router();

//Create using async function as creating schema may take time
router.post("/",verifyAdmin,createHotel) 
// Update data , pass the id through url params
router.put("/:id",verifyAdmin,updateHotel)
//Delete hotel
router.delete("/:id",verifyAdmin,deleteHotel)
//get one
router.get("/:id",getHotel)
// get all id
router.get("/",getAllHotel)

export default router;