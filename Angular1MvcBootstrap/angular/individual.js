(function() {
    'use strict';

    var app = angular.module('myApp');
    app.controller('individualController', ['$scope', individualController]);

    function individualController($scope) {
        console.log('controller created');
        $scope.title = 'hello world';
        $scope.counter = 0;

        $scope.up = function() {
            $scope.counter++;
        }

        $scope.down = function () {
            $scope.counter--;
        }

        $scope.isHigh = function () {
            console.log('called');
            return $scope.counter >= 10;
        }
    }
})();