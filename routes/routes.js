(function () {
	'use strict'

	angular
		.module('pokemon')
		.config(configur);

	configur.$inject = ['$routeProvider'];

	function configur($routeProvider) {
		$routeProvider
			.when('/',{
				template:`<pokemon id="6"></pokemon>`
			})
			.otherwise({
				redirectTo:'/'
			});
	}

})();