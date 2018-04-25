(function() {
	'use strict';	
	angular.module(WEB_APP).directive('menuSgr',function(){
		return {
			templateUrl: './app/directive/menu/menuLateral.html',
			scope : {},
			controller: menuSgrCtrl
		};
	});

	angular.module(WEB_APP).controller('menuSgrCtrl',menuSgrCtrl);
	menuSgrCtrl.$inject = ['$scope','$rootScope','asyncWs'];
	
	function menuSgrCtrl($scope,$rootScope,asyncWs){
		
		$scope.menu = [];
		
		(function(){
			
			asyncWs.GET('/seguranca/processosAutorizados')
			.then(function(response) {
	      		
	      		console.log(response.data);
	      	}
	      	,function(xhr, status, err) {
	      		console.log('erro '+err);
	  		});
			
			$scope.menu[new String(1)] = {
				codigo 	: '1'
				,nome	: 'Home'
			};
		})();
	};


})();