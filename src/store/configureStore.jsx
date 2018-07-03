import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/index';
/* eslint-disable no-underscore-dangle */
export default function configureStore(initState) {
  const store = createStore(
    rootReducer,
    initState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
  return store;
}
/* eslint-enable */
