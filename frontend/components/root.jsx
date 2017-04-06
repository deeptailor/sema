import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Splash from './splash/splash';
import Chat from './chat/chat';

const Root = () => (
  <Router history={ hashHistory }>
    <Route path='/' component={Splash}></Route>
    <Route path='/chat' component={Chat}></Route>
  </Router>
);

export default Root;
