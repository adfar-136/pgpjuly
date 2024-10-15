import React from 'react'
import Counterr from './Counterr'
import Like from './Like'
import { useDispatch, useSelector } from 'react-redux'
import { setBackgroundColor } from './redux/action'

export default function App() {
  let bgColor = useSelector((state)=>state.color.backgroundColor)
  let dispatch = useDispatch()
  return (
    <div style={{backgroundColor:bgColor}}>
      <button onClick={()=>dispatch(setBackgroundColor("black"))}>Black</button>
      <button onClick={()=>dispatch(setBackgroundColor("red"))}>RED</button>
      <button onClick={()=>dispatch(setBackgroundColor("gray"))}>Gray</button>
      <button onClick={()=>dispatch(setBackgroundColor("green"))}>Green</button>
      <button onClick={()=>dispatch(setBackgroundColor("pink"))}>Pink</button>
      <Counterr/>
      <Like/>
    </div>
  )
}
