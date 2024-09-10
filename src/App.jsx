import SongTitle from "./components/SongTitle";
import Footer from "./components/Footer";
import MusicPlayer from "./MusicPlayer";
import CoverArt from "./components/CoverArt";

function App() {
  return (
    <div className="h-full flex flex-col justify-between p-8 min-h-screen">
      <CoverArt/> {/* Render CoverArt component */}
      <SongTitle />
      <MusicPlayer />
      <Footer />
    </div>
  );
}

export default App;
