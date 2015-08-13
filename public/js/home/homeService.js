app.service('homeService', function ($http) {
	this.getProducts = function () {
		return $http({
        	method: 'GET',
        	url: '/api/ecommerce'
    });
	}
});