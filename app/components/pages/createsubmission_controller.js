define(['app', 'angular'], function(app, angular){
     app.controller("createsubmission_controller", ['$scope', '$timeout','$location', function($scope, $timeout, $location){
          $scope.screen = 0;
          $scope.submitform = {};
          $scope.alerts = [];
          $scope.submitted = true;
          $scope.$watch("submitform", function(val, oldVal){
               if(val.name !== '' && /[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z0-9]+/.test(val.email) && val.desc !== ''){
                    $scope.submitted = false;
                    return;
               }
               $scope.submitted = true;
          },true);
          $scope.onSubmitForm = function(){
                $timeout(function(){
                     $scope.alerts.push({msg: 'Successfully uploaded form', type:'success'});
                },3000).then(function(){
                      $scope.alerts.push({msg: 'Failed to upload form', type:'danger'});
                });
          }
     }]);
});
