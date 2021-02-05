import React, { useState } from 'react';
// import styles
import './styles/app.scss';
//adding componrnts
import Player from './components/Player';
import Song from './components/Song';
import Library from './components/Library';
//improt util
import data from './util';

function App() {
  //state
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div>
      <Song currentSong={currentSong} />
      <Player
        currentSong={currentSong}
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
      />
      <Library songs={songs} />
    </div>
  );
}

export default App;
