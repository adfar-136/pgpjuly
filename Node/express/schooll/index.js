const express = require("express")
const app = express()
var studentArray = require("./initialData")
app.use(express.json())
app.get("/api/student",(req,res)=>{
    res.send(studentArray)
})
app.get("/api/student/:id",(req,res)=>{
    let id = req.params.id;
    if(!isNaN(id)){
        let student = studentArray.find((item)=>{
            return (item.id === parseInt(id))
        })
        if(student === undefined){
            res.status(404).send("Student not found")
        }
       res.send(student)
    } else  {
        res.status(400).send("Invalid id")
    }
})
app.post("/api/student",(req,res)=>{
    let reqkeys = Object.keys(req.body)
    if(reqkeys.find((item)=>{return item === "name"}) && reqkeys.find((item)=>{return item === "currentClass"})
    && reqkeys.find((item)=>{return item === "division"})){
        let name=req.body.name;
        let currentClass = req.body.currentClass;
        let division=req.body.division;
        let student = {
            id:studentArray.length+1,
            name:name,
            currentClass:currentClass,
            division:division
        }
        studentArray.push(student)
        res.send(studentArray)
}
res.status(404).send("key is missing")

    // if(reqkeys.includes("name") && reqkeys.includes("currentClass") 
    //     && reqkeys.includes("division")){
    //         let name=req.body.name;
    //         let currentClass = req.body.currentClass;
    //         let division=req.body.division;
    //         let student = {
    //             id:studentArray.length+1,
    //             name:name,
    //             currentClass:currentClass,
    //             division:division
    //         }
    //         studentArray.push(student)
    //         res.send(studentArray)
    // }
})
app.put("/api/student/:id",(req,res)=>{
        let id = req.params.id;
        if(!isNaN(id)){
            id = parseInt(id);
            let oldObj = studentArray.find((item)=>{
                return (item.id === id)
            })
            if(oldObj === undefined){
                res.status(404).send("Student not found")
            } else {
                let newObj =  req.body;
                let student ={...oldObj,...newObj}
                let index = studentArray.indexOf(oldObj)
                studentArray[index] = student
                // studentArray.splice(index,1)
                // studentArray.push(student);
                res.send(studentArray)
            }
        }
})
app.delete("/api/student/:id",(req,res)=>{
    let id = req.params.id;
        if(!isNaN(id)){
            id = parseInt(id);
            let oldObj = studentArray.find((item)=>{
                return (item.id === id)
            })
            if(oldObj === undefined){
                res.status(404).send("Student not found")
            } else {
                let index = studentArray.indexOf(oldObj)
                studentArray.splice(index,1)
                res.send(studentArray)
            }
        }
})
app.listen(4000,()=>{
    console.log("server is running on port 4000")
})