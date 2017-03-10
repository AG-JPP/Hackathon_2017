/**
 * Created by debian on 10/03/17.
 */

//Controller

app.controller("InitController",['$scope', 'Tracks', 'TrackInitService', function ($scope,Tracks, TrackInitService) {

    $scope.getPopulairesTracks = function(){
      $scope.tracksPopular = TrackInitService.getPopular();
      $scope.tracksBuzz = TrackInitService.getBuzz();
      console.log($scope.tracksPopular);
    }
    $scope.getPopulairesTracks();
}]);

app.controller("SearchController", ['$scope', 'Tracks', 'TrackSearchService', function($scope, Tracks, TrackSearchService){

    $scope.searchTracks = function(){
      TrackSearchService.search();
      $scope.track = TrackSearchService.getTracks();
      console.log($scope.track);
    }
}]);

app.controller("SearchTypeController", ['$scope', 'Tracks', 'TrackSearchTypeService', function($scope, Tracks, TrackSearchTypeService){

  $scope.searchTrackType = function(){
    TrackSearchTypeService.searchType();
    $scope.tracks = TrackSearchTypeService.getTracks();
    console.log($scope.tracks);


  }

}]);



