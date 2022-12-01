import React from "react"
import Card from "./atoms/Card"
 import Fade from "react-reveal/Fade"
import { useState} from 'react'
import data from "../mydata"
import '../styles/work.scss';
import '../styles/card.scss';
// import Filter from "./Filter";
import '../styles/filter.scss';
import { motion } from 'framer-motion';

const Work = () => {

  const[items , setItems] = useState(data.projects)
  const filterItem = (categItem) => {
    const updatedItems = data.projects.filter((curElem) => {
        return curElem.category.includes(categItem);
    })
    setItems(updatedItems)
  }

 
  return (
    <div className="section" id="work">
      <div className="container">
        <div className="work-wrapper">
           <Fade bottom> 
            <h1>Work</h1>
            <div className='filter-container'>
            <button className ='btn' onClick={() => setItems(data.projects)}>All</button>
            &nbsp;&nbsp; 
            <button className ='btn' onClick={() => filterItem('JS')}>JS</button>
            &nbsp;&nbsp;
            <button className ='btn' onClick={() => filterItem('ReactJS')}>ReactJS</button>
            </div>
          </Fade>

          <motion.div 
          layout
          animate ={{opacity:1 }}
          initial={{opacity: 0 }}
          exit={{opacity: 0 }}
           className="grid">
             <Fade bottom cascade>
              {items.map((proect, index) => (
                
                <Card
                  key={index}
                  heading={proect.title}
                  paragraph={proect.para}
                  imgUrl={proect.imageSrc}
                  projectLink={proect.url}
                  githubLink ={proect.githuburl}
                ></Card>
              ))}
             </Fade> 
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Work
