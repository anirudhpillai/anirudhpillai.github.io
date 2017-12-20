import React from 'react';


let awards = [
  {
    title: "JP Morgan Code for Good",
    description: `Won Code for Good in the Save the Children stream.
Used service workers to build an offline data gathering tool which could be used in remote places without internet. It syncs to the online CouchDB database whenever the device connects to the internet. Using textual records meant even a single mobile device could store millions of records.`,
    link: "https://github.com/Ldn2016/team-14"
  },
  {
    title: "Microsoft Data Science Student Challenge",
    description: `My team finished runners up for the Data Science Student Challenge.
We did sentiment analysis on news stories of a particular stock and then used Microsoft Azure to find out how they affected the stock price.`,
    link: "https://github.com/DSSCHack2017/microsoftDataScienceChallenge"
  },
  {
    title: "Systematica Codeathon",
    description: "Built a real time trading platform using the given stream API",
    link: "https://github.com/anirudhpillai/trading_platform"
  }
]

const Award = (award, key) => (
    <div className="award" key={key}>
      <a href={award.link} target="_blank"><h2>{award.title}</h2></a>
      <p>{award.description}</p>
    </div>
)

export default class Awards extends React.Component {

  render() {
    return (
      <div className="awards">
        <div className="container">
          <h1>Awards</h1>
          <div>
            {awards.map((a, i) => Award(a, i))}
          </div>
        </div>
      </div>
    )
  }

}
