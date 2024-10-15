import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement } from './redux/action'
export default function Counterr() {
    const count =useSelector((state)=>state.counter.count)
    console.log(count)
    const dispatch = useDispatch()
  return (
    <div>
        <button onClick={()=>dispatch(increment())}>Increment</button>
        <h1>count : {count}</h1>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
    </div>
  )
}
