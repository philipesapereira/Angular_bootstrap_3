(function() {
	'use strict';
	angular.module(WEB_APP).factory('processing', processing);
	
	var style = "<style type='text/css'>"
		+"#processing{"
		+"position:fixed;"
		+"left:50%;"
		+"top:50%;"
		+"margin-left: -64px;"
		+"margin-top: -64px;"
		+"width:128px;"
		+"height:128px;"
		+"z-index:9900;"
		+"}"
		
		+"#processing_bg{"
		+"position:absolute;"
		+"left:0;"
		+"top:0;"
		+"z-index:9000;"
		+"background-color:#000;"
		+"opacity:0.2;"
		+"transition: opacity 0.15s linear 0s;}"
		+"</style>"
		;

	var template = style 
		+ "<div id='processing'><img src='./imgs/carregando.gif' width='128' height='128' alt='processing'/>"
		+"</div><div id='processing_bg'></div>";
	
	function processing() {
	
		return {
			start	: start
			,stop	: stop
		};

		function start(){
			
			$('body').append(template);
			
			var alturaTela = $(document).height();
			var larguraTela = $(window).width();
			
			$('#processing_bg').css({'width':larguraTela,'height':alturaTela});
		}
		
		function stop(){
			$('#processing').detach();
			$('#processing_bg').detach();
		}
		
	};
})();