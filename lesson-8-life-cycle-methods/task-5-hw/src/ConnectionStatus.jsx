import React, { Component } from 'react';

class ConnectionStatus extends Component {
  state = {
    status: 'online',
  }

  componentDidMount() {
    window.addEventListener('online', this.onLine);
    window.addEventListener('offline', this.offLine);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.onLine);
    window.removeEventListener('offline', this.offLine);
  }

  onLine = () => {
    this.setState({
      status: 'online',
    });
  }

  offLine = () => {
    this.setState({
      status: 'offline',
    });
  }

  render() {
    let element = this.state.status == 'online'
      ? <div className="status">{this.state.status}</div>
      : <div className="status status_offline">{this.state.status}</div>;

    return element;
  };
}

export default ConnectionStatus;