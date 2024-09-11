import React from 'react';

const PlayListItem = ({ title, genre, length }) => {
  return (
    <div className="playlist-item grid grid-cols-3 gap-4 p-2 border-b border-gray-200 items-center">
      <div className="col-span-1 text-lg font-medium">{title}</div>
      <div className="col-span-1 text-sm text-gray-500">{genre}</div>
      <div className="col-span-1 text-sm text-gray-500 text-right">{length}</div>
    </div>
  );
};

export default PlayListItem;
