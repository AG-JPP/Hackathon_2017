/**
 * Created by debian on 10/03/17.
 */



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