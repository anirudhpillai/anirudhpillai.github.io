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
]

const Project = (project, key) => (
    <div className="project" key={key}>
      <a href={project.link}><h2>{project.title}</h2></a>
      <p>{project.description}</p>
    </div>
)

export default class Projects extends React.Component {

  render() {
    return (
      <div className="projects">
        <div className="container">
          <h1>Projects</h1>
          <div className="projects">
            {projects.map((p, i) => Project(p, i))}
          </div>
        </div>
      </div>
    )
  }

}
