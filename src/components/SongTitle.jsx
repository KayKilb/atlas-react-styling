import React from 'react';

const SongTitle = ({ title, author }) => {
  return (
    <div className="w-[420px] h-[77px] absolute top-[-944px] left-[-252px] flex flex-col items-start opacity-0">
      <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
      <p className="text-lg text-gray-600">{author}</p>
    </div>
  );
};

export default SongTitle;
