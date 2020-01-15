import React from 'react';
import { Switch, Route } from 'react-router-dom';

import InitPg from './../pages/init-page/';
//import Forecast from './../pages/results/';
//<Route path="/results" component={Forecast} />


export default function Routes() {
  return (
      <Switch>
        <Route path="/" component={InitPg} />
      </Switch>
  )
}