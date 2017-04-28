require.config({
	paths: {
		"jquery" : "../libs/jquery/dist/jquery",
		"angular" : "../libs/angular/angular",
		"angular-route" : "../libs/angular-route/angular-route",
          "angular-bootstrap-ui" : "../libs/angular-bootstrap/ui-bootstrap-tpls",
		"angular-uploader-ui" : "../libs/angular-ui-uploader/dist/uploader",
          "submission_controller" : "../components/pages/submission_controller",
		"reviewsubmission_controller" : "../components/pages/reviewsubmission_controller",
		"createsubmission_controller" : "../components/pages/createsubmission_controller",

		"confirmation_modal" : "../components/modals/confirmation_modal",
		"review_modal" : "../components/modals/review_modal",

          "router" : "router",
          "app" : "app"

	},
	shim: {
		jquery: {
			exports: 'jquery'
		},
		angular: {
			exports: 'angular'
		},
		'angular-route': {
			exports: 'angular-route',
			deps : ['angular']
		},
		'angular-bootstrap-ui': {
		    deps: ['angular']
	    },
	    'angular-uploader-ui':{
		    deps: ['angular']
	    }

	},
	map : {
		'*' : {
			'angularUiBootstrap': 'angular-bootstrap-ui'

		}
	}
});
require(['jquery',
		'angular',
		'angular-route',
		'submission_controller',
		'router',
		'app',
		'angular-bootstrap-ui',
		'angular-uploader-ui',
		'reviewsubmission_controller',
		'createsubmission_controller',
		'confirmation_modal',
		'review_modal'], function(){
	angular.bootstrap(document, ['app']);
});
