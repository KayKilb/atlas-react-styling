import React from 'react';

const PlayListItem = ({ title, genre, length }) => {
  return (
    <div className="w-[391px] h-[47px] absolute top-[-341px] left-[-260px] flex items-center justify-between p-2 border-b border-gray-300 bg-white opacity-0">
      <div className="flex flex-col">
        <span className="text-sm font-semibold text-gray-800">{title}</span>
        <span className="text-xs text-gray-600">{genre}</span>
      </div>
      <span className="text-gray-500 text-sm">{length}</span>
    </div>
  );
};

export default PlayListItem;
