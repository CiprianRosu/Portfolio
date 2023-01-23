import React from "react"
import '../styles/navbar.scss';
import useLocalStorage from 'use-local-storage';
import '../index.css';





function Navbar() {



  return (
    
    <div className="section">
      <div className="container">
        <div className="navbar-wrapper">
          <div
            className="name"
          >
            ciprianrosu.
          </div>
          
          <div className="links-wrapper">
              <li><a href="#work" >Work</a></li>
              <li><a href="#about" >About</a></li>
              <li><a href="#contact" >Contact</a></li>
      
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Navbar
