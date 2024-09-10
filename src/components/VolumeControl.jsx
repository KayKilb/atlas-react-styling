import React, { useState } from 'react';
import { SpeakerWaveIcon } from '@heroicons/react/24/solid'; // Import the volume icon

const VolumeControl = () => {
  const [volume, setVolume] = useState(50); // Initial volume value

  // Update volume and slider background when the slider value changes
  const handleChange = (event) => {
    const newVolume = event.target.value;
    setVolume(newVolume);
  };

  // Calculate the percentage for the slider background gradient
  const volumePercentage = (volume / 100) * 100;

  return (
    <div className="w-[424px] h-[45px] absolute top-[-519px] left-[-260px] flex items-center gap-0 opacity-100">
      <SpeakerWaveIcon className="w-6 h-6 text-black" />
      <input
        id="volume"
        type="range"
        min="0"
        max="100"
        value={volume}
        onChange={handleChange}
        className="w-full h-2 bg-gray-300 rounded-full appearance-none cursor-pointer"
        style={{
          background: `linear-gradient(to right, #64748b ${volumePercentage}%, #e5e7eb ${volumePercentage}%)`,
        }}
      />
      <style jsx>{`
        input[type='range']::-webkit-slider-thumb {
          width: 20px;
          height: 20px;
          background-color: #64748b; /* Same color as the progress bar */
          border-radius: 50%;
          cursor: pointer;
          -webkit-appearance: none;
        }
        input[type='range']::-moz-range-thumb {
          width: 20px;
          height: 20px;
          background-color: #64748b;
          border-radius: 50%;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default VolumeControl;
