"use strict";angular.module("myappApp",["ngCookies","ngResource","ngSanitize","ngRoute"]).config(["$routeProvider","$locationProvider",function(a,b){a.when("/",{templateUrl:"partials/main",controller:"MainCtrl"}).otherwise({redirectTo:"/"}),b.html5Mode(!0)}]),angular.module("myappApp").controller("MainCtrl",["$scope","$http",function(a,b){b.get("/api/awesomeThings").success(function(b){a.awesomeThings=b})}]),angular.module("myappApp").controller("NavbarCtrl",["$scope","$location",function(a,b){a.menu=[{title:"Home",link:"/"}],a.isActive=function(a){return a===b.path()}}]);