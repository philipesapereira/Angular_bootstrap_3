(function() {
	'use strict';
	angular.module(WEB_APP).directive('formGroup', function(){
		
		return {
		    restrict: 'E',
		    transclude: true,
		    scope : {
		    	label 	: '@',
		    	id		: '@fgId'
		    },
			templateUrl: './app/directive/formGroup/formGroup.html',
			link: function (scope, elem, attrs) {
				
				var campo = elem.find('input');
				campo = campo.length == 1 ? campo : elem.find('select');
				campo = campo.length == 1 ? campo : elem.find('textarea');
				
				campo.attr('id',attrs.fgId);
				campo.attr('name',attrs.fgId);
				campo.addClass('form-control');
				campo.focus(function(){
					$('#form-group-'+this.id).removeClass('has-error');
				});
			}
		  };	
		
	});
})();