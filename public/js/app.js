var app = angular.module('eCommerce', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/products', {
			templateUrl: 'js/views/homeTmpl.html',
			controller: 'homeCtrl'
		})
		.when('/admin', {
			templateUrl: 'js/views/adminTmpl.html',
			controller: 'adminCtrl'
		})
		.otherwise({
			redirectsTo: '/products'
		})
})