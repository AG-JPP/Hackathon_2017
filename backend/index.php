<?php
require 'vendor/autoload.php';
use server;

$app = new \Slim\Slim();

$app->post('/votes', function (server $server) {
  $server->votesPlaylist();
  $server->votesTrack();
});

$app->post('/addToPlaylist', function(server $server){
  $server->addToPlaylist();
});

$app->post('/removePlaylist', function(server $server){
  $server->removePlaylist();
});

$app->post('/removeFromPlaylist', function(server $server){
  $server->removeFromPlaylist();
});

$app->post('/createPlaylist', function(server $server){
  $server->createPlaylist();
});

$app->post('/addTrack', function(server $server){
  $server->addTrack();
});

$app->run();
