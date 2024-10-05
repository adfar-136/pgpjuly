import React from 'react'
import { NavLink } from 'react-router-dom'
import "../app.css"
export default function Navbar() {
  return (
    <div>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>  
        <li><NavLink to="/blog">Blog</NavLink></li>
    </div>
  )
}
