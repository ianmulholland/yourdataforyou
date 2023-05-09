const svg = d3.create("svg")
    .attr("width", width)
    .attr("height", height);

const header = svg.append("text")
    .attr("x", width/2)
    .attr("y", height-325)
    .attr('text-anchor', 'middle')
    .attr("font-family", "Avenir")
    .attr("font-size", 25)
    .attr("fill", "black")
    .text("hello, meet me");

var text1 = "Name: William Howard Taft";
var text1_m = "Name: __________________";

var text2 = "Date of birth: 9/15/1857";
var text2_m = "Date of birth: __/__/____";

var text3 = "Occupation: 27th President of the US";
var text3_m = "Occupation: ______________________";

var p_size = 18;

const line1 = svg.append("text")
    .attr("x", width/2)
    .attr("y", (height-100)/2)
    .attr('text-anchor', 'middle')
    .attr("font-family", "Avenir")
    .attr("font-size", p_size)
    .attr("fill", "black")
    .text(text1_m)
    .on('mouseenter', function() {
        d3.select(this)
          .attr('fill', 'black')
          .attr("font-family", "Avenir")
          .text(text1)
          .style("cursor", "pointer")
        })
    .on('mouseleave', mouseLeave1);

const line2 = svg.append("text")
    .attr("x", width/2)
    .attr("y", height/2)
    .attr('text-anchor', 'middle')
    .attr("font-family", "Avenir")
    .attr("font-size", p_size)
    .attr("fill", "black")
    .text(text2_m)
    .on('mouseenter', function() {
        d3.select(this)
          .attr('fill', 'black')
          .attr("font-family", "Avenir")
          .text(text2)
          .style("cursor", "pointer")
        })
    .on('mouseleave', mouseLeave2);

const line3 = svg.append("text")
    .attr("x", width/2)
    .attr("y", (height + 100)/2)
    .attr('text-anchor', 'middle')
    .attr("font-family", "Avenir")
    .attr("font-size", p_size)
    .attr("fill", "black")
    .text(text3_m)
    .on('mouseenter', function() {
        d3.select(this)
          .attr('fill', 'black')
          .attr("font-family", "Avenir")
          .text(text3)
          .style("cursor", "pointer")
        })
    .on('mouseleave', mouseLeave3);

function mouseLeave1() {
  d3.select(this)
    .attr('fill', 'black')
    .attr('opacity', 1)
    .transition()
    .text(text1_m)
    .duration(1000)
}

function mouseLeave2() {
  d3.select(this)
    .attr('fill', 'black')
    .attr('opacity', 1)
    .text(text2_m)
}

function mouseLeave3() {
  d3.select(this)
    .attr('fill', 'black')
    .attr('opacity', 1)
    .text(text3_m)
}

return svg.node();
