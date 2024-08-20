// src/App.tsx

import React from 'react';
import SpotifyAuth from './components/token';
import MenuBar from './components/MenuBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <SpotifyAuth />
      <MenuBar />
    </div>
  );
}

export default App;
