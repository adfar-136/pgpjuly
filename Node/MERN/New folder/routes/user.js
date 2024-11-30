const express = require("express")
const router = express.Router()
const UserModel = require("../models/userSchema")
const bcrypt = require("bcrypt")
const jwt  = require("jsonwebtoken")
router.post("/register",async(req,res)=>{
    const {username,email,password} = req.body;
    const user = await UserModel.findOne({email})
    if(user){
        return res.status(400).json({message:"Email already exists"})
    }
    const hashedPass = await bcrypt.hash(password,10)
    const newUser = new UserModel({
        username,
        email,
        password:hashedPass
    })
    await newUser.save()
    return res.json({status:true,message:"User Created"})
})
router.post("/login",async(req,res)=>{
    const {email,password} = req.body;
    const user = await UserModel.findOne({email})
    if(!user){
        return res.status(400).json({message:"User not found"})
    }
    const validPassword = await bcrypt.compare(password,user.password)
    if(!validPassword){
        return res.json({message:"password is Incorrect"})
    }
    const token = jwt.sign({email:user.email},"secret",{expiresIn:"4h"});
    res.cookie("token",token)
    return res.json({status :true, message:"Login successful", token:token})
})
var verifyUser=async (req,res,next)=>{
  try {
    const token = req.cookies.token;
    if(!token){
        return res.json({status:false,message:"Auth Failed"})
    }
    const decoded = await jwt.verify(token,"secret")
    req.user = decoded;
    next()
  } catch (error) {
    
  }
}
router.get("/profile",verifyUser,(req,res)=>{
    console.log(req.user)
    res.json({message:"Profile"})

    
})
router.get("/dashboard",verifyUser,(req,res)=>{
    res.json("hello")
})
router.post("/logout",(req,res)=>{
  res.clearCookie("token")
  res.json("logged out successfully")
})
module.exports = router














//client                                                        //server
//1.login page .email and password=>login button                //hey i have received your credentials,confirm
                                                     //hey you are authenticated=> token ="ajkgdghhasdg728364763278wdhus"
// token = stored

//profile + token  
//dashbopard //admin //hsdgvf                                        //who you are, requests , keep token attached