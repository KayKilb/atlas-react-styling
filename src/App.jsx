import React from 'react';
import Footer from './components/Footer';
import CurrentlyPlaying from './components/CurrentlyPlaying';
import Playlist from './components/Playlist';

function App() {
  return (
    <div className="h-full flex flex-col justify-between p-8 min-h-screen">
      <div className="flex">
        <CurrentlyPlaying />
        <Playlist />
      </div>
      <Footer />
    </div>
  );
}

export default App;
