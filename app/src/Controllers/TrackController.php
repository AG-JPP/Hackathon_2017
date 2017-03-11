<?php

namespace App\Controllers;

use Psr\Log\LoggerInterface;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;

final class TrackController
{
    private $view;
    private $logger;
    private $track;

    public function __construct($view, LoggerInterface $logger, $track)
    {
        $this->view = $view;
        $this->logger = $logger;
        $this->model = $track;
    }

    function votesPlaylist(){
        if(isset($_POST['vote']) && isset($_POST['track_id'])){
          $t = Tracks::where('track_id','=',$_POST['track_id']);
          $p = Playlist::where('track_id','=',$_POST['track_id']);
          if($_POST['vote'] == 'like'){
            $t->like = $t->like + 1;
            $p->like = $p->like + 1;
          }elseif ($_POST['vote'] == 'dislike') {
            $t->dislike = $t->dislike + 1;
            $p->dislike = $p->dislike + 1;
          }
          $t->save();
        }else{
          echo('Erreur - track_id ou vote invalide');
        }
    }

    function addToPlaylist(){
        if(isset($_POST['track_id']) && isset($_POST['playlist_id'])){
          $playlist = new Playlist();
          $playlist->id = $_POST['playlist_id'];
          $playlist->track_id = $_POST['track_id'];
          $playlist->save();
        }else{
          echo("Erreur - playlist_id ou track_id invalide");
        }
    }

    function removeFromPlaylist(){
      if(isset($_POST['track_id'])){
        $playlist = Playlist::where('track_id', '=',$_POST['track_id']);
        $playlist->delete();
      }else{
        echo("Erreur - track_id invalide");
      }
    }

    function addTrack(){
      if(isset($_POST['track_id'])){
        $track = new Track();
        $track->track_id = $_POST['track_id'];
        $track->save();
      }else{
        echo("Erreur - track_id invalide");
      }
    }

}

 ?>
