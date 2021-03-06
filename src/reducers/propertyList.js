import { GET_API, GET_LOCATION } from '../constants/propertyList';

const initialState = {
  list: [],
};

export default function propertyList(state = initialState, action) {
  switch (action.type) {
    case GET_API:
      return { ...state, list: action.payload.response.listings };
    default:
      return state;
  }
}
