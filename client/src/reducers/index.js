import home from './home-reducer.js';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

const reducers = {
  form: formReducer,
  home
}

const rootReducer = combineReducers(reducers);
export default rootReducer;