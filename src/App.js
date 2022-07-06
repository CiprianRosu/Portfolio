import React from 'react'
import Navbar from './components/Nabar'
import Header from './components/Header'
import Work from './components/Work'
import About from './components/About'
import Skills from './components/Skills'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
    <Navbar></Navbar>
    <Header></Header>
    <Work></Work>
    <About></About>
    <Skills></Skills>
    <Footer></Footer>
    </div>
  )
}

export default App