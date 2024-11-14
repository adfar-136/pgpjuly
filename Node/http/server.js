var http = require("http")
var path = require("path")
var fs = require("fs")
console.log(__dirname)
var server = http.createServer((req,res)=>{
    let filePath = path.join(__dirname,"public",req.url === "/"?"index.html" : req.url);
     let extName = path.extname(filePath)
     let contentType = 'text/html'
 let mimeTypes = {
    ".html": "text/html",
    ".js": "application/javascript",
    ".css":"text/css",
    ".jpg":"image/jpeg",
    ".png":"image/png",
 }
 contentType = mimeTypes[extName] || 'application/octet-stream'
 fs.readFile(filePath,(err,data)=>{
    if(err){
        // if(err.code === "ENOENT"){
        //     fs.readFile
        // }
        res.writeHead(404,{'Content-Type':'text/plain'})
        res.end("404 Not Found")
    } else{
      res.writeHead(200,{"Content-type":contentType});
      res.end(data,"utf-8");
    }
 })
})
server.listen(4000,()=>{
    console.log("server is running on port 4000")
})