import express from "express";
import Hotel from "../models/hotels.js";
import { createError } from "../utils/error.js";
import { createHotel, deleteHotel, getAllHotel, getHotel, updateHotel } from "../controllers/hotelController.js";

//This function is used when you want to create a new router object in your program to handle requests. 
const router=express.Router();

//Create using async function as creating schema may take time
router.post("/",createHotel) 
// Update data , pass the id through url params
router.put("/:id",updateHotel)
//Delete hotel
router.delete("/:id",deleteHotel)
//get one
router.get("/:id",getHotel)
// get all id
router.get("/",getAllHotel)

export default router;