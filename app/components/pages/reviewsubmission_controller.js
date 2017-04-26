define(['app', 'angular'], function(app, angular){
     app.controller("reviewsubmission_controller", ['$scope', '$timeout', '$location', '$uibModal', '$http', function($scope, $timeout, $location,  $uibModal, $http){
          $scope.stories=[];
          $http({
               "method" : "GET",
               "url" : "testdata.json"
          }).then(function(msg){
               $scope.stories = msg.data.stories;
          });
          

          $scope.onClickStory = function(){
               $scope.currStoryItem = this.story;
               var modalInstance = $uibModal.open({
                    templateUrl : "components/modals/review_modal_template.html",
                    controller: "review_modal",
                    resolve: {
                          storyitem: function () {
                            return $scope.currStoryItem;
                          }
                    }
               });
          }
     }]);
});
