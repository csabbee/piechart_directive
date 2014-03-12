'use strict';
/*global d3*/
angular.module('piechartDirectiveApp')
  .directive('donutChart', function () {
    function link(scope, element) {
      var data = scope.data;
      var color = d3.scale.category10();
      var el = element[0];
//      var el = d3.select('div').node();
      var width = el.clientWidth;
      var height = el.clientHeight;
      var min = Math.min(width, height);
      var pie = d3.layout.pie().sort(null);
      var arc = d3.svg.arc()
              .outerRadius(min / 2 * 0.9)
              .innerRadius(min / 2 * 0.5);
      var svg = d3.select(el).append('svg');
      var g = svg.append('g');
      

      //add the <path>s for each arc slice
      var arcs = g.selectAll('path').data(pie(data))
              .enter().append('path')
              .attr('fill', function(d, i){ return color(i);} );
      scope.$watch(function(){
        return el.clientWidth * el.clientHeight;
      }, function(){
        width = el.clientWidth;
        height = el.clientHeight;
        min = Math.min(width, height);
        arc.outerRadius(min / 2 * 0.9).innerRadius(min / 2 * 0.5);
        svg.attr({width: width, height: height});
        g.attr('transform', 'translate('+ width / 2 + ',' + height / 2 + ')');
        arcs.attr('d', arc);
      });
    }
    return {
      restrict: 'E',
      link: link,
      scope: {
        data: '='
      }
    };
  });
