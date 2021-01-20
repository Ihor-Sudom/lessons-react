import React, { Component } from 'react';

const CORAL = 'Coral';
const AQUA = 'Aqua';
const BISQUE = 'Bisque';

class ColorPicker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      buttonColor: ''
    }
  }

  colorText = (color) => {
    this.setState({
      buttonColor: color,
    });
  }

  render() {
    return (
      <div>
        <div className="picker__title">
          {this.state.buttonColor}
        </div>
        <div>
          <button 
            className="picker__button picker__button_coral"
            onMouseOver={() => this.colorText(CORAL)}
            onMouseOut={() => this.colorText()}
          ></button>
          <button 
            className="picker__button picker__button_aqua"
            onMouseOver={() => this.colorText(AQUA)}
            onMouseOut={() => this.colorText()}
          ></button>
          <button 
            className="picker__button picker__button_bisque"
            onMouseOver={() => this.colorText(BISQUE)}
            onMouseOut={() => this.colorText()}
          ></button>
        </div>
      </div>
    )
  }
}

export default ColorPicker;