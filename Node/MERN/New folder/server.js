const express = require("express")
const mongoose = require("mongoose")
const app = express()
const cookieParser = require("cookie-parser")
const router = require("./routes/user")
app.use(express.json())
app.use(cookieParser())
mongoose.connect("mongodb://localhost:27017/authorization").then(()=>{
    console.log("connected to mognodb")
})
app.use("/auth",router)
app.listen(3000,()=>{
    console.log("listening to port 3000")
})