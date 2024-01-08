import User from "../models/users.js"
import bcrypt from "bcryptjs"
import { createError } from "../utils/error.js"
import jwt from "jsonwebtoken";
export const Register=async(req,res,next)=>{
    try {
        //bcrypt to encrypt the password
        const salt=bcrypt.genSaltSync(10)
        const hash =bcrypt.hashSync(req.body.password,salt)
        const newUser=new User({
            username:req.body.username,
            email:req.body.email,
            password:hash
        })
        await newUser.save()
        res.status(200).send("User has been created")
    } catch (error) {
        next(error)
    }
}
export const Login=async(req,res,next)=>{
    try {

        const user=await User.findOne({username:req.body.username})
        if(!user) return next(createError(404,"User not found"))

        const isPasswordCorrect=await bcrypt.compare(req.body.password,user.password)
        if(!isPasswordCorrect) return next(createError(404,"Password not correct"))

        const token=jwt.sign({id:user._id,isAdmin:user.isAdmin},process.env.JWT)

        const {password,isAdmin,...otherDetails}=user._doc;    
        //jwt token stored in cookies
        res.cookie("access_token",token,{
            httpOnly:true,
        }).status(200).json({...otherDetails});
    } catch (error) {
        next(error)
    }
}