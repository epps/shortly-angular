angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  angular.extend($scope, Links);
  $scope.link = {};
  // $scope.addLink = function(link) {
  // 	console.log('adding link');
  // };

});
