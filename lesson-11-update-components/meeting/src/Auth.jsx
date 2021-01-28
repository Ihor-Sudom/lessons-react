import React, { Component } from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';

// algo
// 1. show Login by default
// 2. show Spinner after Login click & hide Login
// 3. show Logout after 2 sec, hide Spinner

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inLoggedIn: false,
      isProcessing: false,
    }
  }

  loginHandler = () => {
    this.setState({
      isProcessing: true,
    });
    setTimeout(() => {
      this.setState({
        isLoggedIn: true, 
        isProcessing: false});
    }, 2000);
  }

  logoutHandler = () => {
    this.setState({
      isLoggedIn: false,
    })
  }

  render() {
    const { isProcessing, isLoggedIn } = this.state;
    if (isProcessing) {
      return <Spinner size={50} />
    }

    if (isLoggedIn) {
      return <Logout onLogout={this.logoutHandler} />
    }

    return <Login onLogin={this.loginHandler} />
  }
};

export default Auth;
