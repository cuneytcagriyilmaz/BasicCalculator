import { APPLY_NUMBER, CHANGE_OPERATION, CLEAR_DISPLAY } from './actions.jsx';

export const initialState = {
  total: 0,
  operation: '+',
  memory: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case APPLY_NUMBER:
      return {
        ...state,
        total:
          state.total === 0
            ? action.payload
            : state.total * 10 + action.payload,
      };

    case CHANGE_OPERATION:
      return {
        ...state,
        operation: action.payload,
      };

    case CLEAR_DISPLAY:
      return {
        ...state,
        total: 0,
      };

    default:
      return state;
  }
};

export default reducer;
