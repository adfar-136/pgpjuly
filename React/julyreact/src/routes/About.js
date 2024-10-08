import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function About() {
  let navigate = useNavigate()
  function handleNavigate(){
     navigate("/contact")
  }
  return (
    <div>
        <h1>About Component</h1>
        <button onClick={handleNavigate}>Go To contact</button>
    </div>
  )
}
