<?php
require 'vendor/autoload.php';
use server;

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Content-type: text/html; charset=UTF-8');
header('Access-Control-Allow-Headers: X-Requested-With');
$app = new \Slim\Slim();

$app->get('playlist/{id}',function(server $server){
    $server->getPlaylist();
});


$app->post('/votes', function (server $server) {
  $server->votesPlaylist();
  $server->votesTrack();
});

$app->post('/addToPlaylist', function(server $server){
  $server->addToPlaylist();
});

$app->post('playlist/removePlaylist', function(server $server){
  $server->removePlaylist();
});

$app->post('/removeFromPlaylist', function(server $server){
  $server->removeFromPlaylist();
});

$app->post('playlist/createPlaylist', function(server $server){
  $server->createPlaylist();
});

$app->post('/addTrack', function(server $server){
  $server->addTrack();
});

$app->run();
