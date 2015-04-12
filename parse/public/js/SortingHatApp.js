'use strict';

var SortingHatApp = angular.module('SortingHatApp', ['ngRoute']);

SortingHatApp.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/views/Main.html',
      controller: 'MainCtrl'
    })
    .when('/scoreboard', {
      templateUrl: '/views/Scoreboard.html',
      controller: 'ScoreboardCtrl'
    })
    .when('/sortinghat', {
      templateUrl: '/views/SortingHat.html',
      controller: 'SortingHatCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});

SortingHatApp.run(function() {
  Parse.initialize(
    'x3SjD5Zi2T0QmoumJUNqcweZKw9iGgvFZb5sswVw', 
    'ON6G8XWu8xaLuif2F2Tf6SDw7QuDKHZlqmc9icHj');
  console.log("Initializing Parse App");
});