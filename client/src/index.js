import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

import configureStore from './store/configure-store';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import muiThemeLight from './config/material-ui/lightBaseTheme';

import App from './App';
import Home from './containers/HomeContainer';
import About from './containers/AboutContainer';

import './index.css';

import injectTapEventPlugin from 'react-tap-event-plugin'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

const store = configureStore();

const Main = (props) => (
  <Provider store={store}>
    <MuiThemeProvider muiTheme={getMuiTheme(muiThemeLight)}>
      <App children={props.children}/>
    </MuiThemeProvider>
  </Provider>
)

let router = 
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home}/>
      <Route path="about" component={About}/>
    </Route>
  </Router>

ReactDOM.render(
  router,
  document.getElementById('root')
)
