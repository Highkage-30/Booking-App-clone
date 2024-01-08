import  express from "express"; 
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelRoute from "./routes/hotel.js";
import roomsRoute from "./routes/rooms.js";
import cookieParser from "cookie-parser";
//craeting a variable for express framework
const app=express()

//to access .env file
dotenv.config()

//connect variable to connect to mongodb using mongoose.connect function and .env file
//async keyword allows the use of await keyword
//await will pause execution till we get value in return from mongoose.connect
const connect=async()=>{
    try {
        await mongoose.connect(process.env.MONGO)
        console.log("Connected to Mongodb")
    } catch (error) {
        throw error
    }
}

// mongoose.connection.on("Disconnected",()=>{
//     console.log("Mongodb Disconnected")
// })

// mongoose.connection.on("Connected",()=>{
//     console.log("Mongodb Connected")
// })



//Middleware-Middleware gets executed after the server receives the request and before the controller actions send the response.
app.use(cookieParser())
app.use(express.json())

app.use("/api/auth",authRoute)
app.use("/api/users",usersRoute)
app.use("/api/rooms",roomsRoute)
app.use("/api/hotel",hotelRoute)
//error handling middleware
app.use((err,req,res,next)=>{
    const errorMessage=err.message || "Something went wrong"
    const errorStatus=err.status || 500
    return res.status(errorStatus).json({
        success:false,
        status:errorStatus,
        message:errorMessage,
        stack:err.stack  

    })
})
//listen to the connections on the specified host and port.
app.listen(8000,()=>{
    connect()
    console.log("Connected to backend")
})

