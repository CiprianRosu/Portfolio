import React from "react"
import '../styles/navbar.scss';





const Navbar = () => {

  return (

    <div className="section">
      <div className="container">
        <div className="navbar-wrapper">
          <div
            role="button"
            
            className="name"
            tabIndex={0}
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