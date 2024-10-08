import React from 'react'
import { useParams } from 'react-router-dom'

export default function UserDetails() {
    let {id} = useParams()
   
  return (
    <div>
        <h1>User Details</h1>
        {id === "user1" && (
            <h1>My Name is Adfar Rasheed</h1>
        )}
        {id === "user2" && (
            <h1>My Name is Umar Khan</h1>
        )}
        {id === "user3" && (
            <h1>My Name is Anshul Kumar</h1>
        )}
    </div>
  )
}
