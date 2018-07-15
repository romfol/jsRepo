import { createStore, applyMiddleware } from 'redux';
import { reduxThunk } from 'redux-thunk';
import { reduxLogger } from 'redux-logger';
import rootReducer from './combineReducers';
import { middleware } from '../middlewares/middleware';

/* eslint-disable no-underscore-dangle */
export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(reduxThunk, reduxLogger, middleware),
  );
  return store;
}
/* eslint-enable */
