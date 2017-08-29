import React from 'react';
import githubLogo from './../img/github.png';

let projects = [
  {
    title: "uclapi",
    description: "Creating an API around UCL's digital services",
    link: "https://uclapi.com",
    color: 'blue'
  },
  {
    title: "algorithms",
    description: "Python solutions to Leetcode, Interview Bit, Google Foobar questions.",
    link: "https://github.com/anirudhpillai/algorithms",
    color: 'blue darken-4'
  },
  {
    title: "stockprice-predictor",
    description: "We did sentiment analysis on news stories of a particular stock and then used Microsoft Azure to find out how they affected the stock price.",
    link: "https://github.com/DSSCHack2017/microsoftDataScienceChallenge",
    color: 'teal'
  },
  {
    title: "Trading Epiphany",
    description: "Real Time Trading Platform. Winner of Systematica Codeathon.",
    link: "https://github.com/anirudhpillai/trading_platform",
    color: 'orange darken-3'
  },
  {
    title: "dotfiles",
    description: "My config files for Ubuntu, i3, Atom, Fish etc.",
    link: "https://github.com/anirudhpillai/dotfiles",
    color: 'brown darken-4'
  },
  {
    title: "FaceLock",
    description: "A Chrome extension to add face unlock to specific websites. Created at the Microsoft re:cognition hackathon. Built using the Microsoft Cognitive Services",
    link: "https://github.com/anirudhpillai/FaceLock",
    color: 'brown'
  }
]

const Project = (project, key) => (
    <div className="project" key={key}>
      <a href={project.link}>
        <div className={"card " + project.color}>
          <div className="card-content">
            <span className="card-title">{project.title}</span>
            <p>{project.description}</p>
          </div>
        </div>
      </a>
    </div>
)

export default class Projects extends React.Component {

  render() {
    return (
      <div>
        <h1>Projects</h1>
        <div className="projects">
          {projects.map((p, i) => Project(p, i))}
        </div>
      </div>
    )
  }

}
