define(["app"], function(app) {app.run(["$templateCache", function($templateCache) {  'use strict';

  $templateCache.put('components/directives/mainmenu_template.html',
    ""
  );


  $templateCache.put('components/modals/confirmation_modal_template.html',
    "<div class=\"modal-body\" id=\"modal-body\"><h4 class=\"modal-title\" id=\"modal-title\"><span class=\"glyphicon glyphicon-ok\"></span> &nbsp;<b>Saved</b> Successfully</h4></div>"
  );


  $templateCache.put('components/modals/review_modal_template.html',
    "<div class=\"modal-body\" id=\"modal-body\"><h2>{{currStoryItem.subject}}</h2><hr style=\"margin-top:5px; margin-bottom:5px\"><br><div class=\"row\"><div class=\"col-xs-7\"><div class=\"form-group\"><label for=\"name\">Name</label><p>{{currStoryItem.name}}</p></div></div><div class=\"col-xs-2\"><div class=\"form-group\"><label for=\"email\">Email</label><p>{{currStoryItem.email}}</p></div></div></div><div class=\"form-group\"><label for=\"desc\">Description</label><pre style=\"background-color:#5c5c5c; color:white;padding-bottom:50px;padding-top:20px\"><b>Story #1</b><br><br>{{currStoryItem.description}}</pre></div><div class=\"form-group\"><label for=\"images\">Images</label><br><img name=\"images\" ng-src=\"{{currStoryItem.img}}\" width=\"150\" class=\"img-thumbnail\"></div><!--\n" +
    "     <div class=\"form-group\" ng-show=\"currStoryItem.files\">\n" +
    "          <label for=\"attachments\">Attachments</label>\n" +
    "          <table class=\"table\" name=\"attachments\">\n" +
    "               <thead>\n" +
    "                    <tr>\n" +
    "                         <td>filename</td>\n" +
    "                         <td>size</td>\n" +
    "                    </tr>\n" +
    "               </thead>\n" +
    "               <tbody>\n" +
    "                    <tr ng-repeat=\"files in currStoryItem.files\">\n" +
    "                         <td>{{files.name}}</td>\n" +
    "                         <td style=\"width:15%\">{{files.size}}</td>\n" +
    "                    </tr>\n" +
    "               </tbody>\n" +
    "          </table>\n" +
    "     </div>\n" +
    "--><hr><button class=\"btn btn-success\" ng-click=\"onApproveClicked()\">Approve</button> <button class=\"btn btn-danger\" ng-click=\"onDeleteClicked()\">Decline</button></div>"
  );


  $templateCache.put('components/modals/submission_modal_template.html',
    "<div class=\"modal-body\" id=\"modal-body\"><h3>New Submission</h3><hr><div class=\"form-group\"><label for=\"name\">Title</label><input type=\"text\" name=\"name\" ng-model=\"_submission.subject\" class=\"form-control\" placeholder=\"Name of Story or Poem\"></div><div class=\"form-group\"><textarea name=\"desc\" ng-model=\"_submission.description\" class=\"form-control\" rows=\"2\" style=\"height: 325px\" placeholder=\"Write your story here\"></textarea></div><button class=\"btn btn-primary\" ng-click=\"onClickAddSubmission()\" ng-disabled=\"(_submission.subject == '' || _submission.description == '')\">Submit</button> <button class=\"btn btn-primary\" ng-click=\"onClickClose()\">Close</button></div>"
  );


  $templateCache.put('components/pages/createsubmission_template.html',
    "<div class=\"container-fluid\" style=\"padding:35px\"><div class=\"alert-box col-xs-12\"><div uib-alert class=\"col-xs-3 col-xs-offset-9\" ng-repeat=\"alert in alerts\" ng-class=\"'alert-' + (alert.type || 'warning')\" close=\"closeAlert($index)\">{{alert.msg}}</div></div><div class=\"form col-xs-12\"><h2>OM Submission Form</h2><hr style=\"margin-top:5px; margin-bottom:5px\"><ol class=\"breadcrumb\" style=\"background: none; padding: 0px; margin-left:0px\"><li><a href=\"#\" style=\"color:white\">Home</a></li><li class=\"active\" style=\"color:white\"><b>OM Submission Form</b></li></ol><div class=\"form-group\"><label for=\"name\">Name</label><input type=\"text\" name=\"name\" ng-model=\"_submission.name\" class=\"form-control\" placeholder=\"John Doe\"></div><div class=\"form-group\"><label for=\"email\">Email</label><input type=\"text\" name=\"email\" ng-model=\"_submission.email\" class=\"form-control\" placeholder=\"john.doe@hotmail.com\"></div><div class=\"form-group\"><label for=\"name\">Which magazine would you like to submit for?</label><br><label class=\"checkbox-inline\"><input type=\"checkbox\" ng-model=\"_submission.print_edition\">Print Edition</label><label class=\"checkbox-inline\"><input type=\"checkbox\" ng-model=\"_submission.web_edition\">Web Edition</label></div><hr><!--\n" +
    "          <div class=\"form-group\">\n" +
    "          <label for=\"name\">Subject</label>\n" +
    "          <input type=\"text\" name=\"name\" ng-model=\"_submission.subject\" class=\"form-control\" placeholder=\"Subject\"/>\n" +
    "     </div>\n" +
    "     <div class=\"form-group\">\n" +
    "     <label for=\"desc\">Description</label>\n" +
    "     <textarea name=\"desc\" ng-model=\"_submission.description\" class=\"form-control\" rows=\"2\" style=\"height: 325px;\" placeholder=\"Write your story here\"></textarea>\n" +
    "</div>\n" +
    "--><div class=\"form-group\"><label for=\"desc\">Submissions ( You may have up five )</label><div class=\"row\"><div class=\"col-xs-6\"><button class=\"btn btn-primary\" ng-click=\"onClickAdd()\">Add Submission</button><!--<button class=\"btn btn-primary\" ng-click=\"onClickAddSubmission()\">Extra Submission</button>--></div></div></div><div class=\"form-group\"><div class=\"row\"><div class=\"col-xs-6\" ng-show=\"(_submission.list.length > 0)?true:false\"><div ng-repeat=\"item in _submission.list\"><!--<pre><b>{{item.subject}}</b><br/><br/>{{item.description}}</pre><br/>--><div class=\"panel panel-default\"><div class=\"panel-heading\"><h3 class=\"panel-title\">{{item.subject}}</h3></div><div class=\"panel-body\"><pre>{{item.description}}</pre></div></div><button class=\"btn btn-warning btn-xs\">Remove</button><br></div></div></div></div><div class=\"form-group\" ng-if=\"false\"><label for=\"upload\">Upload File(s)</label><br><label class=\"btn btn-primary btn-file\"><span class=\"glyphicon glyphicon-cloud-upload\"></span> Upload<input type=\"file\" id=\"fileinput\" name=\"fileinput\" data-file-upload-callback=\"uploadImage\"></label><!--<button type=\"button\" name=\"upload\" class=\"btn btn-primary\"><span class=\"glyphicon glyphicon-cloud-upload\"></span> Upload</button>--></div><img data-http-src=\"{{avatarUrl}}\" data-ng-if=\"hasimage\" id=\"avatar\" alt=\"Your Uploaded Picture\" title=\"Your Uploaded Picture\" height=\"80px\" width=\"80px\" aria-hidden=\"true\"><table id=\"uploadedImageTable\" class=\"table\" data-ng-show=\"uploadedImage\" summary=\"Uploaded picture files\" role=\"presentation\"><thead aria-hidden=\"true\"><tr><th>Image</th><th scope=\"col\">File Selected</th><th scope=\"col\">Size</th><th scope=\"col\">Actions</th></tr></thead><tbody><tr><td><img class=\"imageArea img-thumbnail\" ng-src=\"{{uploadedImage.imageSrc}}\" title=\"Image to be uploaded\" alt=\"Image to be uploaded\" aria-hidden=\"true\" width=\"200\"></td><td class=\"break-word\"><strong aria-hidden=\"true\" id=\"uploadedImageName\">{{ uploadedImage.name }}</strong><div aria-hidden=\"true\"><span id=\"imgPreviewLabel\">Image to be uploaded:</span></div></td><td class=\"break-word\" data-nowrap aria-hidden=\"true\">{{ uploadedImage.size/1024/1024|number:2 }} MB</td><td data-nowrap><button id=\"removeUploadedImageButton\" data-focus-me=\"true\" type=\"button\" class=\"btn btn-danger btn-xs\" data-ng-click=\"removeUploadedImage()\" aria-labelledby=\"PNCSection imgPreviewLabel uploadedImageName removeUploadedImageButton\"><span class=\"glyphicon glyphicon-trash\" aria-hidden=\"true\"></span> Remove <span class=\"sr-only\">queued file</span></button></td></tr></tbody></table><hr><button type=\"button\" class=\"btn btn-success\" ng-click=\"onSubmitForm()\" ng-disabled=\"bSubmitDisabled\">Submit</button></div></div>"
  );


  $templateCache.put('components/pages/login_template.html',
    "<div class=\"row\"><div class=\"col-xs-4\"><div class=\"form-group\"><label for=\"username\">Username</label><input name=\"username\" type=\"text\" class=\"form-control\" ng-model=\"credentials.username\"></div><div class=\"form-group\"><label for=\"username\">Password</label><input name=\"password\" type=\"password\" class=\"form-control\" ng-model=\"credentials.password\"></div><button class=\"btn btn-primary\"></button></div></div>"
  );


  $templateCache.put('components/pages/reviewsubmission_template.html',
    "<div class=\"container-fluid\" style=\"padding:35px\"><div class=\"col-xs-12\"><h2>Review Submissions</h2><hr style=\"margin-top:5px; margin-bottom:5px\"><ol class=\"breadcrumb\" style=\"background: none; padding: 0px; margin-left:0px\"><li><a href=\"#\" style=\"color:white\">Home</a></li><li class=\"active\" style=\"color:white\"><b>Review Submissions</b></li></ol><div class=\"form-group\"><label for=\"name\">Search</label><input type=\"text\" name=\"search\" ng-model=\"search\" class=\"form-control\" placeholder=\"What are we looking for today?\"></div><div class=\"form-group\"><div class=\"row\"><div class=\"col-xs-6\"><button class=\"btn btn-danger btn-sm\" ng-click=\"onClickTrash()\" ng-disabled=\"selection\"><span class=\"glyphicon glyphicon-trash\"></span></button> &nbsp;&nbsp;&nbsp; <button class=\"btn btn-success btn-sm\" ng-click=\"onClickApprove()\" ng-disabled=\"selection\"><span class=\"glyphicon glyphicon-ok\"></span></button> <button class=\"btn btn-danger btn-sm\" ng-click=\"onClickDecline()\" ng-disabled=\"selection\"><span class=\"glyphicon glyphicon-remove\"></span></button></div><div class=\"col-xs-6\"><p class=\"text-right\"><b>{{(stories.length > 0)? stories.length + \" Submissions Found\":\"No Submissions Found\" }}</b></p></div></div><div style=\"overflow-y:auto; height:700px; width:100%\"><table class=\"table hoverTable table-condensed\"><tbody><tr ng-repeat=\"story in stories\"><td style=\"width:4%\"><input type=\"checkbox\" ng-model=\"checkboxModel[$index]\" ng-true-value=\"'{{story._id}}'\"></td><td style=\"width:15%\" ng-click=\"onClickStory()\">{{story.name}}</td><td ng-click=\"onClickStory()\">{{story.subject}} <span style=\"color:#ababab\">- {{story.description}}</span></td><td style=\"width:5%\">{{story.submission_date_d}}</td></tr></tbody></table></div></div></div></div>"
  );


  $templateCache.put('components/pages/submission_template.html',
    "<div class=\"container-fluid\" style=\"padding:35px\"><div class=\"col-xs-12\"><div class=\"form col-xs-12\"><h2>What would you like to do today?</h2><hr style=\"margin-top:5px; margin-bottom:5px\"><div style=\"padding-top:160px\"><div class=\"col-xs-6 col-md-4 col-md-offset-1\" ng-click=\"screen=1\"><div class=\"well\" style=\"width:275px; height:245px\"><a href=\"#!/create\"><center><h3 class=\"success\">Submit Story</h3></center><hr><center><img src=\"assets/img/edit-pen-write-icon--2.png\" alt=\"...\" class=\"img-rounded\" style=\"width:150px; filter: invert(100%)\"></center></a></div></div><div class=\"col-xs-6 col-md-4 col-md-offset-2\"><div class=\"well\" style=\"width:275px; height:245px\"><a href=\"#!/review\"><center><h3>Review Submissions</h3></center><hr><center><img src=\"assets/img/review-icon-13.png\" alt=\"...\" class=\"img-rounded\" style=\"width:132px; filter: invert(100%)\"></center><a></a></div></div></div></div></div></div>"
  );
}]);});