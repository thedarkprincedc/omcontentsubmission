require.config({
	paths: {
		"jquery" : "../libs/jquery/dist/jquery",
		"angular" : "../libs/angular/angular",
		"angular-route" : "../libs/angular-route/angular-route",
          "angular-bootstrap-ui" : "../libs/angular-bootstrap/ui-bootstrap-tpls",
		"angular-uploader-ui" : "../libs/angular-ui-uploader/dist/uploader",

		"moment" : "../libs/moment/moment",

		"submission_controller" : "../components/pages/submission_controller",
		"reviewsubmission_controller" : "../components/pages/reviewsubmission_controller",
		"createsubmission_controller" : "../components/pages/createsubmission_controller",

		"submission_modal" : "../components/modals/submission_modal",
		"confirmation_modal" : "../components/modals/confirmation_modal",
		"review_modal" : "../components/modals/review_modal",

		"templates" : "templates",
          "router" : "router",
          "app" : "app"

	},
	shim: {
		jquery: {
			exports: 'jquery'
		},
		angular: {
			deps: ['jquery'],
			exports: 'angular'
		},
		'angular-route': {
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

			'jQuery': 'jquery',
			'angularUiBootstrap': 'angular-bootstrap-ui',
		}
	}
});
require(['jquery',
		'angular',
		'app',
		'templates',
		'router',
		'submission_controller',

		'reviewsubmission_controller',
		'createsubmission_controller',
		'confirmation_modal',
		'review_modal','submission_modal'], function(){
	angular.bootstrap(document, ['app']);
});
