import { GET_API, GET_LOCATIONS } from '../constants/propertyList';

const initialState = {
  list: [],
};

export default function propertyList(state = initialState, action) {
  switch (action.type) {
    case GET_API:
      return { ...state, list: action.request };
    default:
      return state;
  }
}
