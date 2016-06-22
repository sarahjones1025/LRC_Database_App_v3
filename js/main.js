var db_App = angular.module('db_App', ['ngRoute']);

db_App.controller('mainController', function ($scope) {

});


// ROUTES:

db_App.config(function ($routeProvider) {
	$routeProvider

	.when('/', {
		template:'../views/home.html',
		controller:'mainController'
	})

	.when('/firstPage', {
		template:'../views/firstPage.html',
		controller:'mainController'
	});


});

// CONTROLLERS:

// db_App.controller('homeController', ['$scope', function ($scope) {

	
// }] )