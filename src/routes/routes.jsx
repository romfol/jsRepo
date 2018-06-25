import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from '../containers/home/index';
import Favourite from '../containers/favourite/index';


const Navigation = () => (
  <Router>
    <div>
      <h1>
        <Link to="/">
        PropertyCross
        </Link>
      </h1>
      <h1>
        <Link to="/faves">
        Faves
        </Link>
      </h1>
      <hr />
      <Route exact path="/" component={Home} />
      <Route exact path="/faves" component={Favourite} />
    </div>
  </Router>
);

export default Navigation;
