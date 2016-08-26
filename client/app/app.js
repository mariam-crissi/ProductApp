///<reference path="../typings/index.d.ts"/>
var app=angular.module("myApp", ['ngResource', 'myApp.controllers', 'myApp.services','ngRoute','angularUtils.directives.dirPagination']);
app.config(function($routeProvider) {
        $routeProvider


            .when('/showItem', {
                templateUrl : 'bootstrap/tpl/ProductListItemView.html'

            })


            .when('/addItem', {
                templateUrl : 'bootstrap/tpl/ProductView.html'

            })
            .when('/editItem/:id', {
                templateUrl : 'bootstrap/tpl/ProductEditView.html'

            })

            .when('/updateItem', {
                templateUrl : 'bootstrap/tpl/ProductEditView.html'

            }).
            otherwise({
                   redirectTo: '/showItem'
            });
    });
