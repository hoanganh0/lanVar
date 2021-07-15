import * as actionTypes from '../constants/products';
import axios from 'axios';
import { URL } from '../../ global-variable/variable';

export const getListProducts = () => async (dispatch) => {
  try {
    dispatch({type: actionTypes.GET_LIST_PRODUCTS_REQUEST});

    const {data} = await axios.get(`${URL}/api/products`);

    dispatch({
      type: actionTypes.GET_LIST_PRODUCTS_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: actionTypes.GET_LIST_PRODUCTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}