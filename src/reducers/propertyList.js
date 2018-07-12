import { GET_API } from '../constants/propertyList';

const initialState = {
  list: 'rere',
};

export default function propertyList(state = initialState, action) {
  switch (action.type) {
    case GET_API:
      return { ...state, data: action.request };
    default:
      return state;
  }
}
