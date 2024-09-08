// console.log("1")
// setTimeout(()=>{
//     console.log("Timer1")
// },10000)
// setTimeout(()=>{
//     console.log("Timer1")
// },10000)
// console.log("2")
// setInterval(()=>{
//     console.log("timer")
// },2000)
function fun1(callback){
    setTimeout(() => {
        console.log("Timer1");
        callback()
    },3000)
}
function fun2(callback){
    setTimeout(() => {
        console.log("Timer2");
        callback()
    },2000)
}
function fun3(callback){
    setTimeout(() => {
        console.log("Timer3");
        callback()
    },1000)
}
function fun4(callback){
    setTimeout(() => {
        console.log("Timer4");
        callback()
    },5000)
}
fun1(()=>{
    fun2(()=>{
        fun3(()=>{
            fun4(()=>{
                console.log("All timers are done")
            })
        })
    })
})

setTimeout(()=>{
    setTimeout(()=>{
        setTimeout(()=>{
            setTimeout(()=>{
                console.log("All timers are done")
            },1000)
        },2000)
    },3000)
},4000)