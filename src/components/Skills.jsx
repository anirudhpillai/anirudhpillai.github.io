import React from 'react';
import * as d3 from "d3";

import skills from './../data/skills.csv';


export default class Skills extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.drawGraph();
    // window.addEventListener("resize", this.drawGraph);
  }

  drawGraph() {
    // Replace old graph
    // if (document.getElementById("skillsGraph")) {
    //   document.getElementById("skillsGraphContainer").innerHTML = "";
    // }

    let width = 1000, height = 800, sizeDivisor = 100, nodePadding = 10;

    console.log("Setting", width, height);

    let svg = d3.select(".skillsGraph").append("svg")
      .attr("id", "skillsGraph")
      .attr("width", width)
      .attr("height", height);

    let color = d3.scaleOrdinal(["#66c2a5", "#fc8d62", "#8da0cb", "#e78ac3",
      "#a6d854", "#ffd92f", "#e5c494", "#b3b3b3"]);

    let simulation = d3.forceSimulation()
      .force("forceX", d3.forceX().strength(.1).x(width * .5))
      .force("forceY", d3.forceY().strength(.1).y(height * .5))
      .force("center", d3.forceCenter().x(width * .5).y(height * .5))
      .force("charge", d3.forceManyBody().strength(-15));

    let node = svg.selectAll(".node")

    node = node.data(skills)

    node = node.enter()
      .append("g")
      .attr("class", "node")
      .call(d3.drag()
          .on("start", (d) => {
            if (!d3.event.active) simulation.alphaTarget(.03).restart();
            d.fx = d.x;
            d.fy = d.y;
          })
          .on("drag", (d) => {
            d.fx = d3.event.x;
            d.fy = d3.event.y;
          })
          .on("end", (d) => {
            if (!d3.event.active) simulation.alphaTarget(.03);
            d.fx = null;
            d.fy = null;
          }))

    node.append("circle")
      .attr("r", (d) => { return d.level; })
      .attr("fill", (d) => { return color(d.type); })
      .attr("cx", (d) => { return d.x; })
      .attr("cy", (d) => { return d.y; })

    node.append('text')
      .attr('dx', 0)
      .attr('dy', 0)
      .attr('fill', '#333')
      .attr('font-size', '12px')
      .attr('text-anchor', 'middle')
      // .attr('font-weight', 'bold')
      .text((d) => { return d.skill })

    simulation
        .nodes(skills)
        .force(
          "collide",
          d3.forceCollide().strength(.5).radius((d) => {
            return d.level + nodePadding;
          }).iterations(1)
        )
        .on("tick", (d) => {
          node.attr("transform", function(d){
            return "translate(" + d.x + "," + d.y + ")";
          })
        });
  }

  render() {
    return (
      <div className="skills">
        <div id="skillsGraphContainer" className="skillsGraph">
        </div>
      </div>
    )
  }

}
