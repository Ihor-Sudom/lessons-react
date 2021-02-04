import React, { Component } from 'react';

class ConnectionStatus extends Component {
  state = {
    status: 'online',
  }

  componentDidMount() {
    window.addEventListener('online', this.handleOnLine);
    window.addEventListener('offline', this.handleOffLine);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.handleOnLine);
    window.removeEventListener('offline', this.handleOffLine);
  }

  handleOnLine = () => {
    this.setState({
      status: 'online',
    });
  }

  handleOffLine = () => {
    this.setState({
      status: 'offline',
    });
  }

  render() {
    const { status } = this.state;
    const className = status != 'online' ? "status status_offline" : 'status';

    return (
      <div className={className}>{status}</div>
    );
  };
}

export default ConnectionStatus;