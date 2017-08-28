import React from 'react';
import * as d3 from "d3";


export default class Interests extends React.Component {

    componentDidMount() {
      let interests = [
        [
          {"interest": "Distributed Computing", "value": 90},
          {"interest": "Software Architecture", "value": 80},
          {"interest": "OS", "value": 60},
          {"interest": "Compilers", "value": 60},
          {"interest": "Data Visualisation", "value": 70},
          {"interest": "Big Data", "value": 50}
      	]
      ];

      let d = interests;
      let id = '.interestsGraph';

      var cfg = {
        w: window.innerWidth / 2,
        h: window.innerHeight / 1.5,
        factor: 1,
        factorLegend: .85,
        levels: 3,
        maxValue: 0,
        radians: 2 * Math.PI,
        opacityArea: 0.7,
        TranslateX: 80,
        TranslateY: 30,
        ExtraWidthX: 100,
        ExtraWidthY: 100,
        color: d3.scaleOrdinal().range(["#6F257F", "#CA0D59"])
      };

      cfg.maxValue = 100;

      var allAxis = (d[0].map((i, j) => i.interest));
      var total = allAxis.length;
      d3.select(id).select("svg").remove();

      var g = d3.select('.interestsGraph')
          .append("svg")
          .attr("width", cfg.w+cfg.ExtraWidthX)
          .attr("height", cfg.h+cfg.ExtraWidthY)
          .append("g")
          .attr("transform", "translate(" + cfg.TranslateX + "," + cfg.TranslateY + ")");

      let series = 0;

      var axis = g.selectAll(".axis")
          .data(allAxis)
          .enter()
          .append("g")
          .attr("class", "axis");

      axis.append("line")
        .attr("x1", cfg.w/2)
        .attr("y1", cfg.h/2)
        .attr("x2", (d, i) => cfg.w/2*(1-cfg.factor*Math.sin(i*cfg.radians/total)))
        .attr("y2", (d, i) => cfg.h/2*(1-cfg.factor*Math.cos(i*cfg.radians/total)))
        .attr("class", "line")
        .style("stroke", "grey")
        .style("stroke-width", "1px");

      axis.append("text")
        .attr("class", "legend")
        .text((d) => d)
        .style("font-family", "sans-serif")
        .style("font-size", "12px")
        .attr("text-anchor", "middle")
        .attr("dy", "1.5em")
        .attr("transform", "translate(0, -10)")
        .attr("x", (d, i) => {return cfg.w/2*(1-cfg.factorLegend*Math.sin(i*cfg.radians/total))-60*Math.sin(i*cfg.radians/total);})
        .attr("y", (d, i) => {return cfg.h/2*(1-Math.cos(i*cfg.radians/total))-20*Math.cos(i*cfg.radians/total);});


      d.forEach(function(y, x){
        let dataValues = [];

        g.selectAll(".nodes")
        .data(y, (j, i) => {
          dataValues.push([
            cfg.w/2*(1-(parseFloat(Math.max(j.value, 0))/cfg.maxValue)*cfg.factor*Math.sin(i*cfg.radians/total)),
            cfg.h/2*(1-(parseFloat(Math.max(j.value, 0))/cfg.maxValue)*cfg.factor*Math.cos(i*cfg.radians/total))
          ]);
        });
        dataValues.push(dataValues[0]);

        g.selectAll(".interest")
         .data([dataValues])
         .enter()
         .append("polygon")
         .attr('class', 'interest')
         .style("stroke-width", "2px")
         .style("stroke", cfg.color(series))
         .attr("points", (d) => {
           var str="";
           for(let pti=0; pti < d.length; pti++){
             str=str+d[pti][0]+","+d[pti][1]+" ";
           }
           return str;
         })
         .style("fill", cfg.color(series))
         .style("fill-opacity", cfg.opacityArea)
         .on('mouseover', () => {
           g.selectAll("polygon")
            .transition(200)
            .style("fill-opacity", .95);
          })
         .on('mouseout', () => {
            g.selectAll("polygon")
             .transition(200)
             .style("fill-opacity", cfg.opacityArea);
         });
      });

    }

    render() {
      return (
        <div className="interests">
          <h1>Interests</h1>
          <div className="interestsGraph">
          </div>
        </div>
      )
    }

}
