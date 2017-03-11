<?php

namespace App\Controllers;

use Psr\Log\LoggerInterface;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;
use App\Models\Tracks as Tracks;

final class TrackController
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

    function votesPlaylist(Request $request, Response $response,$args){
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

    function addToPlaylist(Request $request, Response $response,$args){
        if(isset($_POST['track_id']) && isset($_POST['playlist_id'])){
          $playlist = new Playlist();
          $playlist->id = $_POST['playlist_id'];
          $playlist->track_id = $_POST['track_id'];
          $playlist->save();
        }else{
          echo("Erreur - playlist_id ou track_id invalide");
        }
    }

    function removeFromPlaylist(Request $request, Response $response,$args){
      if(isset($_POST['track_id'])){
        $playlist = Playlist::where('track_id', '=',$_POST['track_id']);
        $playlist->delete();
      }else{
        echo("Erreur - track_id invalide");
      }
    }

    function addTrack(Request $request, Response $response,$args){
      if(isset($_POST['track_id'])){
        $track = new Tracks();
        $track->track_id = $_POST['track_id'];
        $track->save();
      }else{
        echo("Erreur - track_id invalide");
      }
    }

    function getTopTracks(Request $request, Response $response,$args){
      $topTrack = [];
      $notes = [];
      foreach (Tracks::all() as $track) {
        $n = $track->like - $track->dislike;
        array_push($notes, array($track => $n));
      }
      arsort($notes);
      $i = 0;
      foreach ($notes as $track => $note) {
        if($i < 5){
          array_push($topTrack,$track);
          $i++;
        }else{
          break;
        }
      }
      return $topTrack;
    }

}

 ?>
