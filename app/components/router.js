define(['jquery','angular', 'app'], function($, angular, app){
     app.config(['$routeProvider', function($routeProvider){
          $routeProvider.when('/index', {
               controller : "submission_controller",
               templateUrl : 'components/pages/submission_template.html'
          }).when('/login', {
               templateUrl : 'components/pages/login_template.html'
          }).when('/create', {
               controller : "createsubmission_controller",
               templateUrl : 'components/pages/createsubmission_template.html'
          }).when('/review', {
               controller : "reviewsubmission_controller",
               templateUrl : 'components/pages/reviewsubmission_template.html'
          }).when('/home', {
               templateUrl : 'components/pages/home_template.html'
          }).otherwise({
               redirectTo : '/index'
          });
     }]);
});
