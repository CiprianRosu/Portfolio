import React from "react"
import Card from "./atoms/Card"
 import Fade from "react-reveal/Fade"
import { useState} from 'react'
import data from "../mydata"
import '../styles/work.scss';
import '../styles/card.scss';
// import Filter from "./Filter";
import '../styles/filter.scss';

const Work = () => {

  const[items , setItems] = useState(data.projects)
  const filterItem = (categItem) => {
    const updatedItems = data.projects.filter((curElem) => {
        return curElem.category === categItem;
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
            <button onClick={() => setItems(data.projects)}>All</button> 
            <button onClick={() => filterItem('JS')}>JS</button>
            <button onClick={() => filterItem('ReactJS')}>React</button>
            </div>
             
        
        </Fade>

          <div className="grid">
            {/* <Fade bottom cascade> */}
              {items.map((proect, index) => (
                
                <Card
                  key={index}
                  heading={proect.title}
                  paragraph={proect.para}
                  imgUrl={proect.imageSrc}
                  projectLink={proect.url}
                ></Card>
              ))}
            {/* </Fade> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
