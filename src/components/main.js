import React from 'react';
import {BrowserRouter,Switch, Route} from 'react-router-dom';
//hooking together all pages
import LandingPage from './landingpage';
import Install from './install';
import BaseCase from './basecase';
import AdvancedCase from './advancedcase';


const Main = () => (

  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/install" component={Install} />
    <Route path="/basecase" component={BaseCase} />
    <Route path="/advancedcase" component={AdvancedCase} />
  </Switch>


)

  export default Main;
