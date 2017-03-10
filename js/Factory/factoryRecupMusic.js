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
app.factory("Playlist", ['$resource', 'local' function($resource, local){
    return $resource(local.url,
    {
      votes : {method: 'POST', url: local.url + "/votesPlaylist" },
      addToPlaylist : {method: "POST", url : local.url + "addToPlaylist"},
      removePlaylist : {method : "POST", url : local.url + "removePlaylist"},
      removeFromPlaylist : {method : "POST", url : local.url + "removeFromPlaylist"},
      createPlaylist : {method : "POST", url : local.url + "createPlaylist"},
      addTrack : {method : "POST", url : local.url + "addTrack"}
    });
}]);
