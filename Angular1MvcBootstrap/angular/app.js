(function () {
    'use strict';

    var app = angular.module('myApp', ['ngRoute']);

    // Configure routing for the system
    app.config(['$routeProvider',
        function ($routeProvider) {

            $routeProvider
                .when('/ind', {
                    templateUrl: '/angular/individual.html',
                    controller: 'individualController'
                })
                .when('/comp', {
                    templateUrl: '/angular/company.html',
                    controller: 'companyController'
                })
                .otherwise({
                    redirectTo: '/ind'
                });
        }
    ]);
    
})();