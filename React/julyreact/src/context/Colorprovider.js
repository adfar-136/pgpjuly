import React, { createContext } from 'react'
let coloContext = createContext()
export default function Colorprovider({children}) {
  return (
    <div>
        <coloContext.Provider value={{name:"Adfar",age:"34"}}>
          {children}
        </coloContext.Provider>
    </div>
  )
}
export {coloContext}