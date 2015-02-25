angular.module('sounder').controller('tracksController', function($scope, $sce,  soundService) {
	$scope.getTracks = function() {
		soundService.getTracks($scope.searchText).then(function(tracks) {
			$scope.tracks = tracks;
		});
	};
	$scope.play = function(track_url) {
		SC.oEmbed(track_url, { auto_play: true }, function(oEmbed) {
	      $scope.$apply($scope.player_html = $sce.trustAsHtml(oEmbed.html));
	    });
	};
});