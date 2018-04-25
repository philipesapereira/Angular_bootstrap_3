(function() {
    'use strict';
    
    angular
    .module(WEB_APP)
    .factory('asyncWs', asyncWs);

    asyncWs.$inject = ['processing','$q'];
	
    /*
     * Factory para chamadas ao webServices do sistema.
     * Usa a lib do ajax, que permite mais configuracoes do que o $http
     * e envolvida do uma promise do angular para evitar o chamador ter q usar o $scope.$apply()
     */
    function asyncWs(processing,$q) {
	
        var ws = function(method, url, data) {
            
        	var deferred = $q.defer();
        	
        	var call = $.ajax({
                type: method,
                url: '/angular/ws'+url,
                contentType: 'application/json',
                dataType: 'json',
                data: data,
                beforeSend: function() {
                	processing.start();
                  }
            }).always(function() {
            	processing.stop();
            });
        	
        	call.then(function(response){
        		deferred.resolve(response);
        	},function(xhr, status, err) {
        		deferred.reject(xhr, status, err);
	  		});
        	
        	return deferred.promise;
        };
        
        return {
            GET: function(url, data) {
                return ws('GET', url, data);
            },
            POST: function(url, data) {
                return ws('POST', url, data);
            },
            PUT: function(url, data) {
                return ws('PUT', url, data);
            },
            DELETE: function(url, data) {
                return ws('DELETE', url, data);
            }
        };
    };
})();