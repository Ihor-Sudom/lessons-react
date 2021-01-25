import React, { Component } from 'react';

class ConnectionStatus extends Component {
  state = {
    status: true,
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
      status: true,
    });
  }

  offLine = () => {
    this.setState({
      status: false,
    });
  }

  render() {
    return (
      this.state.status
      ? <div className="status">online</div>
      : <div className="status status_offline">offline</div>
    );
  };
}

export default ConnectionStatus;