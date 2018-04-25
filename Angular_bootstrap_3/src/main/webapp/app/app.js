(function() {
	'use strict';
	angular.module(WEB_APP, [
	 	'ui.router'
	 	,'ui.bootstrap'
	 	,MAIN_MODULE
 	
 	]).config(['$urlRouterProvider',function ($urlRouterProvider) {
		  $urlRouterProvider.otherwise('/home');
  }]);
})();