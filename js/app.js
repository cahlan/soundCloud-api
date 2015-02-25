var app = angular.module('sounder', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/tracks', {
			templateUrl: '/templates/tracks.html',
			controller: 'tracksController'
		})
		.when('/users/:userId', {
			templateUrl: '/templates/user.html',
			controller: 'userController',
			resolve:  {
				user: function(soundService, $route) {
					return soundService.getUser($route.current.params.userId);
				}
			}
		})
		.otherwise({
			redirectTo: '/tracks'
		});
})