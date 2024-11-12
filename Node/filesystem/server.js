var http = require("http")
http.createServer((req,res)=>{
    res.write("Adfar Sir is best")
    res.end()
}).listen(4000,()=>{
    console.log("Server is running on port 4000")
})