<?php

namespace App\Controllers;

use Psr\Log\LoggerInterface;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;

final class PlaylistController
{
    private $view;
    private $logger;
    private $playlist;

    public function __construct($view, LoggerInterface $logger, $playlist)
    {
        $this->view = $view;
        $this->logger = $logger;
        $this->model = $playlist;
    }

    function removePlaylist(){
        Playlist::truncate();
    }

    function createPlaylist(){
      if(isset($_POST['track_id']) &&  isset($_POST['newPId'])){
        $p = new Playlist();
        $p->track_id = $_POST['track_id'];
        $p->id = $_POST['newPId'];
        $p->save();
      }else{
        echo('Erreur - track_id invalide');
      }
    }

}

 ?>
