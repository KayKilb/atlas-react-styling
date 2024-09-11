import React from 'react';
import CurrentlyPlaying from './CurrentlyPlaying';
import Playlist from './Playlist';

const MusicPlayer = () => {
  return (
        <div className="music-player flex flex-col md:flex-row justify-between p-4 gap-8">
      {/* Currently Playing section */}
      <CurrentlyPlaying />
      
      {/* Playlist section */}
      <Playlist />
    </div>
  );
};

export default MusicPlayer;
