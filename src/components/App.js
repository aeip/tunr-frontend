import React, {useState, useEffect} from 'react';
import './App.scss';
import {Header} from './Header'
import {Playlist} from './Playlist'
import {Favoritesong} from './Favoritesong'
import {Song} from './Song'
import { Route, Link, Switch } from 'react-router-dom';

function App() {
  const url = 'http://localhost:4500';

  const [songs, setSongs] = useState([]);
  const emptySong = {
    title: '',
    time: '',
    artist: ''
  }

  const [selectedSong, setSelectedSong] = useState(emptySong);
  
  const getSongs = () => {
    fetch(url + '/songs/')
    .then((response) => response.json())
    .then((data) => {
      setSongs(data);
    });
  };

  useEffect(() => {
    getSongs();
  });

  const handleCreate = (newSong) => {
    fetch(url + '/songs/', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newSong)
    }).then((response) => getSongs());
  };

  const handleUpdate = (song) => {
    fetch(url + '/songs/' + song._id, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(song)
    }).then(() => getSongs());
  };

  const selectSong = (song) => {
    setSelectedSong(song);
  };

  const deleteSong = (song) => {
    fetch(url + '/songs/' + song._id, {
      method: 'delete'
    }).then(() => getSongs());
  };

  return (
    <div className="App">
      <Header />
      <Playlist />
      <Favoritesong />
      <Song />
    </div>
  );
}

export default App;
