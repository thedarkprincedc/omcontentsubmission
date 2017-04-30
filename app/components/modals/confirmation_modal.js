define(['app', 'angular'], function(app, angular){
     app.controller("confirmation_modal", ['$scope', '$timeout', '$uibModalInstance',function($scope, $timeout, $uibModalInstance){
          $timeout(function(){
                $uibModalInstance.close('success');
          }, 1000);
     }]);
});
