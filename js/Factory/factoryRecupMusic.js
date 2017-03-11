/**
 * Created by debian on 10/03/17.
 */



//Factory
app.factory("Tracks", ['$resource', 'api', function ($resource, api) {
    return $resource(api.url + "&id=:id", {id: '@_id'},
        {
            track: {method:'GET', url: api.url + '&id=:id'},
            populaire: {method: 'GET', url: api.url + '&order=popularity_total&limit=12'},
            recherche: {method: 'GET', url: api.url + '&namesearch=:name&artist_name=:name&album_name=:name'},
            rechercheGenre: {method: 'GET', url: api.url + '&tags=:genre'},
            buzzrate: {method: 'GET', url: api.url + '&boost=buzzrate&limit=6'},
            topTrack:{method:"GET", url: 'http://localhost/Hackathon_2017/public/tracks' }
        });
}]);

app.factory("Playlist", ['$resource', 'local', function ($resource, local) {
    return $resource(local.url + "playlist/&id=:id", {id: "@_id"},
        {
            removePlaylist: {method: "POST", url: local.url + "playlist/removePlaylist"},
            createPlaylist: {method: "POST", url: local.url + "playlist/createPlaylist/:track_id/:id"}
        });
}]);

app.factory("TrackBack", ['$resource', 'local', function ($resource, local) {
    return $resource(local.url + "track/&id=:id", {id: "@_id"},
        {
            votes: {method: 'POST', url: local.url + "track/votesPlaylist/:vote/:track_id"},
            addToPlaylist: {method: "POST", url: local.url + "track/addToPlaylist/:id/:track_id"},
            removeFromPlaylist: {method: "POST", url: local.url + "track/removeFromPlaylist/:track_id"},
            addTrack: {method: "POST", url: local.url + "track/addTrack/:track_id"}
        })
}]);
