/**
 * Created by debian on 10/03/17.
 */

//Controller
app.controller("MainController",['$scope', 'Tracks', 'TrackPopularityService'function ($scope,Tracks, TrackPopularityService) {

    $scope.getPopulairesTracks = function(){
      var tracks = TrackPopularityService.getPopulairesTracks();
      console.log(tracks);
    }

}]);
