var myController = angular.module('myController',[]);
myController.controller('friendCtrl',['$scope','Friend',function($scope,Friend){
	$scope.friends = Friend.query();
	$scope.setBlock = function(img){
		$scope.imgClicked = img;
	}
}]);
myController.controller('lifeCtrl',['$scope','Life',function($scope,Life){
	$scope.lifes = Life.query();
}])