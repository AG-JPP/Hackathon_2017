<?php


header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Content-type: text/html; charset=UTF-8');
header('Access-Control-Allow-Headers: X-Requested-With');

function getPlaylist(){
    $bdd = new PDO('mysql:host=localhost;dbname=hackathon;charset=utf8','root','root');
   $querry = $bdd->query('SELECT * FROM playlists');
   echo "php get";
    return $querry->execute();
}

function votesPlaylist(){
    $bdd = new PDO('mysql:host=localhost;dbname=hackathon;charset=utf8','root','root');
    if(isset($_POST['vote']) && isset($_POST['track_id'])){
      if($_POST['vote'] == 'like'){
        $query = $bdd->prepare('UPDATE playlists SET likes = likes+1 WHERE track_id= :track_id');
      }elseif ($_POST['vote'] == 'dislike') {
        $query = $bdd->prepare('UPDATE playlists SET dislikes = dislikes+1 WHERE track_id= :track_id');
      }
      $query->execute(array('track_id' => $_POST['track_id']));
    }else{
      echo('Erreur - track_id ou vote invalide');
    }
}

function votesTrack(){
    $bdd = new PDO('mysql:host=localhost;dbname=hackathon;charset=utf8','root','root');
  if(isset($_POST['vote']) && isset($_POST['track_id'])){
    if($_POST['vote'] == 'like'){
      $track = $bdd->prepare('UPDATE tracks SET likes = likes+1 WHERE id= :track_id');
    }elseif ($_POST['vote'] == 'dislike') {
      $track = $bdd->prepare('UPDATE tracks SET dislikes = dislikes+1 WHERE id= :track_id');
    }
    $track->execute(array('track_id' => $_POST['track_id']));
  }else{
    echo ("Erreur - track_id ou vote invalide");
  }
}

function addToPlaylist(){
    $bdd = new PDO('mysql:host=localhost;dbname=hackathon;charset=utf8','root','root');
    if(isset($_POST['track_id']) && isset($_POST['playlist_id'])){
      $playlist = $bdd->prepare('INSERT INTO playlists(id, track_id) VALUES(:playlist_id, :track_id)');
      $playlist->execute(array('playlist_id' => $_POST['playlist_id'], 'track_id' => $_POST['track_id']));
    }else{
      echo("Erreur - playlist_id ou track_id invalide");
    }
}

function removePlaylist(){
    $bdd = new PDO('mysql:host=localhost;dbname=hackathon;charset=utf8','root','root');
    $query = $bdd->query('TRUNCATE TABLE playlist');
    $query->execute();
}

function removeFromPlaylist(){
    $bdd = new PDO('mysql:host=localhost;dbname=hackathon;charset=utf8','root','root');
  if(isset($_POST['track_id'])){
    $playlist = $bdd->prepare('DELETE FROM playlist WHERE track_id = :track_id');
    $playlist->execute(array('track_id' => $_POST['track_id']));
  }else{
    echo("Erreur - track_id invalide");
  }
}

function createPlaylist(){
    $bdd = new PDO('mysql:host=localhost;dbname=hackathon;charset=utf8','root','root');
  if(isset($_POST['track_id']) &&  isset($_POST['newPId'])){
    $playlist = $bdd->prepare('INSERT INTO playlists(id, track_id) VALUES(:playlist_id, :track_id)');
    $playlist->execute(array('playlist_id' => $_POST['newPId'], 'track_id' => $_POST['track_id']));
  }else{
    echo('Erreur - track_id invalide');
  }
}

function addTrack(){
    $bdd = new PDO('mysql:host=localhost;dbname=hackathon;charset=utf8','root','root');
  if(isset($_POST['track_id'])){
    $track = $bdd->prepare('INSERT INTO tracks(id) VALUES(:track_id)');
    $track->execute(array('track_id' => $_POST['track_id']));
  }else{
    echo("Erreur - track_id invalide");
  }
}
