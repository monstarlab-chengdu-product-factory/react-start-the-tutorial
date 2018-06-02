import { combineReducers } from 'redux';
import error from './error';
import collections from './collections';

const rootReducer = combineReducers({
  error: error,
  collections: collections
});

export default rootReducer;
