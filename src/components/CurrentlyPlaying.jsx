import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayControls from "./PlayControls";
import VolumeControl from './VolumeControl';
import placeholder from './assets/placeholder.svg';


export default function CurrentlyPlaying() {
  return (
    <div className="currently-playing w-full p-4 justify-center">
      <CoverArt coverImage={placeholder} />
      <SongTitle title="Painted in Blue" artist="Soul Canvas" />
      <PlayControls />
      <VolumeControl />
    </div>
  );
}
