import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import UsersList from './UsersList.jsx';

const rootElement = document.querySelector('#root');

const users = [
    {
        id: 'id-0',
        age: 21,
        name: 'Bob',
    },
    {
        id: 'id-1',
        age: 17,
        name: 'Tom',
    },
    {
        id: 'id-2',
        age: 18,
        name: 'Tad',
    },
    {
        id: 'id-3',
        age: 40,
        name: 'Greg',
    },
    {
        id: 'id-4',
        age: 27,
        name: 'Tod',
    },
    {
        id: 'id-5',
        age: 35,
        name: 'Sam',
    },
    {
        id: 'id-6',
        age: 75,
        name: 'Ivan',
    },
    {
        id: 'id-7',
        age: 21,
        name: 'John',
    },
  ];


ReactDOM.render(<UsersList users={users} />, rootElement);
