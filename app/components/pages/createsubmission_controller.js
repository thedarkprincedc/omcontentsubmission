define(['app', 'angular'], function(app, angular){
     app.controller("createsubmission_controller", ['$scope', '$timeout','$location', '$uibModal', '$http', '$q', function($scope, $timeout, $location, $uibModal, $http, $q){
          $scope.screen = 0;
          $scope.submitform = {};
          $scope.alerts = [];
          $scope.bSubmitDisabled = true;

          $scope._submission = {
               name: '',
               email: '',
               print_edition : false,
               web_edition: false,
               subject: '',
               description: '',
               list: []
          };
          $scope.onClickModify = function(){
               var index = this.$index;
               $scope._submission.subject = $scope._submission.list[this.$index].subject;
               $scope._submission.description = $scope._submission.list[this.$index].description;
               var modalInstance = $uibModal.open({
                    templateUrl : "components/modals/submission_modal_template.html",
                    controller: "submission_modal",
                    resolve: {
                         submissionData : function(){
                              return $scope._submission;
                         }
                    }
               });
               modalInstance.result.then(function (result) {
                    if(result === 'addSubmission'){
                         if($scope._submission.subject.length > 0 && $scope._submission.description.length > 0){
                              $scope._submission.list[index].subject = $scope._submission.subject;
                              $scope._submission.list[index].description = $scope._submission.description;

                         }
                    }
                    $scope._submission.subject = "";
                    $scope._submission.description = "";
               }, function () {

                    //$log.info('modal-component dismissed at: ' + new Date());
               });

          };
          $scope.onClickRemove = function(){
               $scope._submission.list = $scope._submission.list.slice(this.$index+1);
          }
          $scope.onClickAddSubmission = function(){
               if($scope._submission.subject.length > 0 && $scope._submission.description.length > 0){
                    $scope._submission.list.push({ subject : $scope._submission.subject, description : $scope._submission.description});
                    $scope._submission.subject = "";
                    $scope._submission.description = "";
               }
          }

          $scope.$watch("_submission", function(val, oldVal){

               $scope.bSubmitDisabled = (
                    (val.name == '' || val.name == null)
                    || (val.email == '' || val.email == null || !/[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z0-9]+/.test(val.email) )


               ) ? true : false;
          },true);

          $scope.uploadImage = function (uploadEvent) {
               var uploadedFile = uploadEvent.target.files[0],
               type = uploadedFile.type.slice(uploadedFile.type.lastIndexOf('/') + 1),
               accept = uploadedFile.size <= 5242880 && type && '|jpeg|jpg|png|gif|bmp|'.indexOf(type) !== -1;

               if (accept) {
                    var fileReader = new FileReader();

                    fileReader.onload = function (readEvent) {
                         $timeout(function() {
                              uploadedFile.imageSrc = readEvent.target.result;
                              $scope.uploadedImage = uploadedFile;
                              $scope.imageUploadFailed = false;
                              $timeout(function () {
                                   $("#removeUploadedImageButton").focus();
                              }, 1500);
                         });
                    };

                    fileReader.readAsDataURL(uploadedFile);
               } else {
                    $timeout(function() {
                         $scope.uploadedImage = null;
                         $scope.imageUploadFailed = true;
                         $("#fileInputSpan").hide().show(0);
                         focusService.focusElement("#fileInputSpan");
                    });
               }

               return accept;
          }
          $scope.save = function(){
               var deferred = $q.defer();
               //$scope._submission.description = $scope._submission.description.replace(/\n/g, "<br/>");
               $http.post("/api/stories", $scope._submission).then(function(data){
                    if($scope.uploadedImage){
                         var formData = new FormData();
                         delete $scope.uploadedImage.imageSrc;
                         formData.append("file", $scope.uploadedImage);

                         $http.post("/api/stories/image/"+data.data._id, formData,{
                              headers: {
                                   "Content-Type": undefined
                              },
                              transformRequest: angular.identity,
                         }).then(function () {
                              deferred.resolve();
                         });
                    } else {
                         deferred.resolve();
                    }
               }, function(){
                    deferred.reject();
               });
               return deferred.promise;
          }
          $scope.onClickAdd = function(){
               var modalInstance = $uibModal.open({
                    templateUrl : "components/modals/submission_modal_template.html",
                    controller: "submission_modal",
                    resolve: {
                         submissionData : function(){
                              return $scope._submission;
                         }
                    }
               });
               modalInstance.result.then(function (result) {
                    if(result === 'addSubmission'){
                         if($scope._submission.subject.length > 0 && $scope._submission.description.length > 0){
                              $scope._submission.list.push({ subject : $scope._submission.subject, description : $scope._submission.description});
                         }
                    }
                    $scope._submission.subject = "";
                    $scope._submission.description = "";
               }, function () {

                    //$log.info('modal-component dismissed at: ' + new Date());
               });
          }
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
                    $scope.save().then(function(){
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
     app.directive('fileUploadCallback', function() {
          return {
               restrict: 'A',
               link: function (scope, element, attrs) {
                    var onChangeHandler = scope.$eval(attrs.fileUploadCallback);
                    element.bind('change', onChangeHandler);
               }
          };
     });
});
