import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from '../containers/home/index.jsx'
import Favourite from '../containers/favourite/index.jsx';
//import ListOfLocations from '../containers/listOfLocations/index.jsx';


export default class Navigation extends Component {
    render() {
        return (
            <Router>
                <div>
                    
                        <h1><Link to="/">PropertyCross</Link></h1>
                        <h1><Link to="/faves">Faves</Link></h1>
                        {/*<li><Link to="/go">Go</Link></li>*/}
                
                    <hr/>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/faves" component={Favourite}/>
                    {/*<Route path="/go" component={ListOfLocations}/>*/}
                </div>
            </Router>
        )
    }
}