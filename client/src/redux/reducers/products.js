import * as actionTypes from '../constants/products';

export const getListProduct = (state = {products: []}, action) => {
  switch (action.type) {
    case actionTypes.GET_LIST_PRODUCTS_REQUEST:
      return {
        loading: true,
        products: []
      };
    case actionTypes.GET_LIST_PRODUCTS_SUCCESS:
      return {
        loading: false,
        products: action.payload
      };
    case actionTypes.GET_LIST_PRODUCTS_FAIL:
      return {
        loading: false,
        products: action.payload
      };    
    default:
      return state;
  }
}