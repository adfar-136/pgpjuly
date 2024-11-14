var http = require("http")
var fs = require("fs")
var server = http.createServer((req,res)=>{
    let file = fs.readFileSync("./index.html","utf-8")
     if(req.url === "/"){
        res.write("<h1>ADfar RAsheed</h1>")
        res.write("Homepage");
        res.end()

     } else if(req.url === "/about"){
        res.write("<h1>About Page</h1>");
        res.end()

     }else if(req.url==="/contact"){
        res.end(file)
     }
});
server.listen(8000,()=>{
    console.log("server is running on port 8000");
})