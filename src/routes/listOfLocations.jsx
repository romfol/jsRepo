import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import ListOfLocations from '../containers/listOfLocations/index.jsx';

export default class LocationRoutes extends Component {
    render() {
        return (
            <Router>
                <div>
                    <li><Link to="/go">Go</Link></li>
                    <hr/>
                    <Route path="/go" component={ListOfLocations}/>
                </div>
            </Router>
        )
    }
}