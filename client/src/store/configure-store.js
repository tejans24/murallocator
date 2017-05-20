import rootReducer from '../reducers';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';


export default (initialState) => {
  return createStore(
    rootReducer, 
    applyMiddleware(thunk)
  )
}