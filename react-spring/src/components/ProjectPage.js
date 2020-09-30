import React from "react";

import '../style/project-page.css'

import sorting from '../images/sorting.PNG';
import video from '../images/video.PNG';
import sera from '../images/sera.PNG';
import audio from '../images/audio.PNG';
import github from '../images/github-icon.png';
import web from '../images/web.png';
import portfolio from '../images/portfolio.PNG'
import html from '../images/html5.png';
import css from '../images/css.png';
import javascript from '../images/javascript.png';
import express from '../images/express.png';
import sqlite from '../images/sqlite.jpg';
import sequelize from '../images/sequelize.svg';
import pug from '../images/pug.png';
import spotify from '../images/spotify.png';
import bootstrap from '../images/bootstrap.png';
import mongodb from '../images/mongodb.jpg'
import react from "../images/react-icon.png";
import reactspring from '../images/react-spring.png'

const projectInfo = [
  {
    imageURL: sorting,
    title: 'Sorting Algorithm Visualizer',
    description: 'A sorting algorithm visualizer made using HTML canvas',
    technologies: [
      {image: html, name: "HTML"}, 
      {image: css, name: "CSS"}, 
      {image: javascript, name: "JavaScript"}
    ],
    githubURL: 'https://github.com/jesse10klein/Sorting-Visualiser'
  },
  {
    imageURL: video,
    title: 'Vibe Video Viewing Platform',
    description: 'This project is a video platform built using',
    technologies: [
      {image: javascript, name: "Javascript"}, 
      {image: express, name: "Express.js"}, 
      {image: sqlite, name: "SQLite"}, 
      {image: sequelize, name: "Sequelize"}
    ],
    githubURL: 'https://github.com/jesse10klein/VIBE-Video-Platform'
  },
  {
    imageURL: audio,
    title: 'Audio Visualizer',
    description: 'An audio visualizer made using the Spotify API and Javascript',
    technologies: [
      {image: spotify, name: "Spotify API"}, 
      {image: javascript, name: "JavaScript"}, 
      {image: express, name: "Express.js"}, 
      {image: pug, name: "Pug"}
    ],
    githubURL: 'https://github.com/jesse10klein/audio-visualiser'
  },
  {
    imageURL: sera,
    title: "Serafina's Soiree",
    description: 'Ecommerce site built with Bootstrap and Express',
    technologies: [
      {image: bootstrap, name: "Bootstrap"}, 
      {image: express, name: "Express.js"}, 
      {image: mongodb, name: "MongoDB"}, 
      {image: css, name: "CSS"}
    ],
    githubURL: 'https://github.com/jesse10klein/serafinassoiree'
  },
  {
    imageURL: portfolio,
    title: "Portfolio Website",
    description: "I build this website to showcase a number of projects I've been working on.",
    technologies: [
      {image: react, name: "React.js"}, 
      {image: reactspring, name: "ReactSpring.js"}, 
      {image: bootstrap, name: "Bootstrap"}, 
      {image: css, name: "CSS"}
    ],
    githubURL: 'https://github.com/jesse10klein/Work-Portfolio'
  }
]


const ProjectPage = ({props}) => {

  const id = parseInt(props.params.id);
  const info = projectInfo[id];


  return (

    <div id="projectPage">
      <img id='projectImage' src={info.imageURL} alt="Couldn't be loaded"></img>
      <div id="projectContent">
        <div id="projectInfo">
          <h2>{info.title}</h2>
          <p id="description">{info.description}</p>
        </div>
        <div id="technologies">
          <h3>Main Technologies Used:</h3>
          <div id="technologiesList">
            {
              info.technologies.map((technology, index) => (
                <div className='technologyUsed'>
                  <img src={technology.image} alt="Couldn't be loaded"></img>
                  <p>{technology.name}</p>
                </div>
              ))
            }
          </div>
        </div>
        <div id="links">
          <a className="link"  href={info.githubURL} target='_blank' rel="noopener noreferrer">
            <img src={github} alt="Couldn't be loaded"></img>
            <h3>View Github Repo</h3>
          </a>
          <a className="link" href={info.demoURL} target='_blank' rel="noopener noreferrer">
            <img src={web} alt="Couldn't be loaded"></img>
            <h3>View Live Demo</h3>
          </a>
        </div>
      </div>
    </div>



  );
};

export default ProjectPage;
