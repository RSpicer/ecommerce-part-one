app.service('adminService', function ($http) {
	this.createProduct = function (type, color, price) {
		var newProduct = {
			"type": type,
			"color": color,
			"price": price
		}
		$http.post('/api/ecommerce', newProduct);
		return newProduct;
	}
})