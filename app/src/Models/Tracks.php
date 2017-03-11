<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tracks extends Model
{
  protected $table = "tracks";
  protected $primaryKey = "id";

  public $timestamps = false;
}
