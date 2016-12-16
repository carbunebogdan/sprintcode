angular.module('app.controllers',[
		'app.directives'
	])

.controller('home',['$scope',function($scope){
	$scope.hello="Hello world!";
}]);