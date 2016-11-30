angular.module('MainCtrl', []).controller('MainController', function($scope, $http) {



	$scope.tagline = 'To the moon and back!';	
	$http.get('https://data.nola.gov/resource/ahnh-7f2h.json')
		.success(function(data){
			console.log('SUCCESS GETTING ALL DATA.',data);
			parseData(data)
			$scope.numberOfCalls = data.length;
		})
		.error(function(data){
			console.log('ERROR. DATA:', data);
	});
	function parseData(data) {
		var allAddresses = [];
		angular.forEach(data, function(value, key){
			allAddresses.push(value.block_address);
		});
		calcMostAddr(allAddresses)
	}
	function calcMostAddr(allAddresses) {
		allAddresses.sort()
		var counts = {};
		allAddresses.forEach(function(x) { counts[x] = (counts[x] || 0)+1; });
		console.log(allAddresses);
		console.log(counts);
	}

});
