define(["app"], function(app) {app.run(["$templateCache", function($templateCache) {  'use strict';

  $templateCache.put('components/directives/mainmenu_template.html',
    ""
  );


  $templateCache.put('components/pages/createsubmission_template.html',
    "<div class=\"container\" style=\"padding:35px\"></div>"
  );


  $templateCache.put('components/pages/login_template.html',
    ""
  );


  $templateCache.put('components/pages/reviewsubmission_template.html',
    "<div class=\"container\" style=\"padding:35px\"><div class=\"col-xs-12\"><h2>Review Submissions</h2><hr style=\"margin-top:5px; margin-bottom:5px\"><br><table class=\"table\"><thead><tr><th>Sub Num#</th><th>Name</th><th>Files</th></tr></thead><tbody><tr ng-repeat=\"story in stories\"><td>{{story.id}}</td><td>{{story.name}}</td><td>{{story.files}}</td></tr></tbody></table></div></div>"
  );


  $templateCache.put('components/pages/submission_template.html',
    "<div class=\"container\" style=\"padding:35px\"><div class=\"col-xs-12\"><div class=\"alert-box col-xs-12\"><div uib-alert class=\"col-xs-2 col-xs-offset-10\" ng-repeat=\"alert in alerts\" ng-class=\"'alert-' + (alert.type || 'warning')\" close=\"closeAlert($index)\">{{alert.msg}}</div></div><div ng-show=\"(screen == 0)?true:false\"><div class=\"form col-xs-10 col-xs-offset-1\"><h2>What would you like to do today?</h2><hr style=\"margin-top:5px; margin-bottom:5px\"><div style=\"padding-top:160px\"><div class=\"col-xs-4 col-xs-offset-1 well\" ng-click=\"screen=1\"><a href=\"#!/create\"><center><h3 class=\"success\">Submit Story</h3></center><hr><center><img src=\"assets/img/edit-pen-write-icon--2.png\" alt=\"...\" class=\"img-rounded\" style=\"width:150px; filter: invert(100%)\"></center></a></div><div class=\"col-xs-4 col-xs-offset-2 well\"><a href=\"#!/review\"><center><h3>Review Submissions</h3></center><hr><center><img src=\"assets/img/review-icon-13.png\" alt=\"...\" class=\"img-rounded\" style=\"width:132px; filter: invert(100%)\"></center><a></a></div></div></div></div></div></div>"
  );
}]);});