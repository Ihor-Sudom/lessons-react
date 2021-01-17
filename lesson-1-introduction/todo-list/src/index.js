import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const rootElement = document.querySelector('#root');

const element = (
  <div className="greeting">
    <h1 class="title">Todo List</h1>
  </div>
);

ReactDOM.render(element, rootElement);
