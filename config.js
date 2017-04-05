var app1=angular.module("app1",['ngRoute']);

app1.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when("/", {
      templateUrl : "home.html"
  })
  .when("/form", {
      templateUrl : "form.html"
  }).when("/lista", {
      templateUrl : "listauser.html"
  });

}]);

  app1.controller('ctrl',function($scope,$interval){

  	$scope.Time=new Date().toLocaleTimeString();
  	$interval(function(){

  		$scope.Time=new Date().toLocaleTimeString();},1000);


  


  });

 app1.controller('ctrl2',function($scope){

 	$scope.usuarios=[{'user':'Pepe','edad':'30','mail':'pepe@qqq.com'},
 	{'user':'Berto','edad':'20','mail':'berto@qqw.com'},
 	{'user':'Ana','edad':'45','mail':'ana@qqa.com'},
 	{'user':'Julia','edad':'19','mail':'julia@qqsq.com'},
 	{'user':'Juan','edad':'50','mail':'juan@qeq.com'},
 	{'user':'Laura','edad':'38','mail':'laura@qpq.com'},];

 });