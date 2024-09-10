import React from 'react';

const CoverArt = () => {
    return (
        <div
            className="w-96 h-96"
        >
            <img
                src="./assets/placeholder.svg"
                alt="Cover Art"
                className="w-full h-full object-cover rounded-lg"
            />
        </div>
    );
};

export default CoverArt;
