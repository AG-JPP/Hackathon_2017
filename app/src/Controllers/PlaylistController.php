<?php

namespace App\Controllers;

use Psr\Log\LoggerInterface;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;
use App\Models\Playlists as Playlists;

final class PlaylistController
{
    private $view;
    private $logger;
    private $router;

    public function __construct($c)
    {
        $this->view = $c->get('view');
        $this->logger = $c->get('logger');
        $this->router = $c->get('router');
    }

    function getPlaylist(Request $request, Response $response,$args){
      $ps = Playlists::all();
      return $ps;
    }

    function removePlaylist(Request $request, Response $response,$args){
        Playlists::truncate();
    }


    function createPlaylist(Request $request, Response $response, $args){
      if(isset($args['track_id']) &&  isset($args['newPId'])){
        $p = new Playlists();
        $p->track_id = $args['track_id'];
        $p->id = $args['newPId'];
        $p->save();
      }else{
        echo('Erreur - track_id invalide');
      }
    }

}

 ?>
