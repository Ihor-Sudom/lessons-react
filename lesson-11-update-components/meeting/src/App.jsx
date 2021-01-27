import React, { Component } from 'react';
import Spinner from './Spinner';
import Auth from './Auth';
import Login from './Login';
import Logout from './Logout'

class App extends Component {
  render() {
    return (
      <div>
        <Auth />
        <Login />
        <Logout />
        <Spinner />
      </div>
    );
  }
}

export default App;