import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import ListOfLocations from '../containers/listOfLocations/index';

const LocationRoutes = () => (
  <Router>
    <div>
      <li>
        <Link to="/go">
        Go
        </Link>
      </li>
      <p>
      Recent searches:
      </p>
      <Route path="/go" component={ListOfLocations} />
    </div>
  </Router>
);

export default LocationRoutes;
