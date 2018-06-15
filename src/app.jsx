import React, {Component} from 'react';
import Navigation from './routes/routes.jsx';
import LocationRoutes from './routes/listOfLocations.jsx'

export default class App extends Component {
    render() {
      return (
      <div>
       <Navigation/>
       <LocationRoutes/>
      </div> 
      );
    }
  }
