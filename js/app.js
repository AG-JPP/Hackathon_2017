/**
 * Created by debian on 10/03/17.
 */
var app = angular.module('hackathon', ['ngResource', 'ngRoute', 'ngSanitize']);
app.constant('api', {'url': 'https://api.jamendo.com/v3.0/albums/tracks/?client_id=56d30c95&format=json'});



//Routage
app.config(['$routeProvider',
    function ($routeProvider) {
        // Système de routage
        $routeProvider
            .when('/test', {
                templateUrl: 'templates/test.html'
            });
    }
]);

app.run(['$rootScope','$location','TracksPopularityService','Tracks',function($rootScope,$location,TrackPopularityService,Tracks){

}]);







