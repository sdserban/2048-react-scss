import React, { Component } from 'react';
import logo from './img/2048logo.jpeg';
import './App.css';
import GameBoard from './GameBoard';
import CodingZone from './CodingZone';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">2048 AI code chalange</h1>
        </header>
        <div class="Main">
          <GameBoard />
          <CodingZone />
        </div>
        <div class="Footer">Footer area</div>
      </div>
    );
  }
}

export default App;
