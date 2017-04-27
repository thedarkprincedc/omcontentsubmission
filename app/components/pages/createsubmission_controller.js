define(['app', 'angular'], function(app, angular){
     app.controller("createsubmission_controller", ['$scope', '$timeout','$location', '$uibModal', '$http', function($scope, $timeout, $location, $uibModal, $http){
          $scope.screen = 0;
          $scope.submitform = {};
          $scope.alerts = [];
          //$scope.submitted = true;
          $scope.$watch("submitform", function(val, oldVal){
               /*if(val.name !== '' && /[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z0-9]+/.test(val.email) && val.desc !== ''){
                    $scope.submitted = false;
                    return;
               }
               $scope.submitted = true;*/
          },true);


          $scope.onSubmitForm = function(){
               var modalInstance = $uibModal.open({
                    templateUrl : "components/modals/confirmation_modal_template.html",
                    controller: "confirmation_modal",
                    resolve: {
                          storyitem: function () {
                            return $scope.currStoryItem;
                          }
                    }
               });
               modalInstance.result.then(function (selectedItem) {
                    $http.post("/api/stories", $scope.submitform).then(function(data){
                         $scope.submitform = {};
                         $location.path("#/index");
                    });

                 }, function () {
                   //$log.info('modal-component dismissed at: ' + new Date());
                 });
               /*
                $timeout(function(){
                     $scope.alerts.push({msg: 'Successfully uploaded form', type:'success'});
                },3000).then(function(){
                      $scope.alerts.push({msg: 'Failed to upload form', type:'danger'});
                });*/
          }
     }]);
});
