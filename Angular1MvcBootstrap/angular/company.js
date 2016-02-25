(function() {
    'use strict';

    var app = angular.module('myApp');
    app.controller('companyController', ['$scope', companyController]);

    function companyController($scope) {
        console.log('companyController created');

    }
})();