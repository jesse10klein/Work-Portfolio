import React from 'react'

const Project = ({imageURL, title, description}) => {

  return (
    <div className="projectCard">
      <img src={`./${imageURL}`} alt="not laoded"></img>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  ) 

}

export default Project;