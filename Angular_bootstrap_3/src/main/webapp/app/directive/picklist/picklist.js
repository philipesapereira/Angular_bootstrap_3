/**
 * Importar o modulo "picklist" no app
 * Requer angular 1.x e bootstrap.css
 * 
 * EXEMPLO DE USO
 * 
 * <picklist
 *	disponiveis="vm.listaA"           //bind lista de itens disponiveis (esquerda)
 *	selecionados="vm.listaB"		  //bind da lista de itens selecionados (direita)
 *	label="nome"					  //propriedade do objeto da lista que sera exibido no picklist
 *	disponiveisheader="Disponiveis"   //texto do cabecalho da lista da lista de disponiveis  (opcional) 
 *	selecionadosheader="Selecionados" //texto do cabecalho da lista da lista de selecionados (opcional)
 *	/>
 */
(function() {
    'use strict';
	angular
    .module(WEB_APP)
    .directive('picklist', picklist);

	picklist.$inject = [];
	
    /**
     * Diretiva para cirar um picklist.
     */
    function picklist() {
    	
    	var template = 
        	"<style>.itemSelecionado {background-color: #c0c0c0!important;}</style>"
        	+"<table style='width:100%' >"
    		+"	<tr>"	
    		+"		<td style='width:45%;vertical-align: top;'>"
    		+"			<div class='panel panel-primary'>"
    		+"				<div class='panel-heading'>"
    		+"					<h3 class='panel-title bold text-center'><span>{{disponiveisheader}}</span></h3>"
    		+"				</div>"
    		+"				<ul class='list-group'>"
    		+"					<li ng-repeat='item in disponiveis'" 
    		+"					class='list-group-item ng-class:{\"itemSelecionado\": item.check}'"
    		+"					ng-click='item.check = !item.check'>"
    		+"						<div ng-bind='item.{{label}}'></div>"
    		+"					</li>"
    		+"				</ul>"
    		+"			</div>"
    		+"		</td>"
    		+"		<td style='width:10%'>"
    		+"			<div class='container-fluid' style='padding: 0;'>"
    		+"				<div class='row' style='margin-bottom: 10px;'>"
    		+"					<div class='text-center col-xs-12'>"
    		+"						<button ng-click='moverParaSelecionados()' class='btn btn-default' >></button>"
    		+"					</div>"
    		+"				</div>"
    		+"				<div class='row' style='margin-bottom: 10px;'>"
    		+"					<div class='text-center col-xs-12'>"
    		+"						<button ng-click='moverParaDisponiveis()' class='btn btn-default' ><</button>"
    		+"					</div>"
    		+"				</div>"
    		+"				<div class='row' style='margin-bottom: 10px;'>"
    		+"					<div class='text-center col-xs-12'>"
    		+"						<button ng-click='moverTodosParaSelecionados()' class='btn btn-default' >>></button>"
    		+"					</div>"
    		+"				</div>"
    		+"				<div class='row' style='margin-bottom: 10px;'>"
    		+"					<div class='text-center col-xs-12'>"
    		+"						<button ng-click='moverTodosParaDisponiveis()' class='btn btn-default' ><<</button>"
    		+"					</div>"
    		+"				</div>"
    		+"			</div>"
    		+"		</td>"
    		+"		<td style='width:45%;vertical-align: top;'>"
    		+"			<div class='panel panel-primary'>"
    		+"				<div class='panel-heading'>"
    		+"					<h3 class='panel-title bold text-center'><span>{{selecionadosheader}}</span></h3>"
    		+"				</div>"
    		+"				<ul class='list-group'>"
    		+"		  			<li ng-repeat='item in selecionados'"
    		+"		  				class='list-group-item ng-class:{\"itemSelecionado\": item.check}'"
    		+"		  				ng-click='item.check = !item.check'>"
    		+"		  				<div ng-bind='item.{{label}}'></div>"
    		+"	  				</li>"
    		+"				</ul>"
    		+"			</div>"
    		+"		</td>"
    		+"	</tr>	"	
    		+"</table>";
    	
    	return {
    		restrict : 'E'
    		,scope : {
    			disponiveis 		: '='
				,selecionados 		: '='
				,disponiveisheader 	: '@'
				,selecionadosheader	: '@'
				,label				: '@'
    		}
    		,template	 : template
    		,controller  : 'picklistCtrl'
    	};
    }
})();

(function() {
    'use strict';
	angular
    .module('picklist')
    .controller('picklistCtrl', picklistCtrl);

	picklistCtrl.$inject = ['$scope'];
	
    /**
     * Controller do picklist.
     */
    function picklistCtrl($scope) {
    	
    	//variaveis 
    	$scope.disponiveisheader 	= $scope.disponiveisheader 	|| 'De:';
    	$scope.selecionadosheader 	= $scope.selecionadosheader || 'Para:';

    	//funcoes publicas
		$scope.moverParaDisponiveis			= moverParaDisponiveis;
		$scope.moverParaSelecionados 		= moverParaSelecionados;
		$scope.moverTodosParaDisponiveis	= moverTodosParaDisponiveis;
		$scope.moverTodosParaSelecionados 	= moverTodosParaSelecionados;
		
		function moverParaDisponiveis(){
			
			for(var i = 0; i < $scope.selecionados.length; i++){
				if($scope.selecionados[i].check){
					$scope.selecionados[i].check = false;
					$scope.disponiveis.push($scope.selecionados[i]);
					$scope.selecionados.splice(i, 1);
					i--;
				}
			}
		}
		
		function moverParaSelecionados(){
			for(var i = 0; i < $scope.disponiveis.length; i++){
				if($scope.disponiveis[i].check){
					$scope.disponiveis[i].check = false;
					$scope.selecionados.push($scope.disponiveis[i]);
					$scope.disponiveis.splice(i, 1);
					i--;
				}
			}
		}
		
		function moverTodosParaDisponiveis(){
			$scope.selecionados.forEach(function(item){
				item.check = false;
				$scope.disponiveis.push(item);
			});
			$scope.selecionados = [];
		}
		
		function moverTodosParaSelecionados(){
			$scope.disponiveis.forEach(function(item){
				item.check = false;
				$scope.selecionados.push(item);
			});
			$scope.disponiveis = [];
		}
    }
})();