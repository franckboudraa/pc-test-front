import axios from 'axios';
import { ERROR_DISHES, SUCCESS_DISHES } from './types';

const API_URL = process.env.REACT_APP_API_URL;

export const fetchDishes = () => async dispatch => {
  try {
    const res = await axios.get(`${API_URL}/dishes/index`);
    if (res.status === 200) {
      dispatch({ type: SUCCESS_DISHES, dishes: res.data });
    }
  } catch ({ response }) {
    dispatch({ type: ERROR_DISHES });
  }
};
