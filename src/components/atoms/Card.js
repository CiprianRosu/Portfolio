import React from "react"
import { motion , AnimatePresence} from 'framer-motion';

const Card = ({githubLink, heading, paragraph, imgUrl, projectLink }) => {
  return (
    <motion.div layout
      className="card"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.2)),url(" +
          imgUrl +
          ")",
      }}
    >
      <AnimatePresence>
      <div className="content">
        <h1 className="header">{heading}</h1>
        <p className="text">{paragraph}</p>
        <a
          href={projectLink ? projectLink : "#"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn">
          Live
          </button>
         
        </a>
        &nbsp;&nbsp;
        <a
          href={githubLink ? githubLink : "#"}
          target="_blank"
          rel="noopener noreferrer"
          
        >
          <button className="btn">
          Code
          </button>
             
        </a>
      </div>
      </AnimatePresence>
    </motion.div>
  )
}

export default Card
