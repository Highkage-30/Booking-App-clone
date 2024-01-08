import express from "express";
import { deleteUser, getAllUser, getUser, updateUser } from "../controllers/userController.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verify.js";

//This function is used when you want to create a new router object in your program to handle requests. 
const router=express.Router();
//authentication
// router.get("/checkauthentication",verifyToken,(req,res,next)=>{
//     res.send("You are logged in")
// })
// router.get("/checkuser/:id",verifyUser,(req,res,next)=>{
//     res.send("Hello user,You can delete your account")
// })
// router.get("/checkadmin/:id",verifyAdmin,(req,res,next)=>{
//     res.send("Hello admin,You can delete all accounts")
// })
// Update data , pass the id through url params
router.put("/:id",verifyUser,updateUser)
//Delete hotel
router.delete("/:id",verifyUser,deleteUser)
//get one
router.get("/:id",verifyUser,getUser)
// get all id
router.get("/",verifyAdmin,getAllUser)

export default router;