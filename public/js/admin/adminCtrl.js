app.controller('adminCtrl', function ($scope, adminService) {
	$scope.createProduct = function () {
		var newProdType = $scope.createProdType;
		var newProdColor = $scope.createProdColor;
		var newProdPrice = $scope.createProdPrice;
		adminService.createProduct(newProdType, newProdColor, newProdPrice);
		$scope.createProdType = "";
		$scope.createProdColor = "";
		$scope.createProdPrice = "";
		console.log('ctrl hit');
	}
})