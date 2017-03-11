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

    function getPlaylist(){
      return Playlist::all();
    }

    function removePlaylist(){
        Playlists::truncate();
    }

    function createPlaylist(){
      if(isset($_POST['track_id']) &&  isset($_POST['newPId'])){
        $p = new Playlists();
        $p->track_id = $_POST['track_id'];
        $p->id = $_POST['newPId'];
        $p->save();
      }else{
        echo('Erreur - track_id invalide');
      }
    }

}

 ?>
