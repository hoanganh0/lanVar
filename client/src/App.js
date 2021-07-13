import { Route, Switch } from 'react-router';
import Header from './components/sitewide/header';
import Footer from './components/sitewide/footer';

import './App.scss';
import Home from './screens/home/home';
import Shop from './screens/shop/shop';
import Product from './screens/product/product';
import Cart from './screens/cart/cart';
import FormAccount from './screens/account/account';
import Orders from './screens/orders/orders';
import Search from './screens/search/search';
import { useDispatch, useSelector } from 'react-redux';
import { Account } from './redux/actions/account';
import { ViewOrder } from './redux/actions/orders';
import { AddManyItem } from './redux/actions/cart';

function App() {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('user'));
  const userCurrent = useSelector(state => state.account.username);
  const cartCurrent = JSON.parse(localStorage.getItem('cart'));
  const checkLocalstorage = () => {
    if(user && !userCurrent){
      dispatch(Account(user.username));
      dispatch(ViewOrder(user.username));
    }

    if(cartCurrent){
      dispatch(AddManyItem(cartCurrent.cartItems));
    }
  }
  checkLocalstorage();

  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/shop' component={Shop} />
        <Route path='/product/:id' component={Product} />
        <Route path='/cart' component={Cart} />
        <Route path='/account' component={FormAccount} />
        <Route path='/order' component={Orders} />
        <Route path='/search' component={Search} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
