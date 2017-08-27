import React from 'react';
import githubLogo from './../img/github.png';

let projects = [
  {
    title: "uclapi",
    description: "Creating an API around UCL's digital services",
  },
  {
    title: "algorithms",
    description: "Python solutions to Leetcode, Interview Bit, Google Foobar questions.",
  },
  {
    title: "stockprice-predictor",
    description: "We did sentiment analysis on news stories of a particular stock and then used Microsoft Azure to find out how they affected the stock price."
  },
  {
    title: "Trading Epiphany",
    description: "Real Time Trading Platform. Winner of Systematica Codeathon."
  },
  {
    title: "dotfiles",
    description: "My config files for Ubuntu, i3, Atom, Fish etc."
  },
  {
    title: "FaceLock",
    description: "A Chrome extension to add face unlock to specific websites. Created at the Microsoft re:cognition hackathon. Built using the Microsoft Cognitive Services"
  }
]

const Project = (title, imageLink, description, link, key) => (
    <div className="project" key={key}>
      <a href={link}>
        <div className="card">
          <div className="card-content">
            <span className="card-title">{title} <i className="fa fa-github" aria-hidden="true"></i></span>
            <p>{description}</p>
          </div>
        </div>
      </a>
    </div>
)

export default class Projects extends React.Component {

  render() {
    return (
      <div className="">
        <h1>Projects</h1>
        <div className="projects">
          {projects.map((p, i) => Project(p.title, p.imageLink, p.description, p.link, i))}
        </div>
      </div>
    )
  }

}
