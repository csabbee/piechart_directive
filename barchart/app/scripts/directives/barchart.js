'use strict';

angular.module('barchartApp')
  .directive('barChart', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the barChart directive');
      }
    };
  });
