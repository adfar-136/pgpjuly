import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Contact() {
  let navigate = useNavigate()
  return (
    <div>
        <h1>Contact coomponent</h1>
        <button onClick={()=>navigate(-1)}>Click</button>
    </div>
  )
}
