import React, { Component } from 'react';


class Toggler extends Component {
  constructor(props) {
    super(props),
    this.state = {
      buttonOn: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      buttonOn: !state.buttonOn
    }));
  }

  render() {
    return (
        <button 
          className="toggler"
          onClick={this.handleClick}
        >
          {this.state.buttonOn ? 'On' : 'Off'}
        </button>
    );
  };
}

export default Toggler;