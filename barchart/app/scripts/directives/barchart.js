'use strict';

angular.module('barchartApp')
  .directive('barChart', function () {
    return {
      template: '<svg></svg>',
      restrict: 'E',
      replace: true,
      scope: {
        width: '=',
        height: '='
      },
      link: function postLink(scope, element, attrs) {
        console.dir(element);
      }
    };
  });
