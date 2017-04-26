define(['app', 'angular'], function(app, angular){
     app.controller("reviewsubmission_controller", ['$scope', '$timeout','$location', function($scope, $timeout, $location){
          $scope.stories=[];
          $timeout(function(){
               $scope.stories.push({ id : "0", name: 'snnenuujdwdwj', files : 'ejnijneifneij'})
               $scope.stories.push({ id : "0", name: 'snnenuujdwdwj', files : 'ejnijneifneij'})
               $scope.stories.push({ id : "0", name: 'snnenuujdwdwj', files : 'ejnijneifneij'})
               $scope.stories.push({ id : "0", name: 'snnenuujdwdwj', files : 'ejnijneifneij'})
               $scope.stories.push({ id : "0", name: 'snnenuujdwdwj', files : 'ejnijneifneij'})
          },1000);
     }]);
});
