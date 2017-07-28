import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './App';
import Dashboard from './containers/Dashboard';

export default (
  <Switch>
    <Route exact={true} path="/" component={() => <App/>}/>
    <Route path="/dashboard" component={Dashboard}/>
  </Switch>
);