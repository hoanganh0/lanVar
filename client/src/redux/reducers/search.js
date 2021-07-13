import * as actionTypes from '../constants/search';

export const Search = (state = {searchDetails: []}, action) => {
  if(action.type === actionTypes.SEARCH_PRODUCT){
    return{
      ...state,
      searchDetails: action.payload
    } 
  }

  return state;
}

