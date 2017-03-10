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

app.controller("SearchController", ['$scope', 'TrackSearchService', function($scope, Tracks, TrackSearchService){

    $scope.searchTracks = function(){
      TrackSearchService.search();
      $scope.track = TrackSearchService.getTracks();
      console.log($scope.track);
    }
}]);

app.controller("SearchTypeController", ['$scope', 'TrackSearchTypeService', function($scope, Tracks, TrackSearchTypeService){

  $scope.searchTrackType = function(){
    TrackSearchTypeService.searchType();
    $scope.tracks = TrackSearchTypeService.getTracks();
    console.log($scope.tracks);
  }

}]);

app.controller("PlaylistController", ["$scope", 'playlistService',function($scope, Tracks, Playlist, TrackBack, playlistService){

    $scope.getPlaylist = function(){
      $scope.playlist = playlistService.getPlaylist();
    }

    $scope.addToPlaylist = function(tid, pid){
      playlistService.addToPlaylist(tid, pid);
    }

    $scope.removePlaylist = function(){
      playlistService.removePlaylist();
    }

    $scope.removeFromPlaylist = function(id){
      playlistService.removeFromPlaylist(id);
    }

    $scope.createPlaylist = function(tid){
      playlistService.createPlaylist(tid);
    }

    $scope.addTrack = function(tid){
      playlistService.addTrack(tid);
    }

    $scope.vote = function(v, tid){
      playlistService.votes(v, tid);
    }

}]);



