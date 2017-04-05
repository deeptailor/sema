import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Splash from './splash/splash';

const Root = () => (
  <Router history={ hashHistory }>
    <Route path='/' component={Splash}></Route>
  </Router>
);

export default Root;
