import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import User from './User';

const Users = ({ match }) => {
  return (
    <Router>
    <div className="page__content">
      <h1>Users</h1>
      <ul className="navigation">
        <li className="navigation__item">
          <Link to={`${match.path}/github`}>Github</Link>
        </li>
        <li className="navigation__item">
          <Link to={`${match.path}/facebook`}>Facebook</Link>
        </li>
      </ul>
        <Switch>
          <Route path={`${match.path}/:userId`} component={User} />
          <Route path={match.path}>
            <span>Select a user please</span>
          </Route>
        </Switch>
    </div>
    </Router>
  );
};

export default Users;