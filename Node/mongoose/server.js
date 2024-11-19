var express = require("express");
var mongoose = require("mongoose")
mongoose.connect("mongodb+srv://adfarrasheed136:pgpjuly@cluster0.zhsrs.mongodb.net/testt").then(()=>{
    console.log("connected to mongodb")
})
const student = new mongoose.Schema({
    name:String,
    age:Number,
    email:String
})
const students = new mongoose.model("Student",student)
// const addData =async ()=>{
//   const student1 = new students({
//     name:"Adfar",
//     age:35,
//     email:"adfar@gmail.com"
//   })
//   await student1.save()
// // students.create({
// //     name:"Sanket",
// //     age:26,
// //     email:"sanket@gmail.com"
// // })
// }
// addData()
async function read(){
    var s1 = await students.findOne({name:"Adfar"})
    console.log(s1)
}
read()
var app = express()
app.listen(3000,()=>{
    console.log("Listening to port 3000")
})