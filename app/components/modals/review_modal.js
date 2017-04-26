define(['app', 'angular'], function(app, angular){
     app.controller("review_modal", ['$scope', '$timeout', 'storyitem', function($scope, $timeout, storyitem){
          $scope.currStoryItem = storyitem;
          console.log(storyitem);
          $scope.onApproveClicked = function(){

          }
          $scope.onDeleteClicked = function(){

          }
     }]);
});
