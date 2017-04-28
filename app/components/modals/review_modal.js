define(['app', 'angular'], function(app, angular){
     app.controller("review_modal", ['$scope', '$timeout', 'storyitem', '$uibModalInstance', function($scope, $timeout, storyitem, $uibModalInstance){
          $scope.currStoryItem = storyitem;
          console.log(storyitem);

          $scope.onApproveClicked = function(){
                $uibModalInstance.close('approved');
          }
          $scope.onDeleteClicked = function(){
                $uibModalInstance.close('delete');
          }
     }]);
});
