import React from 'react'
import Blog from './components/Blog'
import { About } from './components/About'

function App() {
  return (
    <div>
      <Blog>
        <div>
          <h1>I am an children article</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis molestias cum quis repellat quam tenetur iste suscipit delectus, voluptates porro!</p>
        </div>
      </Blog>
      <About fname="ADfar" lname="rasheed"/>
      <About fname="rrr" lname="yyy"/>
      <About fname="ttt" lname="uuu"/>
    </div>
  )
}

export default App