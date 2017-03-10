/**
 * Created by debian on 10/03/17.
 */



//Factory
app.factory("Tracks", ['$resource', 'api', function ($resource, api) {
    return $resource(api.url+"&id=:id", {id: '@_id'},
        {
            populaire: {method: 'GET', url: api.url + '&order=popularity_total&limit=8'},
            recherche: {method: 'GET', url: api.url + '&namesearch=:name&artist_name=:name&album_name=:name'},
            rechercheGenre: {method: 'GET', url: api.url + '&tags=:genre'}
        });
}]);

app.factory("Playlist", ['$resource', 'local', function($resource, local){
    return $resource(local.url + "playlist/&id=:id" , {id: "@_id"},
    {
      removePlaylist : {method : "DELETE", url : local.url + "playlist/removePlaylist"},
      createPlaylist : {method : "POST", url : local.url + "playlist/createPlaylist/&track_id:=id&newPId:=id"},
    });
}]);

app.factory("TrackBack", ['$resource', 'local', function($resource, local){
    return $resource(local.url + "track/&id=:id", {id: "@_id"},
  {
        votes : {method: 'POST', url: local.url + "track/votesPlaylist/&vote:=vote&track_id:=id" },
        addToPlaylist : {method: "POST", url : local.url + "track/addToPlaylist/&playlist_id:=id&track_id:=id"},
        removeFromPlaylist : {method : "DELETE", url : local.url + "track/removeFromPlaylist/&track_id"},
        addTrack : {method : "POST", url : local.url + "track/addTrack&track_id:=id"}
  })
}]);
