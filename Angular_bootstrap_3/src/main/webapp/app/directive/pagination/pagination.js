(function() {
	'use strict';
	angular.module(WEB_APP).directive('pagination', function(){
		
		return {
			require: ['ngModel'],
		    restrict: 'E',
		    transclude: {
		        'head': '?paginationHead',
		        'body': 'table',
		      },
		    scope: {
		    	paginacaoContainer 	: '=ngModel'
		    	,onChange 			: '&'
		    }
			,templateUrl: './app/directive/pagination/pagination.html'
			//,bindToController: true
			,controller: ['$scope', function($scope) {
				
				//inicializando
				$scope.paginacaoContainer = {
					lista			: undefined != $scope.paginacaoContainer.lista 			? $scope.paginacaoContainer.lista 			: []
					,listaCompleta	: undefined != $scope.paginacaoContainer.listaCompleta 	? $scope.paginacaoContainer.listaCompleta 	: []
					,totalItens		: undefined != $scope.paginacaoContainer.totalItens 	? $scope.paginacaoContainer.totalItens 		: 0
					,paginaAtual	: undefined != $scope.paginacaoContainer.paginaAtual 	? $scope.paginacaoContainer.paginaAtual 	: 1
					,itensPorPagina : undefined != $scope.paginacaoContainer.itensPorPagina ? $scope.paginacaoContainer.itensPorPagina 	: '10'
				};
				
				if($scope.onChange){
					
					$scope.onChange = function(){
						var start = $scope.paginacaoContainer.itensPorPagina * ($scope.paginacaoContainer.paginaAtual -1);
						var end = $scope.paginacaoContainer.itensPorPagina * $scope.paginacaoContainer.paginaAtual;
						
						$scope.paginacaoContainer.lista = $scope.paginacaoContainer.listaCompleta.slice(start, end);
					};
					
					$scope.$watch('paginacaoContainer.listaCompleta', function() {
						
						if($scope.paginacaoContainer.listaCompleta){
							$scope.paginacaoContainer.paginaAtual = 1;
							$scope.onChange();
						}
				    });
										
				}
				
			}]
		  };	
		
	});
})();