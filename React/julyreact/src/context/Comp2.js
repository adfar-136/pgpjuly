import React, { useContext } from 'react'
import Comp3 from './Comp3'
import { myContext } from '../App'
export default function Comp2() {
    let {count,setCount} = useContext(myContext)
  return (
    <div>
        <h1>comp2 count:{count}</h1>
        <Comp3/>
    </div>
  )
}
