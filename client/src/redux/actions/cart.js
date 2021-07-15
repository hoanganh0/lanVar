import * as actionTypes from '../constants/cart';
import axios from 'axios';
import { URL } from '../../ global-variable/variable';

export const AddToCart = (id, qty) => async (dispatch) => {
  const {data} = await axios.get(`${URL}/api/products/${id}`);

  dispatch({
    type: actionTypes.ADD_TO_CART,
    payload: {
      id: data._id,
      name: data.name,
      imageUrl: data.imageUrl,
      price: data.price,
      growth: data.growth,
      water: data.water,
      level: data.level,
      quantity: qty
    }
  })
}

export const AddManyItem = (data) => dispatch => {
  dispatch({
    type: actionTypes.ADD_MANY_ITEM,
    payload: data
  })
}

export const RemoveItem = (id) => (dispatch) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: {
      id: id
    }
  })
}

export const HandleQuantity = (id, quantity) => (dispatch) => {
  dispatch({
    type: actionTypes.CART_QUANTITY,
    payload: {
      id: id,
      quantity: quantity
    }
  })
}

export const RemoveCart = () => dispatch => {
  dispatch({
    type: actionTypes.REMOVE_ALL_ITEM_CART,
    payload: true
  })
}
