import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom';
import homePage from './pages/home';
import menus from './pages/Menus';
import about from './pages/About';
import location from './pages/Location';



const Routes = () => (
    <Router>
        <Switch>
        <Route exact path ='/' component={homePage} />
        <Route path='/location' component={location} />
        <Route path='/menus' component={menus} />
        <Route path='/about' component={about} />
        </Switch>
    </Router>
)

export default Routes;
