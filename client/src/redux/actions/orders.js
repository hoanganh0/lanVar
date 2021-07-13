import * as actionTypes from '../constants/orders';
import axios from 'axios';

export const CreateOrder = (dataOrder) => async (dispatch) => {
  const header = {
    headers: {'Content-Type': 'application/json'}
  }
  await axios.post('http://localhost:5000/api/account/orders', JSON.stringify(dataOrder), header);

  dispatch({
    type: actionTypes.CREATE_ORDER,
    payload: dataOrder.orders
  })
}

export const ViewOrder = (username) => async (dispatch) => {
  if(username){
    const res = await axios.get(`http://localhost:5000/api/account/orders?username=${username}`);

    dispatch({
      type: actionTypes.VIEW_ORDER,
      payload: res.data
    })
  } else{
    dispatch({
      type: actionTypes.VIEW_ORDER,
      payload: []
    })
  }
}
