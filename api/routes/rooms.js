import express from "express";
import { verifyAdmin } from "../utils/verify.js";
import { createRoom, deleteRoom, getAllRoom, getRoom, updateRoom, updateRoomAvailability } from "../controllers/roomController.js";

//This function is used when you want to create a new router object in your program to handle requests. 
const router=express.Router();

//Create using async function as creating schema may take time
router.post("/:hotelid", verifyAdmin, createRoom);

//UPDATE
router.put("/availability/:id", updateRoomAvailability);
router.put("/:id", verifyAdmin, updateRoom);
//DELETE
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);
//GET

router.get("/:id", getRoom);
//GET ALL

router.get("/", getAllRoom);
export default router;