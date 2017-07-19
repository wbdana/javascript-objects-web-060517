let playlist = new Object({ 'Weather Report' : 'River People', 'The Meters' : 'This is My Last Affair' });

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  console.log(playlist);
};

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  console.log(playlist);
};
