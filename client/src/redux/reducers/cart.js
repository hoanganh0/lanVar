import * as actionTypes from '../constants/cart';

export const CartReducer = (state = {cartItems: []}, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = action.payload;
      
      const existItem = state.cartItems.findIndex(value => value.id === item.id);
      if(existItem >= 0){
        const ItemCurrent = state.cartItems.filter(value => value.id !== item.id );
        item.quantity = state.cartItems[existItem].quantity + item.quantity;
        localStorage.setItem('cart', JSON.stringify({cartItems: [item, ...ItemCurrent]}));

        return {
          ...state,
          cartItems: [item, ...ItemCurrent]
        }
      } else{
        localStorage.setItem('cart', JSON.stringify({cartItems: [item ,...state.cartItems]}));

        return{
          ...state,
          cartItems: [item ,...state.cartItems]
        }
      }

    case actionTypes.ADD_MANY_ITEM:
      return{
        ...state,
        cartItems: action.payload
      }  

    case actionTypes.REMOVE_FROM_CART:
      const idProduct = action.payload;     
      const newCart = state.cartItems.filter(value => value.id !== idProduct.id);
      localStorage.setItem('cart', JSON.stringify({cartItems: newCart}));

      return{
        ...state,
        cartItems: newCart
      }

    case actionTypes.REMOVE_ALL_ITEM_CART:
      localStorage.removeItem('cart');
      return{
        ...state,
        cartItems: []
      }  
    
    case actionTypes.CART_QUANTITY:
      const quantityIndex = state.cartItems.findIndex(value => value.id === action.payload.id);
      const newItem = state.cartItems;
      newItem[quantityIndex].quantity = action.payload.quantity;
      localStorage.setItem('cart', JSON.stringify({cartItems: newItem}));

      return{
        ...state,
        cartItems: newItem
      }

    default:
    
    return state;
  }
}