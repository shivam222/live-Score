var app=angular.module('app',[]);

app.controller('live',function($scope,$http){
	 
	 $scope.update=function(){
	  $http.get('http://cricapi.com/api/cricketScore?unique_id=1027073')
	  .success(function(response){
		   
		  $scope.arr1=response.score;
		 $scope.arr2=$scope.arr1.slice(0,9);
		 $scope.arr3=$scope.arr1.slice(11,18);
		 $scope.arr4=$scope.arr1.slice(18,$scope.arr1.length)
		 });
	 }
});