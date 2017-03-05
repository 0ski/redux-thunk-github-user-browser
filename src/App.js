import React, { Component } from 'react';
import { Provider } from 'react-redux';
import appStore from './store';
import logo from './logo.svg';
import './App.css';
import UserInfo from './Components/UserInfo/UserInfo';
import Search from './Components/Search/Search';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>GitHub user inspector</h2>
        </div>
        <Provider store={appStore}>
          <div>
            <Search />
            <UserInfo />
          </div>
        </Provider>
      </div>
    );
  }
}

export default App;
