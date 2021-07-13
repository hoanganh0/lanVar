import * as actionTypes from '../constants/account';

export const Account = (state = {username: false, statusLogin: false}, action ) => {
  const userName = action.payload;

  switch (action.type) {
    case actionTypes.LOGIN:
      return{
        ...state,
        username: userName
      }
    case actionTypes.LOGOUT:
      return{
        ...state,
        username: false
      }

    case actionTypes.REQUEST_LOGIN:
      return{
        ...state,
        statusLogin: action.payload
      }    
    default:

    return state;
  }
}