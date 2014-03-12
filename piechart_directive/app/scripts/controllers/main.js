'use strict';
/*global d3*/
angular.module('piechartDirectiveApp')
  .controller('DonutChartCtrl', function ($scope) {
    $scope.charts = d3.range(100).map(function(){
      return d3.range(10).map(Math.random);
    });
  });
