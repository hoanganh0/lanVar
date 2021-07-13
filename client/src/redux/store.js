import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

//reducers
import { getListProduct } from "./reducers/products";
import { CartReducer } from "./reducers/cart";
import { Account } from "./reducers/account";
import { CreateOrder } from "./reducers/orders";
import { Search } from "./reducers/search";

const reducer = combineReducers({
  listProduct: getListProduct,
  cartItem: CartReducer,
  account: Account,
  orders: CreateOrder,
  search: Search
})

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;