/**
 * Created by debian on 10/03/17.
 */

var app = angular.module('hackathon', ['ngResource', 'ngRoute', 'ngSanitize']);
app.constant('api', {'url': 'https://api.jamendo.com/v3.0/tracks/?client_id=56d30c95&format=json'});
app.constant('local', {'url': 'http://localhost/Hackathon_2017/backend/'});

app.config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}]);

//Routage
app.config(['$routeProvider',
    function ($routeProvider) {
        // Système de routage
        $routeProvider
            .when('/', {
                templateUrl: 'template/trackPopular.html'
            })
            .when('/search', {
                templateUrl: 'template/trackSearch.html'
            })
            .when('/searchType', {
                templateUrl: 'template/trackSearchType.html'
            });
    }
]);

app.run(['$rootScope','$location','Tracks',function($rootScope,$location,Tracks){

}]);
