(function() {
    'use strict';

    var app = angular.module('myApp');

    app.factory('submissionService', ['$http', submissionService]);

    function submissionService($http) {
        console.log('submissionService created');

        return {
            getCountries: function(successCallback, errorCallback) {
                //return ['USA', 'Singapore', 'South Africa'];
                $http.get('/api/submission/Countries').then(successCallback, errorCallback);
            }
        };
    }

})();