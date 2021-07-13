import * as actionTypes from '../constants/search';
import axios from 'axios';

const SearchProduct = (keywords) => async dispatch => {
  const res = await axios.get(`http://localhost:5000/api/products/search?keywords=${keywords}`);

  dispatch({
    type: actionTypes.SEARCH_PRODUCT,
    payload: res.data
  })
}

export default SearchProduct;