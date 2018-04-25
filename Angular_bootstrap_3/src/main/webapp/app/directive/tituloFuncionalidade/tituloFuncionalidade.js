(function() {
	'use strict';
	angular.module(WEB_APP).directive('tituloFuncionalidade', function(){
		
		return {
		    restrict: 'E',
		    scope: {
		    	nome 			: '@'
		    	,confidencial	: '@'
		    }
			,templateUrl: './app/directive/tituloFuncionalidade/tituloFuncionalidade.html'
		  };	
		
	});
})();