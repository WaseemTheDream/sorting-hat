'use strict';

var SortingHatApp = angular.module('SortingHatApp', []);

SortingHatApp.run(function() {
  Parse.initialize(
    'x3SjD5Zi2T0QmoumJUNqcweZKw9iGgvFZb5sswVw', 
    'ON6G8XWu8xaLuif2F2Tf6SDw7QuDKHZlqmc9icHj');
  console.log("Initializing Parse App");
});

SortingHatApp.controller('MainCtrl', function($scope) {
  $scope.appTitle = "Sorting Hat @ 623";
  $scope.Guest = Parse.Object.extend('Guest');
  $scope.guests = [];

  var query = new Parse.Query($scope.Guest);
  query.find({
    success: function(results) {
      console.log("Successfully retrieved " + results.length + " guests.");
      console.log(results);
      $scope.guests = results;
      $scope.$apply();
    },
    error: function(error) {
      alert("Error: " + error.code + " " + error.message);
    }
  });
});