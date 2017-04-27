define(['app', 'angular'], function(app, angular){
     app.controller("reviewsubmission_controller", ['$scope', '$timeout', '$location', '$uibModal', '$http', function($scope, $timeout, $location,  $uibModal, $http){
          $scope.stories=[];
          $http.get("/api/stories").then(function(msg){
               $scope.stories = msg.data;
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
               modalInstance.result.then(function (selectedItem) {
                    var data = {
                         id : $scope.currStoryItem.id,
                         approved: false,
                         declined: false
                    };
                    if(selectedItem == "approved"){

                         $http({
                              "url" : "./resources/submission/approve",
                              "method" : "PUT",
                              "data" : data
                         }).then(function(){

                         });
                    }else if(selectedItem == "declined"){
                         $http({
                              "url" : "./resources/submission/declined",
                              "method" : "PUT",
                              "data" : data
                         }).then(function(){

                         });
                    }
               }, function () {
                    //$log.info('modal-component dismissed at: ' + new Date());
               })
          }
     }]);
});
