import React, { createContext, useContext, useState } from 'react'
import Comp1 from './context/Comp1'
import { coloContext } from './context/Colorprovider'
let myContext = createContext()
export default function App() {
  const [count,setCount] = useState(0)
  const data = useContext(coloContext)
  console.log(data)
  return (
    <div>
      <myContext.Provider value={{count,setCount}}>
        <Comp1/>
      </myContext.Provider>
    </div>
  )
}

export {myContext}