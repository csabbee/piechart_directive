'use strict';

angular.module('barchartApp')
  .controller('MainCtrl', ['$scope','$window', function ($scope, $window) {
    console.dir($window);
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
  }]);
