import React from 'react';

const PlayListItem = ({ title, genre, length }) => {
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-300 hover:bg-gray-100">
      <div className="flex flex-col">
        <span className="text-lg font-semibold text-gray-800">{title}</span>
        <span className="text-sm text-gray-600">{genre}</span>
      </div>
      <span className="text-gray-500">{length}</span>
    </div>
  );
};

export default PlayListItem;
