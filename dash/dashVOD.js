// DASH PLAYER
var player = dashjs.MediaPlayer().create();
player.initialize(document.getElementById('video'), '../reference/matrixDashVOD/dashStream.mpd', true);