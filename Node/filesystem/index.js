//modules
//1 userdefined
//2 inbuilt 
//3 third party modules
// setTimeout(()=>{
// clg("adfar")},2000);

// function add(a,b) {
//     console.log(a+b);
//     return 3;
// }
// var x = add(3,4)
// console.log(x)
// var x = setTimeout(()=>{
//     console.log("dvghfsg")
// },2000)
// console.log(typeof x)
var fs = require("fs");
console.log("Adfar")
var data  = fs.readFileSync("./adfar.txt","utf-8")
console.log(data)
console.log("Rasheed")
// var data  = fs.readFileSync("./adfar.txt","utf-8");
// fs.writeFileSync("output.txt","let us begin")
// fs.appendFileSync("./output.txt"," We have started the Node js backend");
// fs.unlinkSync("./output.txt")
// console.log(data)