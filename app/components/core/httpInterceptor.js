define(['angular', 'app'], function(angular, app){
  "use strict";

  app.config(['$provide', '$httpProvider',function ($provide, $httpProvider) {
    $provide.factory('httpInterceptor', ['$q', '$injector',
      function($q, $injector) {
      return {
        // optional method
        'request': function(config) {
		  $injector.invoke(['authenticationService', function(authenticationService){
                authenticationService.setAuthToken();
          }]);
          return config || $q.when(config);
        },
        // optional method
        'requestError': function(rejection) {
          // $injector.invoke(['connectionErrorService', function(connectionErrorService){
          //     console.log("HTTP Interceptor caught Request Error: " + rejection.status);
          //     connectionErrorService.openServerErrorModal();
          // }]);

          if (canRecover(rejection)) {
            return responseOrNewPromise
          }
          return $q.reject(rejection);
        },
        // optional method
        'response': function(response) {
          return response || $q.when(response);
        },
        // optional method
        'responseError': function(rejection) {
          console.log("HTTP Interceptor caught Response Error: " + rejection.status);
          console.log(rejection);

          if (rejection.status === 403 || rejection.status === 401){
            $injector.invoke(['authenticationService', 'connectionTimeoutService', function(authenticationService, connectionTimeoutService){
                console.log("Calling authenticate()...");
                if(authenticationService.isAuthenticated()) {
                  authenticationService.logoutRedirectToLogin();
                }
            }]);
          } else {
            if(rejection.status !== 400){
              $injector.invoke(['connectionErrorService', 'authenticationService',
              function(connectionErrorService, authenticationService){
                if(authenticationService.isAuthenticated()){
                  connectionErrorService.showServerErrorMsg();
                }
              }]);
            }
          }
          return $q.reject(rejection);
        }
      };
    }]);

    $httpProvider.interceptors.push('httpInterceptor');
  }]);
});
