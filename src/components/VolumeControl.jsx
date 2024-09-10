import React from 'react';

const VolumeControl = () => {
    return (
        <div className="w-[200px] flex items-center">
            <label htmlFor="volume" className="sr-only">Volume</label>
            <input
                id="volume"
                type="range"
                min="0"
                max="100"
                className="w-full h-1 bg-gray-200 rounded-lg cursor-pointer appearance-none"
                />
        </div>
    );
};

export default VolumeControl;
