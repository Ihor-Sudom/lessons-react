import React, { Component } from 'react';


class Toggler extends Component {
  constructor(props) {
    super(props),
    this.state = {
      text: 'Off'
    }
  }

  changeText = (e) => {
    e.target.textContent === 'Off'
      ? this.setState({
        text: this.state.text = 'On',
      })
      : this.setState({
        text: this.state.text = 'Off',
      })
  }

  render() {
    return (
        <button 
          className="toggler"
          onClick={this.changeText}
        >
          {this.state.text}
        </button>
    );
  };
}

export default Toggler;