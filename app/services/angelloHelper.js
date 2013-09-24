// Helper functions
myModule.factory('angelloHelper', function(){
	// Build indexes based on a property for quick lookup
	var buildIndex = function(source, property){
		var tempArray = [];

		for(var i=0, len=source.length; i<len; i++){
			tempArray[source[i][property]]=source[i];
		}

		return tempArray;
	};

	return {
		buildIndex: buildIndex
	};
});
