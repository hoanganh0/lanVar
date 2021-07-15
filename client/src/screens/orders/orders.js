import { useSelector } from "react-redux";

import './orders.scss';

const Orders = () => {
  const orders = useSelector(state => state.orders.orderItem);

  return (
    <>
      <div className="order-page">
        <div className="container">
          <h1>Your Orders</h1>
          <div className="order-page__wrap">
            {
              orders.length ?
                orders.map((value, index) => {
                  return (
                    <div key={index} className="order-page__table">
                      <h5>Order #ab{Math.floor(Math.random() * 500) + 100}od</h5>
                      <div>
                        <table>
                          <thead>
                            <tr>
                              <th>Product</th>
                              <th>Price</th>
                              <th>Quantity</th>
                              <th>Total</th>
                              <th>Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            {value.map((order, index) => {
                              return (
                                <tr key={index}>
                                  <td className="order-product-details">
                                    <div className="product-thumbnail">
                                      <img
                                        src={order.imageUrl}
                                        alt={order.name}
                                      />
                                    </div>
                                    <div>
                                      <div className="product-name">
                                        {order.name}
                                      </div>
                                      <div className="product-properties">
                                        Growth: {order.growth}, Level:{" "}
                                        {order.level}, Water: {order.water}
                                      </div>
                                    </div>
                                  </td>
                                  <td className="product-price">
                                    ${order.price}
                                  </td>
                                  <td className="product-quantity">
                                    <div className="quantity">
                                      {order.quantity}
                                    </div>
                                  </td>
                                  <td className="product-subtotal">
                                    ${order.price * order.quantity}
                                  </td>
                                  <td>Pending</td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                      <h5 className='order-total'>Total: <span>${value.reduce((total, order) => {
                        return total += order.price * order.quantity
                      }, 0)}</span></h5>
                    </div>
                  )
                }) :
                <h4>You don't have any orders yet</h4>
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;
