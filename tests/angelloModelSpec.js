describe("Service: angelloModel", function(){
	beforeEach(module('Angello'));

	var modelService;
	
	// Initialise the service
	beforeEach(inject(function(angelloModel){
		modelService = angelloModel;
	}));
	
	describe("#getStatuses", function(){
		it('should return seven different statuses', function(){
			expect(modelService.getStatuses().length).toBe(7);
		});
	});
});
