import { GET_API } from '../constants/propertyList';

const initialState = {
  list: [],
};

export default function propertyList(state = initialState, action) {
  switch (action.type) {
    case GET_API:
      return { ...state, list: action.locations };
    default:
      return state;
  }
}
