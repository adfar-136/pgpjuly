// // var a= [1,2,3,4,5,6,4]
// // // console.log(a)
// // // var arr = [1,"Adfar",98,true]
// // // console.log(arr[1])
// // var marr = [
// //     [1,2,3],
// //     [4,5,6],
// //     [7,8,9]
// // ]
// // console.log(marr[2][1])
// // console.log(a.length)

// var arr = [3,4,5,3,5]
// var a = arr.push("helo")
// console.log(a)
// console.log(arr)
// // arr.push(100,23,"Adfar",true)
// // console.log(arr)

// var arr = [12,33,4,3,2]
// console.log(arr.pop())
// var s1 = arr.slice(3)
// // var s1 = arr.slice(1,7)
// console.log(s1)
// console.log(arr)
// var arr = [2,3,4,5,6,7,8,9]
// var x=arr.splice(2,0,"adfar","x","ee","tt")
// console.log(x)
// // arr.splice(2,0,"adfar","x","ee","tt")
// // arr.splice(5)
// console.log(arr)

// var arr = [2,3,4,5,6,7]
// var a = arr.map(function(item){
//    return item %2 === 0
// })
// var b  = arr.map((item,index)=>{
//   return item*index
// })
// // var c = arr.map((x,y)=>x*y)
// console.log(a)
// // console.log(c)

// var arr = [23,43,23,23,434,6,6,7,5,6]
// var even = arr.filter((item,index)=>{
//     return item===index
// })
// console.log(even)

// var arr = [3,4,5,3,2,4]
// var a = arr.reduce((total,item,index)=>{
//       return item+total
// },10)
// console.log(a)

// var arr = [23,2,1,43,2,3]
// var sum =0 ;
// for(let i=0;i<arr.length;i++){
//     sum = sum + arr[i]
// }
// console.log(sum)
// var arr = [23,2,1,43,2,3]
// var a = arr.some((x,i)=>{
//     return x>5
// })
// var b = arr.every((x,i)=>{
//     return x>-2
// })
// console.log(a,b)
// var arr = [100,250,16,31,19,42,50]
// var a = arr.sort((a,b)=>{
//    return b-a
// })
// console.log(a)
// var arr2 = [42,52,55,43]
// arr2.sort()
// console.log(arr2)
// var arr=[1,2,3,4,3,2,3]
// let mul =1;
// for (let i of arr) {
//     mul=mul*i
// }
// console.log(mul)
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i])
// }
var arr =[2,4,1,6,55,88,99]
let a = arr.findIndex((item,index)=>{
   return item >55
})
console.log(a)