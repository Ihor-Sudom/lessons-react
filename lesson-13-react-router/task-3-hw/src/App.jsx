import React from "react";
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Users from './Users';

const App = () => {
  return (
    <BrowserRouter>
      <div className="page">
        <ul className="navigation">
         <li className="navigation__item">
            <Link to="/">Home</Link>
          </li>
         <li className="navigation__item">
            <Link to="/users">Users</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/users" component={Users} />
        </Switch>
      </div>
    </BrowserRouter>
  )
};

export default App;