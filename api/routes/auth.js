import express from "express";
import { Login, Register } from "../controllers/authController.js";


//This function is used when you want to create a new router object in your program to handle requests. 
const router=express.Router();

router.post("/register",Register)
router.post("/login",Login)
export default router;