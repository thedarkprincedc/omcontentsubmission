define(['jquery', 'angular', 'app'], function ($, angular, app) {
    app.service('fileupload', ['$http', function ($http) {
         var fileUploadService = {};
         fileUploadService.submitForm = function(formData){
              return $http({
                   "method" : "POST",
                   "url" : "./resources/submitData"
              });
         }
         return fileUploadService;
    }]);
});
