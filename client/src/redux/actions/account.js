import * as actionTypes from '../constants/account';

export const Account = (username) => (dispatch) => {
  if(username){
    dispatch({
      type: actionTypes.LOGIN,
      payload: username
    })
  } else{
    dispatch({
      type: actionTypes.LOGOUT,
      payload: false
    })
  }
}

export const RequestLogin = (status) => dispatch => {
  dispatch({
    type: actionTypes.REQUEST_LOGIN,
    payload: status
  })
}