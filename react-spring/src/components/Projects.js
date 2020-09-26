import React from 'react'
import Project from './Project'
import { animated, useSpring } from 'react-spring'
import '../style/projects.css';

import video from '../images/video.PNG';
import sorting from '../images/sorting.PNG';
import audio from '../images/audio.PNG'

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${-x / 7}px,${y / 7}px,0)`
const trans2 = (x, y) => `translate3d(${x / 8}px,${-y / 8}px,0)`
const trans3 = (x, y) => `translate3d(${-x / 6}px,${y / 6}px,0)`
const transitions = [trans1, trans2, trans3];

const projects = [
  {
    imageURL: sorting,
    title: 'Sorting Algorithm Visualizer',
    description: 'A sorting algorithm visualizer made using HTML canvas',
    webURL: 'https://github.com/jesse10klein/Sorting-Visualiser'
  },
  {
    imageURL: video,
    title: 'Vibe Video Viewing Platform',
    description: 'A video platform made with Node.js, Express.js and PUG',
    webURL: 'https://github.com/jesse10klein/VIBE-Video-Platform'
  },
  {
    imageURL: audio,
    title: 'Audio Visualizer',
    description: 'An audio visualizer made using the Spotify API and Javascript',
    webURL: 'https://github.com/jesse10klein/audio-visualiser'
  }
]

const Projects = ({props, set}) => {

  const [propsa, seta] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))

  const handleMouseEnter = (e) => {
    if (e.target.classList.contains("projectImg")) {
      console.log("Hello");
      e.target.classList.add("selected");
    }
  }

  const handleMouseLeave = (e) => {
    if (e.target.classList.contains("projectImg")) {
      console.log("Bye");
      e.target.classList.remove("selected");
    }
  }

  const handleMouseMove = ({ clientX: x, clientY: y }) => {
      seta({ xy: calc(x, y) });
  }

  return (
    
    <div className="projectContainer" onMouseMove={handleMouseMove}>

      {
        projects.map((project, index) => {
          return (
            <animated.div className={`projectImg project${index+1}`} style={{ transform: propsa.xy.interpolate(transitions[index])}} key={index} 
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}>
              <a href={project.webURL} target="_blank" rel="noopener noreferrer">
                <Project 
                imageURL={project.imageURL}
                title={project.title}
                description={project.description} 
                />
              </a>
              
            </animated.div>
          )
        })
      }
    </div>
  )
}

export default Projects;