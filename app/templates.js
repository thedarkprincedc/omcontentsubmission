define(["app"], function(app) {app.run(["$templateCache", function($templateCache) {  'use strict';

  $templateCache.put('components/directives/mainmenu_template.html',
    ""
  );


  $templateCache.put('components/modals/confirmation_modal_template.html',
    "<div class=\"modal-body\" id=\"modal-body\"><h4 class=\"modal-title\" id=\"modal-title\"><span class=\"glyphicon glyphicon-ok\"></span> &nbsp;<b>Saved</b> Successfully</h4></div>"
  );


  $templateCache.put('components/modals/review_modal_template.html',
    "<div class=\"modal-body\" id=\"modal-body\"><h2>{{currStoryItem.subject}}</h2><hr style=\"margin-top:5px; margin-bottom:5px\"><br><div class=\"row\"><div class=\"col-xs-7\"><div class=\"form-group\"><label for=\"name\">Name</label><p>{{currStoryItem.name}}</p></div></div><div class=\"col-xs-2\"><div class=\"form-group\"><label for=\"email\">Email</label><p>{{currStoryItem.email}}</p></div></div></div><div class=\"form-group\" style=\"padding-bottom:45px\"><label for=\"desc\">Description</label><p>{{currStoryItem.description}}</p></div><div class=\"form-group\" ng-show=\"currStoryItem.files\"><label for=\"attachments\">Attachments</label><table class=\"table\" name=\"attachments\"><thead><tr><td>filename</td><td>size</td></tr></thead><tbody><tr ng-repeat=\"files in currStoryItem.files\"><td>{{files.name}}</td><td style=\"width:15%\">{{files.size}}</td></tr></tbody></table></div><hr><button class=\"btn btn-success\" ng-click=\"onApproveClicked()\">Approve</button> <button class=\"btn btn-danger\" ng-click=\"onDeleteClicked()\">Decline</button></div>"
  );


  $templateCache.put('components/pages/createsubmission_template.html',
    "<div class=\"container\" style=\"padding:35px\"><div class=\"alert-box col-xs-12\"><div uib-alert class=\"col-xs-3 col-xs-offset-9\" ng-repeat=\"alert in alerts\" ng-class=\"'alert-' + (alert.type || 'warning')\" close=\"closeAlert($index)\">{{alert.msg}}</div></div><div class=\"form col-xs-12\"><h2>OM Submission Form</h2><hr style=\"margin-top:5px; margin-bottom:5px\"><ol class=\"breadcrumb\" style=\"background: none; padding: 0px; margin-left:0px\"><li><a href=\"#\" style=\"color:white\">Home</a></li><li class=\"active\" style=\"color:white\">OM Submission Form</li></ol><div class=\"form-group\"><label for=\"name\">Name</label><input type=\"text\" name=\"name\" ng-model=\"submitform.name\" class=\"form-control\" placeholder=\"John Doe\"></div><div class=\"form-group\"><label for=\"email\">Email</label><input type=\"text\" name=\"email\" ng-model=\"submitform.email\" class=\"form-control\" placeholder=\"john.doe@hotmail.com\"></div><div class=\"form-group\"><label for=\"name\">Subject</label><input type=\"text\" name=\"name\" ng-model=\"submitform.subject\" class=\"form-control\" placeholder=\"Subject\"></div><div class=\"form-group\"><label for=\"desc\">Description</label><textarea name=\"desc\" ng-model=\"submitform.description\" class=\"form-control\" rows=\"2\" style=\"height: 325px\" placeholder=\"Write your story here\"></textarea></div><div class=\"form-group\"><label for=\"upload\">Upload File(s)</label><br><button type=\"button\" name=\"upload\" class=\"btn btn-primary\"><span class=\"glyphicon glyphicon-cloud-upload\"></span> Upload</button></div><hr><button type=\"button\" class=\"btn btn-success\" ng-click=\"onSubmitForm()\" ng-disabled=\"submitted\">Submit</button></div></div>"
  );


  $templateCache.put('components/pages/login_template.html',
    ""
  );


  $templateCache.put('components/pages/reviewsubmission_template.html',
    "<div class=\"container\" style=\"padding:35px\"><div class=\"col-xs-12\"><h2>Review Submissions</h2><hr style=\"margin-top:5px; margin-bottom:5px\"><ol class=\"breadcrumb\" style=\"background: none; padding: 0px; margin-left:0px\"><li><a href=\"#\" style=\"color:white\">Home</a></li><li class=\"active\" style=\"color:white\">Review Submissions</li></ol><div class=\"form-group\"><label for=\"name\">Search</label><input type=\"text\" name=\"search\" ng-model=\"search\" class=\"form-control\" placeholder=\"What are we looking for today?\"></div><table class=\"table hoverTable table-condensed\"><!--<thead>\n" +
    "                    <tr>\n" +
    "                         <th style=\"width:20%;\">Subject</th>\n" +
    "                         <th>Descriptions</th>\n" +
    "                         <th style=\"width:10%;\">Date</th>\n" +
    "                    </tr>\n" +
    "               </thead>--><tbody><tr ng-repeat=\"story in stories\" ng-click=\"onClickStory()\"><td style=\"width:23%\">{{story.name}}</td><td>{{story.subject}} - {{story.description}}</td><td style=\"width:10%\">{{story.submission_date}}</td></tr></tbody><!--<tfoot>\n" +
    "                    <tr>\n" +
    "                         <td></td>\n" +
    "\n" +
    "                              <td></td>\n" +
    "                              <td>Total: {{stories.length}}</td>\n" +
    "                    </tr>\n" +
    "               </tfoot>--></table></div></div>"
  );


  $templateCache.put('components/pages/submission_template.html',
    "<div class=\"container\" style=\"padding:35px\"><div class=\"col-xs-12\"><div class=\"form col-xs-12\"><h2>What would you like to do today?</h2><hr style=\"margin-top:5px; margin-bottom:5px\"><div style=\"padding-top:160px\"><div class=\"col-xs-6 col-md-4 col-md-offset-1\" ng-click=\"screen=1\"><div class=\"well\" style=\"width:275px; height:245px\"><a href=\"#!/create\"><center><h3 class=\"success\">Submit Story</h3></center><hr><center><img src=\"assets/img/edit-pen-write-icon--2.png\" alt=\"...\" class=\"img-rounded\" style=\"width:150px; filter: invert(100%)\"></center></a></div></div><div class=\"col-xs-6 col-md-4 col-md-offset-2\"><div class=\"well\" style=\"width:275px; height:245px\"><a href=\"#!/review\"><center><h3>Review Submissions</h3></center><hr><center><img src=\"assets/img/review-icon-13.png\" alt=\"...\" class=\"img-rounded\" style=\"width:132px; filter: invert(100%)\"></center><a></a></div></div></div></div></div></div>"
  );
}]);});