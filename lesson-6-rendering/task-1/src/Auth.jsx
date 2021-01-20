import React, { Component } from 'react';
import Greeting from './Greeting.jsx';
import './index.scss';

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
    return (
      <div className="panel">
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        {this.state.isLoggedIn
          ? (<button className='logout btn' onClick={this.handleLogout}>logout</button>)
          : (<button className='login btn' onClick={this.handleLogin}>Login</button>)}
      </div>
    );
  }
}

export default Auth;