import React, { Component } from 'react';
import HOCComp from './HoCComp.js';
import TestComponent from './TestComponent.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const Test = HOCComp(TestComponent);
    return (
      <div className="App">
        <Test>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </Test>
      </div>
    );
  }
}

export default App;
