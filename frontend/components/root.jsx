import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import $ from 'jquery';

import Splash from './splash/splash';
import Chat from './chat/chat';

function _redirectIfNoNickname(nextState, replace){
  if(!$('body').data('currentUser')){
    replace('/');
  }
}

const Root = () => (
  <Router history={ hashHistory }>
    <Route path='/' component={Splash}></Route>
    <Route path='/chat' component={Chat} onEnter={_redirectIfNoNickname}></Route>
  </Router>
);

export default Root;
