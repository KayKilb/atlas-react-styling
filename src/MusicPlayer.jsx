import React from 'react';
import CurrentlyPlaying from './components/CurrentlyPlaying';
import Playlist from './components/Playlist';

const MusicPlayer = () => {
  return (
    <div className="music-player flex flex-col md:flex-row justify-between p-4 gap-8 bg-primaryPurple-light">
      <CurrentlyPlaying />
      <Playlist />
    </div>
  );
};

export default MusicPlayer;
