var myModule = angular.module('Angello', [])

myModule.controller('MainCtrl', function($scope) {
	// Add content
	$scope.stories = [
		{title: 'Story 00', description: 'Description pending.'},
		{title: 'Story 01', description: 'Description pending.'},
		{title: 'Story 02', description: 'Description pending.'},
		{title: 'Story 03', description: 'Description pending.'},
		{title: 'Story 04', description: 'Description pending.'},
		{title: 'Story 05', description: 'Description pending.'}
	];

	$scope.currentStory;

	$scope.setCurrentStory = function(story) {
		$scope.currentStory = story;
	};

	
});
