define(['app', 'angular', 'moment'], function(app, angular, moment){
     app.controller("reviewsubmission_controller", ['$scope', '$timeout', '$location', '$uibModal', '$http', function($scope, $timeout, $location,  $uibModal, $http){
          $scope.stories=[];
          $scope.checkboxModel = [];
          $scope.selection = true;
          $http.get("/api/stories").then(function(msg){
               msg.data.map(function(value){
                    value.submission_date_d = moment(value.submission_date).format("MMM DD");
                    return value;
               });
               $scope.stories = msg.data;
          });
          $scope.$watch("checkboxModel", function(val, oldVal){
               if(val){
                    angular.forEach(val, function(v){
                         if(v!== false){
                              $timeout(function(){
                                        $scope.selection = false;
                              })

                              return;
                         }
                    });



                    $scope.selection = true;
               }
          }, true)

          $scope.onClickTrash = function(){
               var str = $scope.checkboxModel.filter(function(val){ return (val); })

               $http.delete('/api/stories', {
                    data : {
                         idlist : str
                    },
                    headers: {
                         "Content-Type": "application/json;charset=utf-8"
                    }
               }).then(function(msg){
                    $scope.stories = msg.data;
               });
          }
          $scope.onClickApprove = function(){
               var str = $scope.checkboxModel.filter(function(val){ return (val); }).
               forEach(function(val){
                    $http.patch('/api/stories/approve/' + val,{
                         data : { op : "replace", path : "approved" , value: true}
                    }).then(function(val){
                         //$scope.stories = msg.data;
                         $scope.checkboxModel = [];
                         $http.get("/api/stories").then(function(msg){
                              msg.data.map(function(value){
                                   value.submission_date_d = moment(value.submission_date).format("MMM DD");
                                   return value;
                              });
                              $scope.stories = msg.data;
                         });
                    })
               })

          }
          $scope.onClickDecline = function(){
               var str = $scope.checkboxModel.filter(function(val){ return (val); }).
               forEach(function(val){
                    $http.patch('/api/stories/decline/' + val, {
                         data : { op : "replace", path : "approved" , value: false}
                    }).then(function(val){
                         //$scope.stories = msg.data;
                         $scope.checkboxModel = [];
                         $http.get("/api/stories").then(function(msg){
                              msg.data.map(function(value){
                                   value.submission_date_d = moment(value.submission_date).format("MMM DD");
                                   return value;
                              });
                              $scope.stories = msg.data;
                         });
                    })
               })
          }
          $scope.onClickStory = function(){
               $scope.currStoryItem = this.story;
               var modalInstance = $uibModal.open({
                    templateUrl : "components/modals/review_modal_template.html",
                    controller: "review_modal",
                    size : "lg",
                    resolve: {
                         storyitem: function () {
                              $scope.currStoryItem.img = ($scope.currStoryItem._id)?
                              "/images/"+$scope.currStoryItem._id:null;
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
                              "url" : "./api/stories/approve/"+$scope.currStoryItem._id,
                              "method" : "PUT",
                              "data" : data
                         }).then(function(){

                         });
                    }else if(selectedItem == "declined"){
                         $http({
                              "url" : "./api/stories/declined/"+$scope.currStoryItem._id,
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
