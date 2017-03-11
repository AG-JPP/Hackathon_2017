$(document).ready(function(){

  var myPlaylist = new jPlayerPlaylist({
    jPlayer: "#jplayer_N",
    cssSelectorAncestor: "#jp_container_N"
  }, [
      {
          title: "titre",
          artist: "titre",
          oga: "http://192.168.1.131:8001/mpd.ogg",
          poster: "images/m0.jpg"
      }
  ], {
    playlistOptions: {
      enableRemoveControls: true,
      autoPlay: true
    },
    swfPath: "js/jPlayer",
    supplied: "webmv, ogv, m4v, oga, ogg",
    smoothPlayBar: true,
    keyEnabled: true,
    audioFullScreen: false
  });


  $.ajax({
    type: 'GET',
    url: 'http://192.168.1.131:6060/current',

    success: function (data) {
      console.log(data);
    },
    error: function (err) {
      console.log(err)
    }
  }).done(function (data) {


  });


    /**
     * $(document).ready(function () {
    var p = {};

    $.ajax({
        type: 'GET',
        url: 'http://192.168.1.131:6060/current',

        success: function (data) {
            console.log(data);
        },
        error: function (err) {
            console.log(err)
        }
    }).done(function (data) {

        var myPlaylist = new jPlayerPlaylist({
            jPlayer: "#jplayer_N",
            cssSelectorAncestor: "#jp_container_N"
        }, [
            {
                title: data.song.title,
                artist: data.song.artiste,
                mp3: "http://192.168.1.131:8001/mpd.ogg",
                oga: "http://192.168.1.131:8001/mpd.ogg",
                poster: "images/m0.jpg"
            }
        ], {
            playlistOptions: {
                enableRemoveControls: true,
                autoPlay: true
            },
            swfPath: "js/jPlayer",
            supplied: "webmv, ogv, m4v, oga, mp3",
            smoothPlayBar: true,
            keyEnabled: true,
            audioFullScreen: false
        });


    });

});
     **/

});