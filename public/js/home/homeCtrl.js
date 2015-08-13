app.controller('homeCtrl', function ($scope, homeService) {
	$scope.getProducts = function () {
		homeService.getProducts().then(function(response) {
			$scope.products = response.data;
		})
	}
	$scope.getProducts();
})