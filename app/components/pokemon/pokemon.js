(function() {
	'use strict'

	var pokemon={
		bindings:{
			id:"="
		},
		controller: pokemonCtrl,
		templateUrl:'/app/components/pokemon/pokemon.html'
	}

	angular
		.module('pokemon')
		.component('pokemon',pokemon);

	function pokemonCtrl(pokemonApi) {
		var pok = this;
		pok.pokes = pokemonApi.get({
			id:pok.id
		});
		console.log(pok.pokes);
	}

})();