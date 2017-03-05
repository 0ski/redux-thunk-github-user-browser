import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import User from './Components/User/User';
import Search from './Components/Search/Search';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>GitHub user browser</h2>
        </div>
        <div>
          <Search />
        </div>
        <div className="Drop-zone">
          <User />
        </div>
      </div>
    );
  }
}

export default App;
