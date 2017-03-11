<?php
/*
	Routes
	controller needs to be registered in dependency.php
*/

$app->get('/', 'App\Controllers\HomeController:dispatch')->setName('homepage');

$app->post('/playlist/removePlaylist','App\Controllers\PlaylistController:removePlaylist')->setName('removePlaylist');

$app->post('/playlist/createPlaylist/{track_id}/{newPId}','App\Controllers\PlaylistController:createPlaylist')->setName('createPlaylist');

$app->post('/track/votesPlaylist/{vote}/{track_id}','App\Controllers\TrackController:votesPlaylist')->setName('votesPlaylist');

$app->post('/track/addToPlaylist/{playlist_id}/{track_id}','App\Controllers\TrackController:addToPlaylist')->setName('addToPlaylist');

$app->post('/track/removeFromPlaylist/{track_id}','App\Controllers\TrackController:removeFromPlaylist')->setName('removeFromPlaylist');

$app->post('/track/addTrack/{track_id}','App\Controllers\TrackController:addTrack')->setName('addTrack');

$app->get('/playlist','App\Controllers\PlaylistController:getPlaylist')->setName('getPlaylist');

$app->get('/tracks', 'App\Controllers\TrackController:getTopTracks')->setName('getTopTracks');
