import React from 'react'
import { Link } from 'react-router-dom'

function Portfolio() {
  return (
    <div 
    className="home-container"
    style={{ width: window.innerWidth, height: window.innerHeight }}
  >
        <Link to="/" style={{color: "white", textDecoration: "none", marginTop: "80px"}}>Home</Link>  
    </div>
  )
}

export default Portfolio