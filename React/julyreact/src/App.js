import React from 'react'
import { useState } from 'react'

export default function App() {
  const [data,setData] =useState({
    name:'Name',
    email:"email",
    pass:"password"
  })

  const [condition,setCondition] =useState(false)
  function handleSubmit(e){
    e.preventDefault()
    setCondition(true)
    // setUserName("")
    // setPass("")
  }
  return (
    <div>
      <h1>Hello, world!</h1>
     
      <form onSubmit={handleSubmit}>
        <label>UserName : </label>
        <input type="text" value={data.name} 
        onChange={(e)=>setData((prev)=>({...prev,name:e.target.value}))}/> <br />
        <label>Email : </label>
        <input type="email" 
        value={data.email} 
        onChange={(e)=>setData((prev)=>({...prev,email:e.target.value}))}/> <br />
        <label>Password : </label>
        <input type="password" 
        value={data.pass} 
        onChange={(e)=>setData((prev)=>({...prev,pass:e.target.value}))}/> <br />
        <button type="submit">Login</button>
        {data.name}  p
        {data.pass}  p
        {data.email}  p
       {condition && (
         <h1>
         my name is {data.name}  and my password is:{data.pass}
       </h1>
       )}
      </form>
    </div>
  )
}
