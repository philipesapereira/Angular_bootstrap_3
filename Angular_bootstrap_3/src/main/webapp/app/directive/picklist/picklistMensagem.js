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
    .directive('picklistMensagem', picklistMensagem);

	picklistMensagem.$inject = [];
	
    /**
     * Diretiva para cirar um picklist.
     */
    function picklistMensagem() {
    	
    	var template = 
        	"<style>.itemSelecionado {background-color: #c0c0c0!important;} .panel > .list-group:last-child .list-group-item:last-child{border-bottom: 1px #ddd solid;}</style>"
        	+"<table style='width:100%' >"
    		+"	<tr>"	
    		+"		<td style='width:40%;vertical-align: top;'>"
    		+"			<div class='panel panel-primary' style='min-height:300px;'>"
    		+"				<div class='panel-heading'>"
    		+"					<h3 class='panel-title bold text-center'><span>{{disponiveisheader}}</span></h3>"
    		+"				</div>"
    		+"				<ul class='list-group'>"
    		+"					<li ng-repeat='item in disponiveis'" 
    		+"					class='list-group-item ng-class:{\"itemSelecionado\": item.check}'"
    		+"					ng-click='selecionaItemDisponiveis(item)'>"
    		+"						<div ng-bind='item.{{label}}'></div>"
    		+"					</li>"
    		+"				</ul>"
    		+"			</div>"
    		+"		</td>"
    		+"		<td style='width:10%'>"
    		+"			<div class='container-fluid' style='padding: 0;'>"
    		+"				<div class='row' style='margin-bottom: 10px;'>"
    		+"					<div class='text-center col-xs-12'>"
    		+"						<button ng-click='moverParaSelecionados()' class='btn btn-default' ><i class='glyphicon glyphicon-chevron-right' aria-hidden='true'></i></button>"
    		+"					</div>"
    		+"				</div>"
    		+"				<div class='row' style='margin-bottom: 10px;'>"
    		+"					<div class='text-center col-xs-12'>"
    		+"						<button ng-click='moverParaDisponiveis()' class='btn btn-default' ><i class='glyphicon glyphicon-chevron-left' aria-hidden='true'></i></button>"
    		+"					</div>"
    		+"				</div>"
    		+"			</div>"
    		+"		</td>"
    		+"		<td style='width:40%;vertical-align: top;'>"
    		+"			<div class='panel panel-primary' style='min-height:300px;'>"
    		+"				<div class='panel-heading'>"
    		+"					<h3 class='panel-title bold text-center'><span>{{selecionadosheader}}</span></h3>"
    		+"				</div>"
    		+"				<ul class='list-group'>"
    		+"		  			<li ng-repeat='item in selecionados'"
    		+"		  				class='list-group-item ng-class:{\"itemSelecionado\": item.check}'"
    		+"		  				ng-click='selecionaItemSelecionados(item)'>"
    		+"		  				<div ng-bind='item.{{label}}'></div>"
    		+"	  				</li>"
    		+"				</ul>"
    		+"			</div>"
    		+"		</td>"
    		+"		<td style='width:10%'>"
    		+"			<div class='container-fluid' style='padding: 0;'>"
    		+"				<div class='row' style='margin-bottom: 10px;'>"
    		+"					<div class='text-center col-xs-12'>"
    		+"						<button ng-click='moverParaCima()' class='btn btn-default' ><i class='glyphicon glyphicon-chevron-up' aria-hidden='true'></i></button>"
    		+"					</div>"
    		+"				</div>"
    		+"				<div class='row' style='margin-bottom: 10px;'>"
    		+"					<div class='text-center col-xs-12'>"
    		+"						<button ng-click='moverParaBaixo()' class='btn btn-default' ><i class='glyphicon glyphicon-chevron-down' aria-hidden='true'></i></button>"
    		+"					</div>"
    		+"				</div>"
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
    		,controller  : 'picklistMensagemCtrl'
    	};
    }
})();

