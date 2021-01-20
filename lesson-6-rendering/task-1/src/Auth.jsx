import React, { Component } from 'react';
import Greeting from './Greeting.jsx';
import './index.scss';
import Login from './Login.jsx';
import Logout from './Logout.jsx';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  handleLogin = () => {
    this.setState({
      isLoggedIn: true,
    });
  }

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
    });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    if (isLoggedIn) {
      button = <Logout onClick={this.handleLogout} />;
    } else {
      button = <Login onClick={this.handleLogin} />;
    }

    return (
      <div className="panel">
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

export default Auth;