import React from 'react'

function Blog({children}) {
  return (
    <div>

        <h1>I am a article</h1>
        {children}
    </div>
  )
}

export default Blog