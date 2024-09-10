import React from 'react';
import CoverArt from './components/CoverArt';
import SongTitle from './SongTitle';
import PlayControls from './PlayControls';
import VolumeControl from './VolumeControl';

const CurrentlyPlaying = () => {
  return (
    <div className="w-[436px] h-[630px] absolute top-[-1450px] left-[238px] gap-0 opacity-100">
      <CoverArt />
      <SongTitle title="Song Title" author="Artist Name" />
      <PlayControls />
      <VolumeControl />
    </div>
  );
};

export default CurrentlyPlaying;
