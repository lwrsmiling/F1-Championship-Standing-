'use strict';

// Declare app level module which depends on views, and components
angular.module('F1FeederApp').
	factory('ergastAPIservice', function($http){

		var ergastAPI = {};

		ergastAPI.getDrivers = function(){
			return $http({
				method: 'JSONP',
				url: 'https://ergast.com/api/f1/2013/driverStandings.json?callback=JSON_CALLBACK'
			});
		}

		ergastAPI.getDriverDetails = function(id){
			return $http({
				method: 'JSONP',
				url: 'https://ergast.com/api/f1/2013/drivers/'+ id +'/driverStandings.json?callback=JSON_CALLBACK'
			});
		}

		ergastAPI.getDriverRaces = function(id) {
      return $http({
        method: 'JSONP', 
        url: 'https://ergast.com/api/f1/2013/drivers/'+ id +'/results.json?callback=JSON_CALLBACK'
      });
    }

		return ergastAPI;
	});