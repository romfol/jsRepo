import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';

import Home from '../containers/home/index';
import Favourite from '../containers/favourite/index';
import ListOfLocations from '../containers/listOfLocations/index';


const App = () => (
  <Router>
    <div>
      <Link to="/">
        PropertyCross
      </Link>
      <Link to="/faves">
        Faves
      </Link>
      <Link to="/go">
        Go
      </Link>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/faves" component={Favourite} />
        <Route path="/go" component={ListOfLocations} />
      </Switch>
    </div>
  </Router>
);

export default App;
