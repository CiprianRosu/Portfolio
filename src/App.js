import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Work from './components/Work'
import About from './components/About'
import Skills from './components/Skills'
import Footer from './components/Footer'
import useLocalStorage from 'use-local-storage';

const App = () => {
  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)
  }
  console.log(window.location)
  return (
    <div className="app" data-theme={theme}>
          <i onClick={switchTheme} className='fas fa-toggle-on'></i>
    <Navbar/>
    <Header/>
    <Work/> 
    <About/>
    <Skills/>
    <Footer/>
    </div>
  )
}

export default App