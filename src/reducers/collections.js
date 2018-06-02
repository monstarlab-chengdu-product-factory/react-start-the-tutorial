import { FETCH_COLLECTIONS } from '../actions/collection.js';

const initialState = {
  setCollections: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_COLLECTIONS:
      return Object.assign({}, state, {
        setCollections: action.payload
      });
    default:
      return state;
  }
}
