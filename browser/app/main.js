'use strict';

var app = angular.module('auther', ['ui.router']);

app.config(function ($urlRouterProvider, $locationProvider, $compileProvider) {
	$locationProvider.html5Mode(true);
	$urlRouterProvider.otherwise('/');
	$urlRouterProvider.when('/auth/:provider', function () {
		window.location.reload();
	});
  $compileProvider.debugInfoEnabled(false);

});

app.run(function (Auth) {
	Auth.refreshMe();
});