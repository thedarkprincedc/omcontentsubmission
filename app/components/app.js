define(['jquery','angular'], function($, angular){
     var app = angular.module("app", ['ngRoute', 'ui.bootstrap']);
     app.config(function( ) {
          console.log("Romsync Configuring...");

     });
     app.run(function($rootScope, $http){
          console.log("Romsync Starting...");
     });
     return app;
});
