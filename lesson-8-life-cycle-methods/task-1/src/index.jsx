import React from 'react';
import ReactDOM from 'react-dom';
import Life from './Life.jsx';

const rootElement = document.querySelector('#root');


ReactDOM.render(<Life number={20} />, rootElement);
