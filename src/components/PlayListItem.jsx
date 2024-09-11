import React from 'react';

const PlayListItem = ({ title, genre, length }) => {
  return (
    <div className="playlist-item p-2 border-b border-gray-200 flex justify-between items-center">
      <div className="text-lg font-medium">{title}</div>
      <div className="text-sm text-gray-500">{genre}</div>
      <div className="text-sm text-gray-500">{length}</div>
    </div>
  );
};

export default PlayListItem;
