
import React, { Component } from 'react';
import './App.css';
import Playlist from './plalist/components/playlist';
import Data from './api.json';


class App extends Component {
  render() {
    return (
      <Playlist data={Data}/>
    );
  }
}

export default App;
