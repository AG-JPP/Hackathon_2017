/**
 * Created by debian on 10/03/17.
 */

//Controller
app.controller("PopularController",['$scope', 'Tracks', 'TrackPopularityService', function ($scope,Tracks, TrackPopularityService) {

    $scope.getPopulairesTracks = function(){
      $scope.tracks = TrackPopularityService.getPopulairesTracks();
      console.log($scope.tracks);
    }

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
