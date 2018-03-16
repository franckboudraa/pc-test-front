import { ERROR_DISHES, SUCCESS_DISHES } from '../actions/types';

export default function dishesReducer(
  state = { loading: true, error: false, dishes: [] },
  action
) {
  switch (action.type) {
    case SUCCESS_DISHES:
      return {
        ...state,
        loading: false,
        error: false,
        dishes: action.dishes
      };
    case ERROR_DISHES:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
}
