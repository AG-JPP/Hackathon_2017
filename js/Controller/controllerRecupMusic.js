/**
 * Created by debian on 10/03/17.
 */

//Controller
app.controller("PopularController",['$scope', 'Tracks', 'TrackPopularityService', function ($scope,Tracks, TrackPopularityService) {

    $scope.getPopulairesTracks = function(){
      var tracks = TrackPopularityService.getPopulairesTracks();
      console.log(tracks);
    }

}]);

app.controller("SearchController", ['$scope', 'Tracks', 'TrackSearchService', function($scope, Tracks, TrackSearchService){

    $scope.searchTracks = function(){
      TrackSearchService.search();
      var track = TrackSearchService.getTracks();
      console.log(track);
    }
}]);

app.controller("SearchTypeController", ['$scope', 'Tracks', 'TrackSearchTypeService', function($scope, Tracks, TrackSearchTypeService){

  $scope.searchTrackType = function(){
    TrackSearchTypeService.searchType();
    var tracks = TrackSearchTypeService.getTracks();
    console.log(tracks);


  }

}]);
