import React from 'react'
import Project from './Project'
import { animated, useSpring } from 'react-spring'
import '../style/projects.css';
import { Link } from 'react-router-dom';

import video from '../images/video.PNG';
import sorting from '../images/sorting.PNG';
import audio from '../images/audio.PNG';
import sera from '../images/sera.PNG';
import portfolio from '../images/portfolio.PNG'

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${-x / 7}px,${y / 7}px,0)`
const trans2 = (x, y) => `translate3d(${x / 8}px,${-y / 4}px,0)`
const trans3 = (x, y) => `translate3d(${-x / 6}px,${y / 6}px,0)`
const trans4 = (x, y) => `translate3d(${x / 3}px,${-y / 10}px,0)`
const trans5 = (x, y) => `translate3d(${x / 15}px,${-y / 15}px,0)`
const transitions = [trans1, trans2, trans3, trans4, trans5];

const projects = [
  {
    imageURL: sorting,
    title: 'Sorting Algorithm Visualizer',
    description: 'A sorting algorithm visualizer made using HTML canvas',
  },
  {
    imageURL: video,
    title: 'Vibe Video Viewing Platform',
    description: 'A video platform made with Node.js, Express.js and PUG',
  },
  {
    imageURL: audio,
    title: 'Audio Visualizer',
    description: 'An audio visualizer made using the Spotify API and Javascript',
  },
  {
    imageURL: sera,
    title: "Serafina's Soiree",
    description: 'Ecommerce site built with Bootstrap and Express',
  },
  {
    imageURL: portfolio,
    title: "Portfolio Website",
    description: 'Website build to host my portfolio projects'
  }
]

const Projects = ({props, set}) => {

  const [propsa, seta] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))

  const handleMouseMove = ({ clientX: x, clientY: y }) => {
    if (window.innerWidth > 600) seta({ xy: calc(x, y) });
  }

  return (
    
    <div className="projectContainer" onMouseMove={handleMouseMove}>

      {
        projects.map((project, index) => {
          return (
            <animated.div className={`projectImg project${index+1}`} style={{ transform: propsa.xy.interpolate(transitions[index])}} key={index} >
              <Link to={`/projects/${index}`}>
                <Project 
                imageURL={project.imageURL}
                title={project.title}
                description={project.description} 
                />
              </Link>
              
            </animated.div>
          )
        })
      }
    </div>
  )
}

export default Projects;