import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import './cart.scss';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RemoveItem, HandleQuantity, RemoveCart } from '../../redux/actions/cart';
import { CreateOrder } from '../../redux/actions/orders';
import { RequestLogin } from '../../redux/actions/account';

const Cart = () => {
  const [reRender, setReRender] = useState(false);
  const cartItem = useSelector(state => state.cartItem.cartItems);
  const account = useSelector(state => state.account.username);
  const dispatch = useDispatch();
  const history = useHistory();

  const removeItemCart = (id) => {
    dispatch(RemoveItem(id))
  };

  const handleQuantity = (id, e) => {
    const quantity = Number(e.target.value);
    dispatch(HandleQuantity(id, quantity));
    setReRender(!reRender);
  }

  const handleCreateOrder = async () => {
    const dataOrder = { orders: cartItem, username: account };

    if (account) {
      await dispatch(CreateOrder(dataOrder));
      await dispatch(RemoveCart());
      await localStorage.removeItem('cart');
      
      history.push('/order');
    } else {
      await dispatch(RequestLogin(true));
      history.push('/account');
    }
  }

  return (
    <>
      <div className="cart-page">
        <div className="container">
          <h1>Shopping Cart</h1>
          {cartItem.length > 0 ?
            <div>
              <div className="cart-summary">
                <table>
                  <thead>
                    <tr>
                      <th className='product-name'>Product</th>
                      <th className='product-price'>Price</th>
                      <th className='product-quantity'>Quantity</th>
                      <th className='product-sutotal'>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItem.length ? cartItem.map(value => {
                      return (
                        <tr key={value}>
                          <td className='cart-product-details'>
                            <div className="product-thumbnail"><Link to={`/product/${value.id}`}><img src={value.imageUrl} alt={value.name} /></Link></div>
                            <div>
                              <div className="product-name"><Link to={`/product/${value.id}`}>{value.name}</Link></div>
                              <div className="product-properties">Growth: {value.growth}, Level: {value.level}, Water: {value.water}</div>
                              <div className="product-remove"><Link onClick={() => { removeItemCart(value.id) }}>Remove item</Link></div>
                            </div>
                          </td>
                          <td className='product-price'>${value.price}</td>
                          <td className='product-quantity'><div className="quantity"><input type="number" step='1' min='1' max='10' defaultValue={value.quantity} onChange={(e) => handleQuantity(value.id, e)} /><span className="product-qty-arrows"></span></div></td>
                          <td className='product-subtotal'>${value.price * value.quantity}</td>
                        </tr>
                      )
                    }) : null}
                  </tbody>
                </table>
              </div>
              <div className='product-button-continute'>
                <Link to='/shop'>Continue Shopping</Link>
              </div>
              <div className="cart-calculation">
                <div className="cart-collaterals">
                  <h2>Cart totals</h2>
                  <table>
                    <tbody>
                      <tr className='cart-subtotal'>
                        <th>Subtotal</th>
                        <td>${cartItem ? cartItem.reduce((total, value) => {
                          return total += value.price * value.quantity
                        }, 0) : false}</td>
                      </tr>
                      <tr className='order-total'>
                        <th>Total</th>
                        <td>${cartItem ? cartItem.reduce((total, value) => {
                          return total += value.price * value.quantity
                        }, 0) : false}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="cart-btn-checkout">
                    <Link onClick={handleCreateOrder}>Proceed to checkout</Link>
                  </div>
                </div>
              </div>
            </div>
            : <div>
                <p>Your cart is currently empty</p>
                <div className='cart-btn-shopNow'>
                  <Link to='/shop'>Shopping now</Link>
                </div>
              </div>
          }
        </div>
      </div>
    </>
  )
}

export default Cart;