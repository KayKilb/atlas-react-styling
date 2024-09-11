import React from 'react';
import PlayListItem from './PlayListItem';

const playlistItems = [
  { title: "Song Title 1", genre: "Pop", length: "3:45" },
  { title: "Song Title 2", genre: "Rock", length: "4:20" },
  { title: "Song Title 3", genre: "Jazz", length: "5:10" },
  { title: "Song Title 4", genre: "Classical", length: "3:30" },
  { title: "Song Title 5", genre: "Hip Hop", length: "4:00" },
  { title: "Song Title 6", genre: "Electronic", length: "3:55" },
  { title: "Song Title 7", genre: "Reggae", length: "4:15" },
  { title: "Song Title 8", genre: "Blues", length: "5:05" },
  { title: "Song Title 9", genre: "Country", length: "4:25" },
  { title: "Song Title 10", genre: "Indie", length: "3:50" }
];

const Playlist = () => {
  return (
    <div className="playlist w-1/3 ml-auto">
      {playlistItems.map((item, index) => (
        <PlayListItem
          key={index}
          title={item.title}
          genre={item.genre}
          length={item.length}
        />
      ))}
    </div>
  );
};

export default Playlist;
