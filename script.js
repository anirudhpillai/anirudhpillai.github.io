var width = 1000,
    height = 800;

var color = d3.scale.category20();

var nodes = [
  {
    'name': "Skills",
    'color': "#00AAA0",
    'size': 60,
    'dist': 200
  },
  {
    'name': "Python",
    'color': "#1D8DB5",
    'size': 40,
    'dist': 200
  },
  {
    'name': "Java",
    'color': "#E45641",
    'size': 30,
    'dist': 200
  },
  {
    'name': "JavaScript",
    'color': "orange",
    'size': 40,
    'dist': 200
  },
  {
    'name': "Haskell",
    'color': "#4B4261",
    'size': 40,
    'dist': 200
  },
  {
    'name': "C",
    'color': "#A1A584",
    'size': 30,
    'dist': 200
  },
  {
    'name': "Pandas",
    'color': "#55AED0",
    'size': 20,
    'dist': 40
  },
  {
    'name': "NumPy",
    'color': "#55AED0",
    'size': 20,
    'dist': 40
  },
  {
    'name': "Express",
    'color': "#FFCF00",
    'size': 20,
    'dist': 40
  },
  {
    'name': "Node.js",
    'color': "#FFCF00",
    'size': 20,
    'dist': 40
  },
  {
    'name': "Meteor",
    'color': "#FFCF00",
    'size': 20,
    'dist': 40
  },
  {
    'name': "D3.js",
    'color': "#FFCF00",
    'size': 20,
    'dist': 40
  },
  {
    'name': "Polymer",
    'color': "#FFCF00",
    'size': 20,
    'dist': 40
  },
  {
    'name': "Databases",
    'color': "#765E52",
    'size': 30,
    'dist': 200
  },
  {
    'name': "MongoDB",
    'color': "#9B766E",
    'size': 10,
    'dist': 20
  },
  {
    'name': "SQL",
    'color': "#9B766E",
    'size': 10,
    'dist': 20
  },
  {
    'name': "Arduino",
    'color': "#CDD3A7",
    'size': 10,
    'dist': 20
  },
  {
    'name': "Robotics",
    'color': "#CDD3A7",
    'size': 10,
    'dist': 20
  },
  {
    'name': "QuickCheck",
    'color': "#627192",
    'size': 20,
    'dist': 40
  },
  {
    'name': "Parsec",
    'color': "#627192",
    'size': 20,
    'dist': 40
  },
  {
    'name': "Misc.",
    'color': "#9CB6B5",
    'size': 40,
    'dist': 200
  },
  {
    'name': "Linux",
    'color': "#9FD6D3",
    'size': 20,
    'dist': 40
  },
  {
    'name': "Git",
    'color': "#9FD6D3",
    'size': 20,
    'dist': 40
  }
];

var links = [
  {"source": 0, "target": 0},
  {"source": 0, "target": 1},
  {"source": 0, "target": 2},
  {"source": 0, "target": 3},
  {"source": 0, "target": 4},
  {"source": 0, "target": 5},
  {"source": 1, "target": 6},
  {"source": 1, "target": 7},
  {"source": 3, "target": 8},
  {"source": 3, "target": 9},
  {"source": 3, "target": 10},
  {"source": 3, "target": 11},
  {"source": 3, "target": 12},
  {"source": 0, "target": 13},
  {"source": 13, "target": 14},
  {"source": 13, "target": 15},
  {"source": 5, "target": 16},
  {"source": 5, "target": 17},
  {"source": 4, "target": 18},
  {"source": 4, "target": 19},
  {"source": 0, "target": 20},
  {"source": 20, "target": 21},
  {"source": 20, "target": 22}
]

var svg = d3.select(".chart").append("svg")
    .attr("width", width)
    .attr("height", height);

var force = d3.layout.force()
  .linkDistance(function(d, i){
    return nodes[i].dist;
  })
  .charge(-700)
  .size([width, height])
  .nodes(nodes)
  .links(links)

 force.on("tick", function(){
    link.attr("x1", function(d){
      return d.source.x;
    })
    .attr("y1", function(d){
      return d.source.y;
    })
    .attr("x2", function(d){
      return d.target.x;
    })
    .attr("y2", function(d){
      return d.target.y;
    });

    node.attr("transform", function(d){
      return "translate(" + d.x + "," + d.y + ")";
    })
  })

var node = svg.selectAll(".node"),
  link = svg.selectAll(".link");

function start() {
  link = link.data(force.links());
  link.enter().append("line")
      .attr("class", "link")
      .attr('stroke', '#ccc')
      .attr('stroke-width', 2)
      .style('opacity', 0.5)
  link.exit().remove();

  node = node.data(force.nodes());
  node.enter().append('g')
      .attr("class", "node")
      .call(force.drag)

  node.append("circle")
    .attr("r", function(d){return d.size;})
    .style("fill", function(d){return d.color;})

  node.append('text')
        .attr('dx', 0)
        .attr('dy', 0)
        .text(function(d){return d.name})
        .style("stroke", 'b')

  node.exit().remove();

  force.start();
}

start();
