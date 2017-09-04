import React, { Component } from 'react';
import './styles/App.css';
import Buttons from './components/buttons.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        </div>
        <div><Buttons /></div>
      </div>
    );
  }
}

export default App;
