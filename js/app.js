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


//Factory
app.factory("Tracks", ['$resource', 'api', function ($resource, api) {
    return $resource(api.url+"&id=:id", {id: '@_id'},
        {
            populaire: {method: 'GET', url: api.url + '&order=popularity_total&limit=8'},
            recherche: {method: 'GET', url: api.url + '&namesearch=:name&artist_name=:name&album_name=:name'},
            rechercheGenre: {method: 'GET', url: api.url + '&tags=:genre'}
        });
}]);


//service
app.service('TrackPopularityService',['Tracks',function (Tracks) {
    this.tracksPopularity = [];
    this.init= function () {
        var self = this;
        this.tracksPopularity = Tracks.populaire(function (success) {
            success.forEach(function (element) {
                this.tracksPopularity.push(element);
            })
        })
    }
    this.init();
}]);

//Controller
app.controller("testController",['$scope', 'Tracks',function ($scope,Tracks) {

}]);

