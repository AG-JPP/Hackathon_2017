/**
 * Created by debian on 10/03/17.
 */



//service
app.service('TrackPopularityService',['Tracks',function (Tracks) {
    this.tracksPopularity = [];
    this.init= function () {
        var self = this;
         Tracks.populaire(function (success) {
            success.results.forEach(function(element){
                self.tracksPopularity.push(element)
            })

        })

    };
    this.getTracks = function (){
        return this.tracksPopularity
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

app.service('playlistService', ['Playlist', function(Playlist){
    
}]);
