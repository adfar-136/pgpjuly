async function greet(){
    return "Hello World"
}
var data = greet()

async function add(){
    console.log("1")
   var res = await  data
   console.log(res)
    console.log("2")
}
add()