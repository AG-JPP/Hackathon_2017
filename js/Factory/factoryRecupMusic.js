/**
 * Created by debian on 10/03/17.
 */



//Factory
app.factory("Tracks", ['$resource', 'api', function ($resource, api) {
    return $resource(api.url+"&id=:id", {id: '@_id'},
        {
            populaire: {method: 'GET', url: api.url + '&order=popularity_total&limit=8'},
            recherche: {method: 'GET', url: api.url + '&namesearch=:name&artist_name=:name&album_name=:name'},
            rechercheGenre: {method: 'GET', url: api.url + '&tags=:genre'},
            buzzrate : {method : 'GET', url: api.url + '&boost=buzzrate&limit=6'}
        });
}]);
