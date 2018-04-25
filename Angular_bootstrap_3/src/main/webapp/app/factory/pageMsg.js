(function() {
    'use strict';
    
    angular
    .module(WEB_APP)
    .factory('pageMsg', pageMsg);

    /**
     * Factory para exibir uma mensagem.
     */
    function pageMsg() {
    	
    	return {
    		aviso	: aviso
    		,erro	: erro
    		,sucesso: sucesso
    		,info	: info
    	};
    	
    	/**
    	 * Exibe uma mensagem do tipo "Alert"
    	 */
		function aviso(mensagem){
			
			show('warning', mensagem);
		}
		
		/**
    	 * Exibe uma mensagem do tipo "Error"
    	 */
		function erro(mensagem){
			
			show('danger', mensagem);
		}
		
		/**
    	 * Exibe uma mensagem do tipo "Success"
    	 */
		function sucesso(mensagem){
			
			show('success', mensagem);
		}
		
		function info(mensagem){
			
			show('info', mensagem);
		}
		
		function show(type, msg){
			
			var alertaTemplate = '<div class="alert alert-'+ type +' alert-dismissible" role="alert"> <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> '+ msg +' </div>';
			$('#pageMsgArea').append(alertaTemplate);
			
			$(".alert").last().delay(6000).slideUp(1000, function() {
				$(this).alert('close');
			});
			
            $('html, body').animate({
                scrollTop: $('html').offset().top
            }, 1000);
			
		}
		
	};
})();