import * as d3 from 'd3';
import React from 'react';

const BarChart = ({ data }) => {
    console.log(data)

    const margin = {top: 10, right: 30, bottom: 30, left: 60},
    width = 1150 - margin.left - margin.right,
    height = 150 - margin.top - margin.bottom;
    
    const svg = d3.select("#my_dataviz")
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
    .attr("stroke-opacity", 0.1));

  // Add Y axis
  const y = d3.scaleLinear()
    .domain([0, 40])
    .range([ height, 0 ]);

  svg.append("g")
    .call(d3.axisLeft(y).ticks(2))
    .call(g => g.selectAll(".tick line").clone()
    .attr("x2", width)
    .attr("stroke-opacity", 0.1));

  // Add the line
  svg
  .append("path")
    .datum(data)
    .attr("fill", "none")
    .attr("stroke", "#69b3a2")
    .attr("stroke-width", 1.5)
      .attr("d", d3.line()
        .curve(d3.curveMonotoneX)
        .x(function(d) { return x(d.date) })
        .y(function(d) { return y(d.value) })
        )

  // Add the points
  svg
    .append("g")
    .selectAll("dot")
    .data(data)
    .join("circle")
        .attr("class", "myCircle")
        .attr("cx", d => x(d.date))
        .attr("cy", d => y(d.value))
        .attr("r", 5)
        .attr("stroke", "#69b3a2")
        .attr("stroke-width", 1)
        .attr("fill", "white")

    return (
        <div id="my_dataviz"></div>
    )

}

export default BarChart;