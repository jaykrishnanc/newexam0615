/**
 * Created by JAYA on 28-06-2015.
 */
angular.module('exam',['ui.router'])

.config(function ($stateProvider,   $urlRouterProvider) {

        $urlRouterProvider.otherwise('/login');

        $stateProvider

            .state('login',{
                url:"/login",
                templateUrl:"login/index.html",
                controller:'LoginController'
            })

            .state('result',{
                url:"/result",
                templateUrl:"result/index.html"
            })

            .state('exam',{
                url:"/exam",
                templateUrl:"exam/index.html"
            });
    });