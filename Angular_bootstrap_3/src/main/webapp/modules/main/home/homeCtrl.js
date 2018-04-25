(function() {
	'use strict';
	angular.module(MAIN_MODULE)
	.controller('homeCtrl',homeCtrl);
	
	homeCtrl.$inject = 
		['$scope','$rootScope'];
	
	function homeCtrl($scope,$rootScope){
	
		/* jshint validthis: true */
		var vm = this;
		
		//variaveis
		var database = [];
		
		vm.filtro = {
			dateRange 	: {
				inicio 	: ''
				,fim	: ''	
			}
			,endereco	: ''
			,uf			: ''	
		};
		
		vm.paginacaoContainer = {
			lista			: []
			,totalItens		: 0
			,paginaAtual	: 1
		};
		
		
		//funcoes publicas
		vm.listarTestes = listarTestes;
		
		var c = 0;
		
		/* INIT */
		(function(){
			
			
		})();
		
		function listarTestes(){
			c++;
//			var start = vm.paginacaoContainer.itensPorPagina * (vm.paginacaoContainer.paginaAtual -1);
//			var end = vm.paginacaoContainer.itensPorPagina * vm.paginacaoContainer.paginaAtual;
//			
//			vm.paginacaoContainer.lista = database.slice(start, end);
			
			console.log(vm.filtro.dateRange.inicio);
			console.log(vm.filtro.dateRange.fim);
			
			load();
			vm.paginacaoContainer.listaCompleta = database;
			vm.paginacaoContainer.totalItens = database.length;
		}
		
		function load(){
			database = [];
			for(var i=1;i<=104;i++){
				
				database.push({
					id:i
					,nome:'nome '+i +' '+c
					,sobreNome:'sobrenome '+i
					,userName:'username ' + i
					,uf:vm.filtro.uf
				});
				
			}
		}
		
	};
})();