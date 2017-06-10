import React from 'react';


let projects = [
  {
    title: "UCL API",
    imageLink: "https://uclapi.com/static/simpleAPILogoBlack.svg",
    description: "Creating an API around UCL's digital services",
    link: "https://uclapi.com"
  }
]

const Project = (title, imageLink, description, link, key) => (
    <div className="project" key={key}>
      <div className="card">
        <div className="card-content">
          <img className="responsive-img" src={imageLink}/>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
)

export default class Projects extends React.Component {

  render() {
    return (
      <div className="projectContainer">
        <div className="projects">
          {projects.map((p, i) => Project(p.title, p.imageLink, p.description, p.link, i))}
        </div>
      </div>
    )
  }

}
