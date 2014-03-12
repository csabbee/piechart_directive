'use strict';
/*global d3*/
angular.module('piechartDirectiveApp')
  .directive('donutChart', function () {
    function link(scope, element) {
      d3.select(element[0]).append('svg');
    }
    return {
      restrict: 'E',
      link: link
    };
  });
