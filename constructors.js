// const user1 = {
//     firstName:"Adfar",
//     lastName:"Rasheed",
//     age: 27,
//     getAgeYear:function(){
//         return new Date().getFullYear() - this.age
//     }
// }
// const user2 = {
//     firstName:"Rohit",
//     lastName:"Kumar",
//     age: 22,
//     getAgeYear:function(){
//         return new Date().getFullYear() - this.age
//     }
// }
// function getAgeYear(){
//     return new Date().getFullYear() - this.age
// }
// function createUser(firstName,lastName,age){
//     const user ={
//          firstName,
//          lastName,
//          age,
//          getAgeYear:createUser.commonMethods.getAgeYear
//     }
//     return user
// }
// createUser.commonMethods = {
//     getAgeYear:function(){
//         return new Date().getFullYear() - this.age
//     },

// }

// const user1 = createUser("Adfar","rasheed",27)
// const user2 = createUser("Rohit","Kumar",22)

// function add(){
//     console.log(this)
// }

// function createUser(firstName,lastName,age){
   
//     console.log(this)
//     this.firstName=firstName;
//     this.lastName=lastName;
//     this.age=age;
// }
// createUser.prototype.getAgeYear=function(){
//     return new Date().getFullYear() - this.age
// }
// const user1 =new createUser("Adfar","Rashid",55)
// const user2 =new createUser("Kapil","Dahiya",23)

class createUser{
    constructor(a,b,c){
       console.log(a,b,c)
    }
    getAgeYear(){
        return new Date().getFullYear()
    }
}

const user1 = new createUser("Adfar","Rashid",55)
