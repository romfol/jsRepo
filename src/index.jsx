import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './routes/routes';
import LocationRoutes from './routes/listOfLocations';

import './containers/listOfLocations/styles.scss';

const App = () => (
  <div>
    <Navigation />
    <LocationRoutes />
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
