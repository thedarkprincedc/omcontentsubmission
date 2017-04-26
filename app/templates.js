define(["app"], function(app) {app.run(["$templateCache", function($templateCache) {  'use strict';

  $templateCache.put('components/directives/mainmenu_template.html',
    ""
  );


  $templateCache.put('components/pages/login_template.html',
    ""
  );


  $templateCache.put('components/pages/submission_template.html',
    "<div class=\"container\"><div class=\"col-xs-12\"><div ng-show=\"(screen == 0)?true:false\"><h1>What would you like to do today?</h1><div class=\"col-xs-3 well\" ng-click=\"screen=1\"><h2 class=\"success\">Submit an Image</h2><hr></div><div class=\"col-xs-3 col-xs-offset-3 well\" ng-click=\"screen=2\"><h2>Submit a Document</h2><hr></div></div><div ng-show=\"(screen == 1)?true:false\"><div class=\"form col-xs-8 col-xs-offset-2\" style=\"padding:25px\"><h2>Alrighty so were submiting a Document today</h2><hr style=\"margin-top:5px; margin-bottom:5px\">Name <input type=\"text\" name=\"name\" ng-model=\"submitform.name\" class=\"form-control\"><br>Email <input type=\"text\" name=\"email\" ng-model=\"submitform.email\" class=\"form-control\"><br>Description<textarea name=\"desc\" ng-model=\"submitform.desc\" class=\"form-control\" rows=\"2\" style=\"height: 325px\"></textarea><br>Upload File(s)<br><button type=\"button\" class=\"btn btn-primary\">Upload</button><hr><button type=\"button\" class=\"btn btn-success\" ng-click=\"onSubmitForm()\">Submit</button></div></div></div></div>"
  );
}]);});