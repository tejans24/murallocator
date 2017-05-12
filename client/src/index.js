import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

import { Router, Route, browserHistory } from 'react-router';

import './css/index.scss';

import AppState from './stores/appState';
// import DevTools from 'mobx-react-devtools';
import injectTapEventPlugin from 'react-tap-event-plugin';


// creating appState
const appState = new AppState();
injectTapEventPlugin();

ReactDOM.render(
  <Router history={browserHistory} >
    <Route path="/" component={App} appState={appState} />
  </Router>,
  document.getElementById('root')
);


//     <Route path="*" component={NotFound}  appState={appState}/>