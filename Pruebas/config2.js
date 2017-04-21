var app2=angular.module("app2", ['ngRoute','ngAnimate']);

app2.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/home', {
		templateUrl : 'home.html'
	})
	.when("/juegos", {
		templateUrl : 'juegos.html'
	})
	.when("/contact", {
		templateUrl : 'contact.html'
	});
	
}]);

app2.controller('ctr', function($scope,$http){
	
	$scope.juegos=[];
	$scope.added=true;

	$scope.enviar=function(){
		
		$scope.juegos.push(angular.copy($scope.juegosnuevos));
		$scope.juegosnuevos={};
		$scope.added=true;
	};

	$scope.add=function(){
		$scope.added=false;
	};
});	



