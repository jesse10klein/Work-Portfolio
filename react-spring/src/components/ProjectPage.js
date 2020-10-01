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
    description: 'A sorting algorithm visualizer made using HTML canvas. Includes visualisations of Bubble Sort, Quick Sort, Insertion Sort, Merge Sort and Selection Sort. Users can change the size of the sample list used and the speed at which the visualisation runs.',
    technologies: [
      {image: html, name: "HTML"}, 
      {image: css, name: "CSS"}, 
      {image: javascript, name: "JavaScript"}
    ],
    githubURL: 'https://github.com/jesse10klein/Sorting-Visualiser',
    demoURL: 'https://lucid-booth-63bea2.netlify.app/'
  },
  {
    imageURL: video,
    title: 'Vibe Video Viewing Platform',
    description: 'A Video Platform made using Express and SQLite on the back end. Features include: subscription feed, customizable profiles, instant messaging, notifications, commenting, upvoting and downvoting, sharing to social media and search functions.',
    technologies: [
      {image: javascript, name: "Javascript"}, 
      {image: express, name: "Express.js"}, 
      {image: sqlite, name: "SQLite"}, 
      {image: sequelize, name: "Sequelize"}
    ],
    githubURL: 'https://github.com/jesse10klein/VIBE-Video-Platform',
    demoURL: 'http://portfolioprojects-env.eba-acnyrxxp.ap-southeast-2.elasticbeanstalk.com/video'
  },
  {
    imageURL: audio,
    title: 'Audio Visualizer',
    description: 'An audio visualizer made using the Spotify API and Javascript. A number of options can be modified to create a visualiser that looks good to you. Users can either play a snippet of a song through the Spotify API, or select an audio file from their computer and play that instead. ',
    technologies: [
      {image: spotify, name: "Spotify API"}, 
      {image: javascript, name: "JavaScript"}, 
      {image: express, name: "Express.js"}, 
      {image: pug, name: "Pug"}
    ],
    githubURL: 'https://github.com/jesse10klein/audio-visualiser',
    demoURL: 'http://portfolioprojects-env.eba-acnyrxxp.ap-southeast-2.elasticbeanstalk.com/audio-visualiser'
  },
  {
    imageURL: sera,
    title: "Serafina's Soiree",
    description: "An Ecommerce site I've built for my mum's handcrafted earrings bustiness that I'd highly recommend checking out. Orders cannot currently be placed through this site as I'm working with her to build an efficient way to update stock due to in person sales. ",
    technologies: [
      {image: bootstrap, name: "Bootstrap"}, 
      {image: express, name: "Express.js"}, 
      {image: mongodb, name: "MongoDB"}, 
      {image: css, name: "CSS"}
    ],
    githubURL: 'https://github.com/jesse10klein/serafinassoiree',
    demoURL: 'http://serafinassoiree.ap-southeast-2.elasticbeanstalk.com/'
  },
  {
    imageURL: portfolio,
    title: "Portfolio Website",
    description: "A website I built to showcase a number of personal projects I've worked on throughout my time at university. Animations are done using ReactSpring.js. The websites are either hosted on AWS or using Netlify.",
    technologies: [
      {image: react, name: "React.js"}, 
      {image: reactspring, name: "ReactSpring.js"}, 
      {image: bootstrap, name: "Bootstrap"}, 
      {image: css, name: "CSS"}
    ],
    githubURL: 'https://github.com/jesse10klein/Work-Portfolio',
    demoURL: '/'
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
          {
            info.demoURL === ""
            ?
            <button className="link inactive" >
              <img src={web} alt="Couldn't be loaded"></img>
              <h3>View Live Demo</h3>
            </button>
            :
            <a className="link" href={info.demoURL} target='_blank' rel="noopener noreferrer">
              <img src={web} alt="Couldn't be loaded"></img>
              <h3>View Live Demo</h3>
          </a>
          }
          
        </div>
      </div>
    </div>



  );
};

export default ProjectPage;
