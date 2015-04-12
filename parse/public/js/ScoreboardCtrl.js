'use strict';

angular.module('SortingHatApp').controller('ScoreboardCtrl', function($scope) {
  $scope.Guest = Parse.Object.extend('Guest');
  $scope.guests = [];
  $scope.totals = {
    "Gryffindor": 0,
    "Ravenclaw": 0,
    "Hufflepuff": 0,
    "Slytherin": 0
  };

  $scope.refreshScore = function() {
    var query = new Parse.Query($scope.Guest);
    query.find({
      success: function(results) {
        $scope.guests = results;
        var newTotals = {
          "Gryffindor": 0,
          "Ravenclaw": 0,
          "Hufflepuff": 0,
          "Slytherin": 0
        };
        for (var i in results) {
          var guest = results[i];
          newTotals[guest.get('house')] += guest.get('score');
        }
        $scope.totals = newTotals;
        $scope.$apply();
      },
      error: function(error) {
        alert("Error: " + error.code + " " + error.message);
      }
    });
  };

  (function tick() {
    $scope.refreshScore();
    setTimeout(tick, 2000);
  })();
});