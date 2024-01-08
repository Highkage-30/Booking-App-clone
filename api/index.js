import  express from "express"; 
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./routes/auth.js";
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
app.use("/api/auth",router)
app.use("/api/users",router)
app.use("/api/rooms",router)
app.use("/api/hotel",router)

//listen to the connections on the specified host and port.
app.listen(5000,()=>{
    connect()
    console.log("Connected to backend")
})