(function() {
    'use strict';
	angular
    .module(WEB_APP)
    .controller('picklistMensagemCtrl', picklistMensagemCtrl);

	picklistMensagemCtrl.$inject = ['$scope'];
	
    /**
     * Controller do picklist.
     */
    function picklistMensagemCtrl($scope) {
    	
    	//variaveis 
    	$scope.disponiveisheader 	= $scope.disponiveisheader 	|| 'De:';
    	$scope.selecionadosheader 	= $scope.selecionadosheader || 'Para:';

    	//funcoes publicas
    	$scope.selecionaItemDisponiveis		= selecionaItemDisponiveis;
    	$scope.selecionaItemSelecionados	= selecionaItemSelecionados;
		$scope.moverParaDisponiveis			= moverParaDisponiveis;
		$scope.moverParaSelecionados 		= moverParaSelecionados;
		$scope.moverParaCima				= moverParaCima;
		$scope.moverParaBaixo				= moverParaBaixo;
		start();
		
		function start(){
			
			for(var i = 0; i < $scope.disponiveis.length; i++){
				$scope.disponiveis[i].indexOriginal = i;
			}
			
		}
		
		function selecionaItemDisponiveis(itemSelecionado){
			
			$scope.disponiveis.forEach(function(item){
				item.check = false;
			});
			itemSelecionado.check = true;
		}
		
		function selecionaItemSelecionados(itemSelecionado){
			
			$scope.selecionados.forEach(function(item){
				item.check = false;
			});
			itemSelecionado.check = true;
		}
		
		function moverParaDisponiveis(){
			
			for(var i = 0; i < $scope.selecionados.length; i++){
				
				if($scope.selecionados[i].check){

					if($scope.selecionados[i].grupo){
						
						var grupo = getInicioFimGrupo($scope.selecionados[i]);
						
						grupo.inicio.check = false;
						$scope.disponiveis.push(grupo.inicio);
						
						$scope.selecionados.splice($scope.selecionados.indexOf(grupo.inicio), 1);
						$scope.selecionados.splice($scope.selecionados.indexOf(grupo.fim), 1);
						
					}else {
						
						$scope.selecionados[i].check = false;
						$scope.disponiveis.push($scope.selecionados[i]);
						$scope.selecionados.splice(i, 1);
					}
					
				}
			}

			$scope.disponiveis.sort(function(a,b){
				return a.indexOriginal - b.indexOriginal;
			});
		}
		
		function getInicioFimGrupo(grupo){
			
			var inicio  = "";
			var fim		= "";
			
			$scope.selecionados.forEach(function(item){
				
				if(item.indexOriginal === grupo.indexOriginal){
					
					if(item[$scope.label].indexOf("</") !== -1){
						fim = item;
					}else {
						inicio = item;
					}
					
				}
				
			});
			
			return {
				inicio 	: inicio
				,fim	: fim
			};
		}
		
		function moverParaSelecionados(){
			
			var deSelIndex = getSelecionadoIndex($scope.disponiveis);
			var paraSelIndex = getSelecionadoIndex($scope.selecionados);
			
			$scope.disponiveis[deSelIndex].check = false;
			
			
			if($scope.disponiveis[deSelIndex].grupo){
				var fechamento = JSON.parse(JSON.stringify($scope.disponiveis[deSelIndex]));
				
				console.log(fechamento);
				
				fechamento[$scope.label] = fechamento[$scope.label].replace('<','</');
				fechamento.$$hashKey = "";
				
				$scope.selecionados.splice(paraSelIndex+1,0,$scope.disponiveis[deSelIndex], fechamento);
			}else {
				
				$scope.selecionados.splice(paraSelIndex+1,0,$scope.disponiveis[deSelIndex]);
			}
			
			$scope.disponiveis.splice(deSelIndex, 1);
			
		}
		
		function moverParaCima(){
			
			var paraSelIndex = getSelecionadoIndex($scope.selecionados);
			
			var item = $scope.selecionados[paraSelIndex];
			$scope.selecionados.splice(paraSelIndex, 1);
			
			$scope.selecionados.splice(paraSelIndex-1,0,item);
		}
		
		function moverParaBaixo(){
			
			var paraSelIndex = getSelecionadoIndex($scope.selecionados);
			
			var item = $scope.selecionados[paraSelIndex];
			$scope.selecionados.splice(paraSelIndex, 1);
			
			$scope.selecionados.splice(paraSelIndex+1,0,item);
		}
		
		function getSelecionadoIndex(lista){
			var i = 0;
			
			for(i ; i < lista.length; i++){
				if(lista[i].check){
					break;
				}
			}
			return i;
		}
    }
})();