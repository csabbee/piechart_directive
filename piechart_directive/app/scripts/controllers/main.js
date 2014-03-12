'use strict';
/*global d3*/
angular.module('piechartDirectiveApp')
  .controller('MainCtrl', function ($scope) {
    console.dir($scope);
    
    
    var data = [82, 32, 63, 42];
    var color = d3.scale.category10();
    var el = d3.select('div').node();
    var width = el.clientWidth;
    var height = el.clientHeight;
    var min = Math.min(width, height);
    var pie = d3.layout.pie().sort(null);
    var arc = d3.svg.arc()
            .outerRadius(min / 2 * 0.9)
            .innerRadius(min / 2 * 0.5);
    var svg = d3.select(el).append('svg')
            .attr({width: width, height: height})
            .append('g')
            .attr('transform', 'translateC('+ width / 2 + ',' + height / 2 + ')');
    //add the <path>s for each arc slice
    svg.selectAll('path').data(pie(data))
            .enter().append('path')
            .attr('d', arc)
            .attr('fill', function(d, i){ return color(i)} );
  });
