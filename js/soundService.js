angular.module('sounder').service('soundService', function($http, $q) {
	this.getTracks = function(username) {
		var deferred = $q.defer();
		$http({
			method: 'GET',
			url: 'http://api.soundcloud.com/users/' + username + '/tracks.json?client_id=bda4ada8694db06efcac9cf97b872b3e'
		}).then(function(response) {
			deferred.resolve(response.data);
		});
		return deferred.promise;
	};
	this.getUser = function(userId) {
		var deferred = $q.defer();
		$http({
			method: 'GET',
			url: 'http://api.soundcloud.com/users/' + userId + '.json?client_id=bda4ada8694db06efcac9cf97b872b3e'
		}).then(function(response) {
			deferred.resolve(response.data);
		});
		return deferred.promise;
	};
});