import React from 'react'
import { useParams } from 'react-router-dom'

export default function Adhaar() {
  let {id,adhaar} = useParams()
  return (
    <div>
      <h1>Adhaar Details</h1>
      {id==="123" && adhaar === "456" && (
        <h1>Adfar id = {id} and Adhaar = {adhaar}</h1>
      )}
    </div>
  )
}
