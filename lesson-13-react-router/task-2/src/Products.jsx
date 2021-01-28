import React from 'react';
import Product from './Product';
import { Route, BrowserRouter, Link, Switch } from 'react-router-dom';

const Products = ({ match }) => {
  return (
    <div className="page__content">
      <h1>Products</h1>
        <ul className="navigation">
          <li className="navigation__item">
           <Link to={`${match.url}/ball`}>Ball</Link>
          </li>
          <li className="navigation__item">
            <Link to={`${match.url}/book`}>Book</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path={match.url}>
            <p>Select a product please</p>
          </Route>
          <Route path={`${match.url}/:productId`}>
            <Product />
          </Route>
        </Switch>
    </div>
  );
};

export default Products;