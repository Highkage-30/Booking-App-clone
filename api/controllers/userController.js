import User from "../models/users.js"

//Update
export const updateUser=async(req,res,next)=>{
    try {
        const updateUser = await User.findByIdAndUpdate(req.params.id,
            {$set: req.body},
            {new:true})
        res.status(200).json(updateUser);
    } catch (error) {
        next(error)
    }
}

// delete 
export const deleteUser=async(req,res,next)=>{
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("User is deleted")
    } catch (error) {
        next(error)
    }
}
//get
export const getUser=async(req,res,next)=>{
    try {
        const User=await User.findById(req.params.id)
        res.status(200).json(hotel)
    } catch (error) {
        next(error)
    }
}
//getall
export const getAllUser=async(req,res,next)=>{
    // const failed =true
    // if (failed) return next(createError(401,"Your are notx authenticated"))
    try {
        const users=await User.find()
        res.status(200).json(users)
    } catch (error) {
        next(error)
    }
}