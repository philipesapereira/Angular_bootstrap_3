$LAB
.script("./lib/jquery-3.2.1.min.js")
  .script("./lib/prefixfree.min.js")
  .script("./lib/angular-1.6.6.min.js")
  .script("./lib/ui-router-1.0.11.min.js")
  .script("./lib/ui-bootstrap-tpls-2.5.0.min.js")
  
  .script("./app/prototype.js")
  .script("./app/constantes.js")
  .script("./app/app.js")
  
  .script("./app/factory/processing.js")
  .script("./app/factory/asyncWs.js")
  
  .script("./app/directive/menu/menuSgr.js")
  .script("./app/directive/tituloFuncionalidade/tituloFuncionalidade.js")
  .script("./app/directive/pageFilter/pageFilter.js")
  .script("./app/directive/pagination/pagination.js")
  .script("./app/directive/formGroup/formGroup.js")
  .script("./app/directive/formGroupDateRange/formGroupDateRange.js")
  
  .script("./modules/main/config.js")
  .script("./modules/main/home/homeCtrl.js")
  
//  .script("").wait()
//  .script("").wait()
//  .script("").wait()
//  .script("").wait()

  
  .wait(function(){angular.bootstrap(document, [WEB_APP]);});