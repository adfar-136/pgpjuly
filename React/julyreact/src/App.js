import React, {  useEffect, useState } from 'react'


export default function App() {

  const [count,setCount] = useState(0)
  useEffect(()=>{
    setInterval(()=>{
      setCount(count+1)
    },1000)
  })
  return (
    <div>
      <h1>{count}</h1>
      <h1>Hello, world!</h1>
      <p>This is a React app.</p>
      <button onClick={()=>setCount(count+1)}>++{count}</button>
      
  
      
    </div>
  )
}
