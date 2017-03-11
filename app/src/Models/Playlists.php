<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Playlists extends Model
{
  protected $table = "playlists";
  protected $primaryKey = "id";

  public $timestamps = false;
}
