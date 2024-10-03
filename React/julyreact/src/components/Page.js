import React, { useEffect, useState } from 'react'

export default function Page() {
    const [count,setCount] = useState(0)
    const [number,setNumber] = useState(100)
    useEffect(()=>{
      console.log("USeeffect being called")
    },[count])
  return (
    <div>
      <button onClick={()=>setNumber(number-1)}>--- {number}</button>
        <h1>Page Component</h1>
        <h1>Count : {count}</h1>
        <button onClick={()=>setCount(count+1)}>+++</button>
    </div>
  )
}
