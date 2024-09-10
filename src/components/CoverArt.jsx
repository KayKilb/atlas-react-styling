import React from 'react';

const CoverArt = () => {
    return (
        <div
            classname="w-[436px] h-[422px] absolute top-[-1465px] left-[-274px] gap-0 opacity-0"
            >
                <img
                    src="/src/assets/placeholder.svg"
                    alt="Cover Art"
                    className="w-full h-full object-cover"
                />
            </div>
    );
};

export default CoverArt;