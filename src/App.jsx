import React from 'react';
import CoverArt from './components/CoverArt';
import SongTitle from './components/SongTitle';
import MusicPlayer from './MusicPlayer';
import Footer from './components/Footer';
import PlayControls from './components/PlayControls';
import PlayListItem from './components/PlayListItem';

function App() {
  return (
    <div className="h-full flex flex-col justify-between p-8 min-h-screen">
      <CoverArt />
      <SongTitle title="Tidal Drift" author="Echoes of the Sea" />
      <MusicPlayer />
      <PlayControls />
      <div className="mt-4">
        {/* Sample PlayListItem components */}
        <PlayListItem title="Song Title 1" genre="Pop" length="3:45" />
        <PlayListItem title="Song Title 2" genre="Rock" length="4:20" />
        <PlayListItem title="Song Title 3" genre="Jazz" length="5:10" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
