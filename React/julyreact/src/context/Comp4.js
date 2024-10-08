import React, { useContext } from 'react'
import { myContext } from '../App'
export default function Comp4() {
    let {count,setCount} = useContext(myContext)
  return (
    <div>
      <h1>comp4 count : {count}</h1>
      <button onClick={()=>setCount(count+1)}>++++</button>
    </div>
  )
}
