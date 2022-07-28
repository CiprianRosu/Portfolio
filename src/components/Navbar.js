import React from "react"
import '../styles/navbar.scss';
import useLocalStorage from 'use-local-storage';
import '../index.css';





function Navbar() {

  // const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')

  // const switchTheme = () => {
  //   const newTheme = theme === 'light' ? 'dark' : 'light';
  //   setTheme(newTheme)
  // }

  return (
    
    <div className="section">
      <div className="container">
        <div className="navbar-wrapper">
          <div
            className="name"
          >
            ciprianrosu.
          </div>
          {/* <div className='theme-toggle'> */}
          {/* <h2>Light Theme</h2> */}
          {/* <i onClick={switchTheme} className='fas fa-toggle-on'></i> */}
        {/* </div> */}
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