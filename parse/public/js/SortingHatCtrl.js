'use strict';

angular.module('SortingHatApp').controller('SortingHatCtrl', function($scope) {
  $scope.Guest = Parse.Object.extend('Guest');
  $scope.showGif = false;
  $scope.timeLeft = 10;
  $scope.sorted = false;
  $scope.doIt = function() {
    console.log("User getting sorted.");
    if (!$scope.muggleName) {
      alert("Enter your damn name!!");
      return;
    }
    $scope.showGif = true;
    (function tick() {
      console.log("Ticking");
      $scope.timeLeft -= 1;
      if ($scope.timeLeft == 0) {
        $scope.showGif = false;
        $scope.sorted = true;
        $scope.$apply();
        return;
      }
      $scope.$apply();
      setTimeout(tick, 1000);
    })();
    $scope.pickHouse();
  }

  $scope.pickHouse = function() {
    var houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];
    $scope.muggleHouse = houses[Math.floor(Math.random() * houses.length)];
    console.log("Muggle's house is: " + $scope.muggleHouse);
    $scope.uploadGuest($scope.muggleName, $scope.muggleHouse);
  }

  $scope.uploadGuest = function(name, house) {
    var guest = new $scope.Guest();
    guest.set("name", name);
    guest.set("house", house);
    guest.set("score", 0);
    guest.save(null, {
      success: function(guest) {
        console.log('New guest created with objectId: ' + guest.id);
      },
      error: function(guest, error) {
        alert('Failed to create new guest, with error code: ' + error.message);
      }
    });
  }
});