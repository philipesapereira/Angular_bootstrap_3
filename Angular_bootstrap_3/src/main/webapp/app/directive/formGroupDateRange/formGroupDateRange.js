(function() {
	'use strict';
	angular.module(WEB_APP).directive('formGroupDateRange', function(){
		
		return {
		    restrict: 'E',
		    require: ['ngModel'],
		    scope : {
		    	label 		: '@',
		    	id			: '@fgId',
		    	dateRange 	: '=ngModel',
		    },
			templateUrl: './app/directive/formGroupDateRange/formGroupDateRange.html',
			link: function (scope, elem, attrs) {
				
				angular.element(elem.find('input')[0]).focus(function(){
					$('#form-group-'+attrs.fgId).removeClass('has-error');
				});
				
				angular.element(elem.find('input')[1]).focus(function(){
					$('#form-group-'+attrs.fgId).removeClass('has-error');
				}); 
				
			}
		  };	
		
	});
})();