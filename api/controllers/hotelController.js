import Hotel from "../models/hotels.js";

//Create Hotel
export const createHotel=async(req,res,next)=>{
    const newHotel=new Hotel(req.body)

    try {
        const savedHotel=await newHotel.save()
        res.status(200).json(savedHotel)

    } catch (error) {
        next(error)
    }
}
//Update
export const updateHotel=async(req,res,next)=>{
    try {
        const updateHotel = await Hotel.findByIdAndUpdate(req.params.id,
            {$set: req.body},
            {new:true})
        res.status(200).json(updateHotel);
    } catch (error) {
        next(error)
    }
}

// delete 
export const deleteHotel=async(req,res,next)=>{
    try {
        await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json("Hotel is deleted")
    } catch (error) {
        next(error)
    }
}
//get
export const getHotel=async(req,res,next)=>{
    try {
        const hotel=await Hotel.findById(req.params.id)
        res.status(200).json(hotel)
    } catch (error) {
        next(error)
    }
}
//getall
export const getAllHotel=async(req,res,next)=>{
    // const failed =true
    // if (failed) return next(createError(401,"Your are not authenticated"))
    try {
        const hotels=await Hotel.find()
        res.status(200).json(hotels)
    } catch (error) {
        next(error)
    }
}