import { combineReducers } from 'redux';
import propertyList from '../reducers/propertyList';
import someInFuture from '../reducers/someAnotherFuture';

export default combineReducers({
  propertyList,
  someInFuture,
});
