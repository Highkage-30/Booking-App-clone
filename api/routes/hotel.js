import express from "express";
import { countByCity, countbyType, createHotel, deleteHotel, getAllHotel, getHotel, updateHotel } from "../controllers/hotelController.js";
import { verifyAdmin } from "../utils/verify.js";

//This function is used when you want to create a new router object in your program to handle requests. 
const router=express.Router();

//Create using async function as creating schema may take time
router.post("/",verifyAdmin,createHotel) 
// Update data , pass the id through url params
router.put("/find/:id",verifyAdmin,updateHotel)
//Delete hotel
router.delete("/find/:id",verifyAdmin,deleteHotel)
//get one
router.get("/find/:id",getHotel)
// get all id
router.get("/",getAllHotel)
router.get("/countByCity",countByCity)
router.get("/countByType",countbyType)


export default router;