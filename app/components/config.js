require.config({
	paths: {
		"jquery" : "../libs/jquery/dist/jquery",
		"angular" : "../libs/angular/angular",
		"angular-route" : "../libs/angular-route/angular-route",
          "angular-bootstrap-ui" : "../libs/angular-bootstrap/ui-bootstrap-tpls",

          "submission_controller" : "../components/pages/submission_controller",

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
		}
	},
	map : {
		'*' : {
			'angularUiBootstrap': 'angular-bootstrap-ui'
		}
	}
});
require(['jquery', 'angular', 'angular-route', 'submission_controller', 'router', 'app', 'angular-bootstrap-ui'], function(){
	angular.bootstrap(document, ['app']);
});
