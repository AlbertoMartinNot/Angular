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

app1.controller('ctrl2',function($scope,lista){

  $scope.add=lista.addUser(name,edad,mail);
  $scope.eliminar=lista.eliminar(usr);

  

});

app1.service('lista',function(){

  var usuarios=[{'user':'Pepe','edad':'30','mail':'pepe@qqq.com'},
  {'user':'Berto','edad':'20','mail':'berto@qqw.com'},
  {'user':'Ana','edad':'45','mail':'ana@qqa.com'},
  {'user':'Julia','edad':'19','mail':'julia@qqsq.com'},
  {'user':'Juan','edad':'50','mail':'juan@qeq.com'},
  {'user':'Laura','edad':'38','mail':'laura@qpq.com'},];

  this.addUser=function(name,edad,mail){
   var user={'user': name,'edad': edad,'mail': mail};
   $usuarios.push(user);
   console.log($usuarios);

 }

 this.eliminar=function(usr){
   var index=$usuarios.indexOf(usr);
   $usuarios.splice(index,1);


 }


});