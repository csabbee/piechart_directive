'use strict';
/*global d3*/
angular.module('barchartApp')
  .controller('MainCtrl', ['$scope','$window', function ($scope, $window) {
    $scope.windowWidth = $window.innerWidth;
    $scope.windowHeight = $window.innerHeight;
    
    function updateSize(){
      console.log('window resized!');
      $scope.$apply(function(){
        $scope.windowWidth = $window.innerWidth;
        $scope.windowHeight = $window.innerHeight;
      });
    }
    
    $window.onresize = updateSize;
    
    var width = 960,
    height = 500;

    var y = d3.scale.linear()
        .range([height, 0]);

    var chart = d3.select('.chart')
        .attr('width', width)
        .attr('height', height);
    d3.tsv('data.tsv', type, function(error, data) {
      y.domain([0, d3.max(data, function(d) { return d.value; })]);
      
      var barWidth = width / data.length;

      var bar = chart.selectAll('g')
          .data(data)
        .enter().append('g')
          .attr('transform', function(d, i) { return 'translate(' + i * barWidth + ',0)'; });

      bar.append('rect')
          .attr('y', function(d) { return y(d.value); })
          .attr('height', function(d) { return height - y(d.value); })
          .attr('width', barWidth - 1);

      bar.append('text')
          .attr('x', barWidth / 2)
          .attr('y', function(d) { return y(d.value) + 3; })
          .attr('dy', '.75em')
          .text(function(d) { return d.value; });
    });

    function type(d) {
      d.value = +d.value; // coerce to number
      return d;
    }
  }]);
