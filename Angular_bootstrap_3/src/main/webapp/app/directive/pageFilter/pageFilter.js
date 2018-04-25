(function() {
	'use strict';
	angular.module(WEB_APP).directive('pageFilter', function(){
		
		return {
			require: ['ngModel'],
		    restrict: 'E',
		    transclude: true,
		    scope: {
		    	pesquisar 			: '&'
		    }
			,templateUrl: './app/directive/pageFilter/pageFilter.html'
		  };	
		
	});
})();