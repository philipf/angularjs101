(function() {
    'use strict';

    var app = angular.module('myApp');
    app.controller('individualController', ['$scope', 'submissionService',  individualController]);

    function individualController($scope, submissionService) {
        console.log('individualController created');

        submissionService.getCountries(function(response) {
            $scope.countries = response.data;
        }),
        function(error) {
            alert(error);
        };

        $scope.submitMyForm = function () {
            var form = {
                country: $scope.selectedCountry,
                name: $scope.name
            }

            alert(JSON.stringify(form));
        }
    }
})();