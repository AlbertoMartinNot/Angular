var app1=angular.module('app1',[]);

app1.controller('ctr1',function($scope){
	var est=[{'mes':"Enero",'estacion':"Invierno"}
	,{'mes':"Junio",'estacion':"Verano"}
	,{'mes':"Mayo",'estacion':"Primavera"}
	,{'mes':"Febrero",'estacion':"Invierno"}
	,{'mes':"Marzo",'estacion':"Primavera"}
	,{'mes':"Abril",'estacion':"Primavera"}
	,{'mes':"Julio",'estacion':"Verano"}
	,{'mes':"Agosto",'estacion':"Verano"}
	,{'mes':"Septiembre",'estacion':"Otoño"}
	,{'mes':"Octubre",'estacion':"Otoño"}
	,{'mes':"Noviembre",'estacion':"Otoño"}
	,{'mes':"Diciembre",'estacion':"Invierno"}];

	$scope.estacion=est[Math.floor((Math.random()*12))];

});