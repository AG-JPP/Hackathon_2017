/**
 * Created by debian on 10/03/17.
 */



//service
app.service('TrackInitService',['Tracks',function (Tracks) {
    this.tracksPopularity = [];
    this.tracksBuzz = [];
    this.topTrack = [];

    this.init= function () {
        var self = this;
         Tracks.populaire(function (success) {
            success.results.forEach(function(element){
                self.tracksPopularity.push(element)
            })

        });
        Tracks.buzzrate(function (success) {
            success.results.forEach(function(element){
                self.tracksBuzz.push(element)
            })

        });
        Tracks.topTrack(function(success){
            success.results.forEach(function(element){
              Tracks.track({id : element.id}, function(res){
                res.results.forEach(function(e){
                  if(element.id == e.id){
                    self.topTrack.push(e);
                  }
                });
              });
            });
        });

    };
    this.getPopular = function (){
        return this.tracksPopularity
    };
    this.getBuzz = function (){
        return this.tracksBuzz
    };

    this.getTopTracks = function(){
        return this.topTrack;
    };

    this.init();
}]);

app.service('TrackSearchService',['Tracks',function (Tracks) {
    this.tracksSearch = [];
    this.search= function () {
        this.tracksSearch = Tracks.recherche({namesearch : $scope.search.namesearch, artist_name : $scope.search.artist_name, album_name : $scope.search.artist_name}, function (success) {
            success.forEach(function (element) {
                this.tracksSearch.push(element);
            })
        })
    }
    this.getTracks = function (){
        return this.tracksSearch
    };

}]);


app.service('TrackSearchTypeService',['Tracks',function (Tracks) {
    this.tracksType = [];
    this.searchType = function () {
        this.tracksType = Tracks.rechercheGenre({tags : scope.search.genre}, function (success) {
            success.forEach(function (element) {
                this.tracksType.push(element);
            })
        })
    }
    this.getTracks = function () {
        return this.tracksType
    }
}]);


app.service('playlistService', ['Playlist', 'TrackBack', function(Playlist, TrackBack){

    this.playlist = [];

    this.getPlaylist = function(){
      this.playlist = Playlist.query(function(success){});
    }

    this.addToPlaylist = function(track_id, playlist_id){
        TrackBack.addToPlaylist({playlist_id : playlist_id, track_id : track_id});
    }

    this.removePlaylist = function(){
        Playlist.removePlaylist();
    }

    this.removeFromPlaylist = function(track_id){
      TrackBack.removeFromPlaylist({track_id : track_id});
    }

    this.createPlaylist = function(track_id){
      Playlist.createPlaylist({track_id : track_id, newPId :  Math.floor((Math.random() * 10000) + 1) });
    }

    this.addTrack = function(track_id){
      TrackBack.addTrack({track_id : track_id});
    }

    this.vote = function(vote, track_id){
      TrackBack.votes({vote : vote , track_id : track_id}, {});
    }

}]);
