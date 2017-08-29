import React from 'react';
import * as d3 from "d3";


export default class Work extends React.Component {

    componentDidMount() {
      let width = window.innerWidth - 20, height = window.innerHeight;
      let svg = d3.select(".workGraph").append("svg")
        .attr("width", width)
        .attr("height", height);

      let simulation = d3.forceSimulation()
          .force("link", d3.forceLink().id((d) => { return d.id; }).distance(180).strength(1))
          .force("charge", d3.forceManyBody().strength((d) => {
            console.log(d);
            var charge = -500;
            if (d.index === 0) charge = 10 * charge;
            return charge;
          }))
          .force("center", d3.forceCenter(width / 2, height / 2));

      let graph = {
        "nodes": [
          {
            'id': 'Work',
            'color': '#9BC1BC',
            'radius': 40
          },
          {
            'id': 'Citi',
            'color': '#008AE2',
            'radius': 80
          },
          {
            'id': 'UCL ISD',
            'color': '#0097A9',
            radius: 70
          },
          {
            'id': 'Activate',
            'color': '#FF524F',
            radius: 60
          },
          {
            'id': 'EWB UCL',
            'color': '#76C043',
            radius: 40
          }
        ]
      }

      graph['links'] = graph['nodes'].map((node, i) => {
        return {
          'source': graph.nodes[0].id,
          'target': node.id
        }
      })


      let link = svg.append("g")
        .attr("class", "links")
        .selectAll("line")
        .data(graph.links)
        .enter()
          .append("line")
          .attr('stroke', '#aaa');

      let node = svg.selectAll(".node");
      node = node.data(graph.nodes);

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
        .attr("r", (d) => d.radius)
        .attr('fill', (d) => d.color)

      node.append('text')
        .attr('dx', 0)
        .attr('dy', 0)
        .attr('fill', '#fff')
        .attr('font-size', '14px')
        .attr('text-anchor', 'middle')
        .text((d) => { return d.id })

      simulation
          .nodes(graph.nodes)
          .on("tick", () => {
            link
                .attr("x1", (d) => { return d.source.x; })
                .attr("y1", (d) => { return d.source.y; })
                .attr("x2", (d) => { return d.target.x; })
                .attr("y2", (d) => { return d.target.y; });

            node.attr("transform", function(d){
              return "translate(" + d.x + "," + d.y + ")";
            })
          });

      simulation.force("link")
          .links(graph.links);
    }

    render() {
      return (
        <div className="work">
          <h1>Work</h1>
          <div className="workGraph">
          </div>
        </div>
      )
    }

}
