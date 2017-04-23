import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import $ from 'jquery';

import Splash from './splash/splash';
import Chat from './chat/chat';
import About from './about/about';
import Contact from './contact/contact';

function _redirectIfNoNickname(nextState, replace){
  if(!$('body').data('currentUser')){
    replace('/');
  }
}

const Root = () => (
  <Router history={ hashHistory }>
    <Route path='/' component={Splash}></Route>
    <Route path='/about' component={About}></Route>
    <Route path='/contact' component={Contact}></Route>
    <Route path='/chat' component={Chat} onEnter={_redirectIfNoNickname}></Route>
  </Router>
);

export default Root;
