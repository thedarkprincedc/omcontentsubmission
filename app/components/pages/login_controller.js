define(['app', 'angular'], function(app, angular){
     app.controller("login_controller", ['$scope', '$timeout','$location', function($scope, $timeout, $location){
          $scope.onClickLogin = function(){
               $http.post("/api/login", {
                    data : $scope.credentials
               }).then(function(msg){

               });
          }
     }]);
})
