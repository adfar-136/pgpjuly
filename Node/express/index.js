const express = require("express")
const app = express();
app.set("view engine","ejs");
app.get("/",(req,res)=>{
    res.render("index",{
        name:"Adfar RAsheed",
        age:35
    })
})
app.get("/about",(req,res)=>{
    res.render("about")
})
app.listen(4000,()=>{
    console.log("lisstening on port 4000")
})