define(['jquery','angular', 'angular-route', 'angular-bootstrap-ui', 'angular-uploader-ui'], function($, angular){
     var app = angular.module("app", ['ngRoute', 'ui.bootstrap', 'ui.uploader']);
     app.config(function( ) {
          console.log("Romsync Configuring...");

     });
     app.run(function($rootScope, $http){
          console.log("Romsync Starting...");
     });
     return app;
});
