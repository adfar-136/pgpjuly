import React, { useState } from 'react'

function App() {
  const [condition,setCondition] = useState(true)
  function handleTheme(){
    setCondition(!condition)
  }
  return (
    <div style={{backgroundColor:condition?"black":"white",color:condition?"white":"black"}}>
      <h1>Hello world</h1>
      <button onClick={handleTheme}>{condition?"LIght":"Dark"} Mode</button>
    </div>
  )
}

export default App