define(['app', 'angular', 'moment'], function(app, angular, moment){
     app.controller("reviewsubmission_controller", ['$scope', '$timeout', '$location', '$uibModal', '$http', function($scope, $timeout, $location,  $uibModal, $http){
          $scope.stories=[];
          $http.get("/api/stories").then(function(msg){
               msg.data.map(function(value){
                    value.submission_date_d = moment(value.submission_date).format("MMM DD");
                    return value;
               });
               $scope.stories = msg.data;
          });
            //alert(moment().format('dddd, MMMM Do YYYY, h:mm:ss a'));
//console.log(moment("1995-12-25"));
//debugger;
          $scope.onClickStory = function(){
               $scope.currStoryItem = this.story;
               var modalInstance = $uibModal.open({
                    templateUrl : "components/modals/review_modal_template.html",
                    controller: "review_modal",
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
