import * as d3 from 'd3';
import React from 'react';

const BarChart = ({ data }) => {
    console.log(data)

    const margin = {top: 10, right: 30, bottom: 30, left: 60},
    width = 1150 - margin.left - margin.right,
    height = 150 - margin.top - margin.bottom;
    
    const svg = d3.select("#my_dataviz1")
    .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");
    
    const x = d3.scaleTime()
    .domain([new Date('2022/5/11'), new Date('2022/5/17')])
    .range([0, width])

    svg.append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(d3.axisBottom(x).ticks(7).tickFormat((d, i) => ['22.01.2014', '22.01.2020', '22.01.2020', '22.01.2020', '22.01.2020', '22.01.2020', '22.01.2020'][i]))
    .call(g => g.selectAll(".tick line").clone()
    .attr("y2", - height)
    .attr("stroke-opacity", 0.1))
    .selectAll(".tick text")
        .attr("dx", "9em");

  // Add Y axis
  const y = d3.scaleLinear()
    .domain([0, 2])
    .range([ height, 0 ]);

  svg.append("g")
    .call(d3.axisLeft(y).ticks(2))
    .call(g => g.selectAll(".tick line").clone()
    .attr("x2", width)
    .attr("stroke-opacity", 0.1));

    var histogram = d3.histogram()
    .domain(x.domain())  // then the domain of the graphic
    .thresholds(x.ticks(7));

    const u = svg.selectAll("rect")
    .data(histogram(data))

  // Add the area
  u
    .enter()
    .append("rect") // Add a new rect for each new elements
    .data(data)
    .transition() // and apply changes to all of them
    .duration(1000)
        .attr("x", 30)
        .attr("transform", function(d) { return "translate(" + x(d.date) + "," + y(d.value) + ")"; })
        .attr("width", function(d) { return 120 ; })
        .attr("height", function(d) { return height - y(d.value); })
        .style("fill", "#607d8b")

    return (
        <div id="my_dataviz1"></div>
    )

}

export default BarChart;