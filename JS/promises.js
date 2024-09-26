
console.log("1")
var promise = new Promise((resolve,reject)=>{
   var a = 1;
   console.log("hey")
   if(a>10){
    resolve("Data Resolved")
   } else {
    reject("Data Rejected")
   }
})
promise.then((result)=>{
  console.log(result)
}).catch((error)=>{
  console.log(error,"error")
})
console.log("3")
// promise.then((x)=>{
//     console.log(x)
// },(a)=>{
//      console.log(a)
// })