import * as actionTypes from '../constants/orders';

export const CreateOrder = (state = {orderItem: []}, action) => {
  switch (action.type) {
    case actionTypes.CREATE_ORDER:
      return{
        ...state,
        orderItem: [action.payload, ...state.orderItem]
      }

    case actionTypes.VIEW_ORDER:
      return{
        ...state,
        orderItem: action.payload
      }  
     
    default:
    
    return state
  }
}