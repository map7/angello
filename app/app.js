var myModule = angular.module('Angello', [])

myModule.controller('MainCtrl', function($scope) {
	// Add content
	$scope.stories = [
		{
			title: 'Story 00',
			description: 'Description pending.',
			criteria: 'Criteria pending',
			status:'To Do',
			type:'Feature',
			reporter:'Lukas Ruebbelke',
			assignee:'Brian Ford'
		},
		{
			title: 'Story 01',
			description: 'Description pending.'
		},
		{
			title: 'Story 02',
			description: 'Description pending.'
		},
		{
			title: 'Story 03',
			description: 'Description pending.'
		},
		{
			title: 'Story 04',
			description: 'Description pending.'
		},
		{
			title: 'Story 05',
			description: 'Description pending.'
		}
	];

	$scope.statuses = [
		{name: 'Back Log'},
		{name: 'To Do'},
		{name: 'In Progress'},
		{name: 'Code Review'},
		{name: 'QA Review'},
		{name: 'Verified'},
		{name: 'Done'}
	];
		
	$scope.types = [
		{name:'Feature'},
		{name:'Enhancement'},
		{name:'Bug'},
		{name:'Spike'}
	];

	// Setting current Story
	$scope.currentStory;

	$scope.setCurrentStory = function(story) {
		$scope.currentStory = story;
	};

	// Create a new story
	$scope.createStory = function() {
		$scope.stories.push({title: 'New Story', description: 'Description pending.'});
	};
});
