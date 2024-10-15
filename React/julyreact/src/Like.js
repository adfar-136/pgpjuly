import React from 'react'
import { useSelector } from 'react-redux'

export default function Like() {
    let count = useSelector((state)=>state.counter.count)
  return (
    <div>
        <h1>{count}</h1>
    </div>
  )
}
