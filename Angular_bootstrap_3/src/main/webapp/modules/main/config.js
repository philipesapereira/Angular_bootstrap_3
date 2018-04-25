(function() {
	'use strict';
	angular.module(MAIN_MODULE, []);
})();

(function() {
	'use strict';
	angular.module(MAIN_MODULE)
	.config(['$stateProvider',function ($stateProvider) {
    	
		$stateProvider
		.state('home', {
		    url: '/home'
	    	,templateUrl: './modules/main/home/home.html'
    		,controller : 'homeCtrl'
			,controllerAs:'vm'
		  })
		  /*
		  .state('acessoNegado', {
		    parent: BASIC_TEMPLATE
		    ,url: '/acessoNegado/:msg'
	    	,templateUrl: './commonpage/acessonegado/acessoNegado.html'
    		,controller:'acessoNegadoController'
			,controllerAs:'vm'
		  })
		  */
    }]);
})();