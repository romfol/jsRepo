import { createStore, applyMiddleware } from 'redux';
import { reduxThunk } from 'redux-thunk';
import { reduxLogger } from 'redux-logger';
import { createLogger } from 'redux-logger';
import rootReducer from './combineReducers';
import { middleware } from '../middlewares/middleware';

/* eslint-disable no-underscore-dangle */
export default function configureStore(initialState) {
  const logger = createLogger();
  const store = createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(reduxThunk, reduxLogger, applyMiddleware(logger)),
  );
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
/* eslint-enable */
