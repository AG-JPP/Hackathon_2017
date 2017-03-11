/**
 * Created by debian on 10/03/17.
 */

//Controller


app.controller("InitController", ['$scope', 'Tracks', 'TrackInitService', '$http', 'TrackBack', function ($scope, Tracks, TrackInitService, $http, TrackBack) {

    $scope.queue = [];

    $scope.getPopulairesTracks = function () {
        $scope.tracksPopular = TrackInitService.getPopular();
        $scope.tracksBuzz = TrackInitService.getBuzz();
    };


    $scope.addToQueue = function (element) {
        var alreadyExist = false;
        $.each($scope.queue, function (k, v) {
            if (element.id === v.id && alreadyExist === false) {
                alreadyExist = true;
            }
        });

        if (!alreadyExist) {
            $scope.queue.push(element);
            $http({
                method: 'POST',
                url: 'http://localhost:6060/add',
                headers: {
                    'Content-type': 'application/json'
                },
                responseType: 'json',
                data: {"entry": element.audio}
            }).then(function (element) {
                TrackBack.addToPlaylist({"id": 1, "track_id" : element.id},{});
                TrackBack.addTrack({"track_id":element.id},{});
            });

            $scope.queue = $scope.getQueue();
        }

    };

    $scope.getQueue = function () {
        return $scope.queue;
    }
}]);

app.controller("SearchController", ['$scope', 'TrackSearchService', function ($scope, Tracks, TrackSearchService) {

    $scope.searchTracks = function () {
        TrackSearchService.search();
        $scope.track = TrackSearchService.getTracks();
        console.log($scope.track);
    }
}]);

app.controller("SearchTypeController", ['$scope', 'TrackSearchTypeService', function ($scope, Tracks, TrackSearchTypeService) {

    $scope.searchTrackType = function () {
        TrackSearchTypeService.searchType();
        $scope.tracks = TrackSearchTypeService.getTracks();
        console.log($scope.tracks);
    }

}]);

app.controller("PlaylistController", ["$scope", 'playlistService', function ($scope, Tracks, Playlist, TrackBack, playlistService) {

    $scope.getPlaylist = function () {
        $scope.playlist = playlistService.getPlaylist();
    }

    $scope.addToPlaylist = function (tid, pid) {
        playlistService.addToPlaylist(tid, pid);
    }

    $scope.removePlaylist = function () {
        playlistService.removePlaylist();
    }

    $scope.removeFromPlaylist = function (id) {
        playlistService.removeFromPlaylist(id);
    }

    $scope.createPlaylist = function (tid) {
        playlistService.createPlaylist(tid);
    }

    $scope.addTrack = function (tid) {
        playlistService.addTrack(tid);
    }

    $scope.vote = function (v, tid) {
        playlistService.votes(v, tid);
    }

}]);



