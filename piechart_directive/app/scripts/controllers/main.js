'use strict';
/*global d3, angular*/
angular.module('piechartDirectiveApp')
  .controller('DonutChartCtrl', function ($scope, $window) {
    $scope.charts = d3.range(10).map(function(){
        return d3.range(10).map(Math.random);
    });
    $scope.shared = {
      ourData: d3.range(10).map(Math.random)
    };
  
    $scope.ourData = d3.range(10).map(Math.random);
    
    angular.element($window).on('resize', function(){
      $scope.$apply();
    });
  });
