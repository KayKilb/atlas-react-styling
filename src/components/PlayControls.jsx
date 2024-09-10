import React from 'react';
import { PlayIcon, PauseIcon, BackwardIcon, ForwardIcon, ShuffleIcon } from '@heroicons/react/24/outline'; // Importing icons from Heroicons

const PlayControls = () => {
  return (
    <div className="w-[413px] h-[63px] absolute top-[-706px] left-[-270px] flex items-center justify-between opacity-0">
      <button className="flex items-center justify-center p-2 hover:bg-gray-200 rounded">
        <SpeedIcon className="w-6 h-6 text-gray-600" />
      </button>
      <button className="flex items-center justify-center p-2 hover:bg-gray-200 rounded">
        <BackwardIcon className="w-6 h-6 text-gray-600" />
      </button>
      <button className="flex items-center justify-center p-2 hover:bg-gray-200 rounded">
        <PlayIcon className="w-6 h-6 text-gray-600" />
      </button>
      <button className="flex items-center justify-center p-2 hover:bg-gray-200 rounded">
        <ForwardIcon className="w-6 h-6 text-gray-600" />
      </button>
      <button className="flex items-center justify-center p-2 hover:bg-gray-200 rounded">
        <ShuffleIcon className="w-6 h-6 text-gray-600" />
      </button>
    </div>
  );
};

export default PlayControls;
