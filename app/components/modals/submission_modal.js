define(['app', 'angular'], function(app, angular){
     app.controller("submission_modal", ['$scope', '$timeout', '$uibModalInstance','submissionData',function($scope, $timeout, $uibModalInstance, submissionData){
          $scope._submission = submissionData;
          $scope.onClickAddSubmission = function(){
               $uibModalInstance.close('addSubmission');
          }
          $scope.onClickClose = function(){
               $uibModalInstance.close('dismiss');
          }
     }]);
});
