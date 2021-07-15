import * as actionTypes from '../constants/search';
import axios from 'axios';
import { URL } from '../../ global-variable/variable';

const SearchProduct = (keywords) => async dispatch => {
  const res = await axios.get(`${URL}/api/products/search?keywords=${keywords}`);

  dispatch({
    type: actionTypes.SEARCH_PRODUCT,
    payload: res.data
  })
}

export default SearchProduct;