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
            <button>Work</button>
            <button>About</button>
            <button>Contact</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar