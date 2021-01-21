import React, { Component } from 'react';
import Login from './Login.jsx';
import Logout from './Logout.jsx';
import Spinner from './Spinner.jsx';


class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true,
      showSpinner: false,
    }
  }

  handleLogin = () => {
    this.setState({
      showSpinner: true,
    });
    setTimeout(() => {
      this.setState({isLoggedIn: false, showSpinner: false});
    }, 2000);
  }

  handleLogout = () => {
    this.setState({
      isLoggedIn: true
    })
  }

  render() {
    let button;

    if (this.state.isLoggedIn) {
      button = <Login onLogin={this.handleLogin} />;
    } else {
      button = <Logout onLogout={this.handleLogout} />;
    }

    return (
      <>
        {this.state.showSpinner ? <Spinner size={50}/> : button}
      </>
    )
  }
}

export default Auth;
