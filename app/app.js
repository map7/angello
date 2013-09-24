var myModule = angular.module('Angello', [])

myModule.controller('MainCtrl', function($scope, angelloHelper, angelloModel) {
	// Add content
	$scope.stories = angelloModel.getStories();
	$scope.statuses = angelloModel.getStatuses();
	$scope.types = angelloModel.getTypes();

	// Create a new story
	$scope.createStory = function() {
		$scope.stories.push({title: 'New Story', description: 'Description pending.'});
	};


	$scope.typesIndex = angelloHelper.buildIndex($scope.types, 'name');
	$scope.statusesIndex = angelloHelper.buildIndex($scope.statuses, 'name');	

	// Setting current Story
	$scope.currentStory;

	$scope.setCurrentStory = function(story) {
		$scope.currentStory = story;
		$scope.currentStatus = $scope.statusesIndex[story.status];
		$scope.currentType = $scope.typesIndex[story.type];
	};

	// Set status & type
	$scope.setCurrentStatus = function(status){
		if(typeof $scope.currentStory !== 'undefined') {
			$scope.currentStory.status = status.name;
		}
	};
	$scope.setCurrentType = function(type){
		if(typeof $scope.currentStory !== 'undefined') {
			$scope.currentStory.type = type.name;
		}
	};

});								// Controller


