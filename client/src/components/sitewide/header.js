import { useEffect } from 'react';
import {Link, useHistory} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

//css
import './header.scss';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchProduct from '../../redux/actions/search';

const Header = () => {
  const user = useSelector(state => state.account.username);
  const cartItem = useSelector(state => state.cartItem.cartItems);
  const orderItem = useSelector(state => state.orders.orderItem.length);
  const urlHistory = useHistory();
  const dispatch = useDispatch();

  const handToggler = () => {
    document.querySelector('.navbar__listItem').classList.toggle('isShow');
  }

  const handleSearch = () => {
    document.querySelector('.navbar__search > input').addEventListener('keyup', async e => {
      if(e.key === 'Enter'){
        const keywords = e.target.value;
        await dispatch(SearchProduct(keywords));

        urlHistory.push(`/search?keywords=${keywords}`);
      }
    })
  }

  useEffect(() => {
    handleSearch();
  })

  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-light'>
        <div className="container-fluid">
          <div className='navbar__logo'>
            <Link to='/' className="navbar-brand" onClick={handToggler}>
                Varchain
            </Link>
          </div>
          <div className='d-flex navbar__search'>
            <FontAwesomeIcon icon={faSearch} size="xs" />
            <input
              className="form-control form-search"
              type="search"
              placeholder="Search lan var"
              aria-label="Search"
            />
          </div>
          <ul className={`navbar-nav mb-2 mb-lg-0 navbar__listItem`}>
            <li className="nav-item">
              <Link to='/shop' className="nav-link" onClick={handToggler}>
                  Lan var
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/' className="nav-link" onClick={handToggler}>
                  About us
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/' className="nav-link" onClick={handToggler}>
                  FAQ
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/account' className="nav-link" onClick={handToggler}>
                  {user ? <span style={{textDecoration: 'underline'}}>{user}</span> : 'My account'}
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/cart' className="nav-link" onClick={handToggler}>
                  <span className='navbar__numberItemCart'><span>{cartItem.length > 0 ? cartItem.length : 0}</span><FontAwesomeIcon icon={faShoppingCart} /></span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to={user ? '/order' : 'account'} className="nav-link" onClick={handToggler}>
                  Orders
                  <span className='navbar__numberItemOrder'><span>{orderItem > 0 ? orderItem : 0}</span></span>
              </Link>
            </li>
          </ul>

          <button className='navbar-toggler navbar__navbarToggler' type="button" onClick={handToggler}>
            <span className="navbar-toggler-icon"></span>
          </button>

        </div>
      </nav>
    </>
  );
};

export default Header;
