import React from 'react';
import './App.css';
import Nav from './components/navbar/Nav';
import GameBody from './components/GameBody/GameBody';
import GameTitle from './components/title/GameTitle';

function App() {
  return (
    <div className="App">

      <Nav />
      <GameTitle />
      <GameBody />


    </div>
  );
}

export default App;
