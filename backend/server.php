<?php

$bdd = new PDO('mysql:host=localhost;dbname=hackathon;charset=utf-8', 'root', 'root');



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
