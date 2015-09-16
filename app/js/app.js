var myPage = angular.module('myPage',['ngRoute','ngAnimate','ngWaterfall','ui.bootstrap','myController','myService']);
myPage.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/home',{
		templateUrl:'partials/home.html'
	}).when('/friends',{
		templateUrl:'partials/friends.html',
		controller:'friendCtrl'
	}).when('/life',{
		templateUrl:'partials/life.html',
		controller:'lifeCtrl'
	}).when('/comments',{
		templateUrl:'partials/comments.html'
	}).otherwise({redirectTo:'/home'});
}]);