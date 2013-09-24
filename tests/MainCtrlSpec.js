describe('Controller: MainCtrl', function(){
	// load controller's module
	beforeEach(module('Angello'));

	var MainCtrl,
		scope;

	// Initialise the controller & mock scope
	beforeEach(inject(function($controller){
		scope={};
		MainCtrl=$controller('MainCtrl', {
			$scope: scope
		});
	}));

	it('should attach a list of story types to the scope', function(){
		expect(scope.types).toBeDefined();
	});

	it('should attach a list of story statuses to the scope', function(){
		expect(scope.statuses).toBeDefined();
	});

	it('should attach a list of story to the scope', function(){
		expect(scope.statuses).toBeDefined();
	});

});
