(function () {
	'use strict'

	angular
		.module('pokemon')
		.factory('pokemonApi',pokemonApi);

	function pokemonApi($resource){
		return $resource("http://pokeapi.co/api/v2/pokemon/:id");
	}

})();