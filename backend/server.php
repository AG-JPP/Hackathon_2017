<?php

$bdd = new PDO('mysql:host=localhost;dbname=hackathon;charset=utf-8', 'root', 'root');



function votes(){
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
    if(isset($_POST['track_id']) && isset($_POST['playlist_id'])){
      $playlist = $bdd->prepare('INSERT INTO playlists(id, track_id) VALUES(:playlist_id, :track_id)');
      $playlist->execute(array('playlist_id' => $_POST['playlist_id'], 'track_id' => $_POST['track_id']));
    }else{
      echo("Erreur - playlist_id ou track_id invalide");
    }
}

function removePlaylist(){
    $query = $bdd->query('TRUNCATE TABLE playlist');
    $query->execute();
}

function removeFromPlaylist(){
  if(isset($_POST['track_id'])){
    $playlist = $bdd->prepare('DELETE FROM playlist WHERE track_id = :track_id');
    $playlist->execute(array('track_id' => $_POST['track_id']));
  }else{
    echo("Erreur - track_id invalide");
  }
}

function createPlaylist($newPId){
  if(isset($_POST['track_id'])){
    $playlist = $bdd->prepare('INSERT INTO playlists(id, track_id) VALUES(:playlist_id, :track_id)');
    $playlist->execute(array('playlist_id' => $newPId, 'track_id' => $_POST['track_id']));
  }else{
    echo('Erreur - track_id invalide');
  }

}

function addTrack(){
  if(isset($_POST['track_id'])){
    $track = $bdd->prepare('INSERT INTO tracks(id) VALUES(:track_id)');
    $track->execute(array('track_id' => $_POST['track_id']));
  }else{
    echo("Erreur - track_id invalide");
  }
}
