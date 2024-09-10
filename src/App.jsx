import React from 'react';
import Footer from './components/Footer';
import CurrentlyPlaying from './components/CurrentlyPlaying';
import PlayListItem from './components/PlayListItem';

function App() {
  return (
    <div className="h-full flex flex-col justify-between p-8 min-h-screen">
      <CurrentlyPlaying />
      <div className="mt-4">
        <PlayListItem title="Song Title 1" genre="Pop" length="3:45" />
        <PlayListItem title="Song Title 2" genre="Rock" length="4:20" />
        <PlayListItem title="Song Title 3" genre="Jazz" length="5:10" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
