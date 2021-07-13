import './footer.scss';
import {Link} from 'react-router-dom';

import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  let today = new Date();
  let year = today.getFullYear();
  return(
    <footer className='footer'>
      <div className="container">
        <ul className='footer__list'>
          <li><Link to='/'>Lan var</Link></li>
          <li><Link to='/'>About us</Link></li>
          <li><Link to='/'>FAQ</Link></li>
          <li><Link to='/'>Support</Link></li>
          <li><Link to='/'>News</Link></li>
          <li><Link to='/'>Events</Link></li>
        </ul>
        <div className='footer__bottom'>
         {year} 🌸 varchain.io 🌸 Vietnam
          <div>
          <Link to='/'><FontAwesomeIcon icon={faFacebook} /></Link> 
         <Link to='/'><FontAwesomeIcon icon={faInstagram} /></Link>
         <Link to='/'><FontAwesomeIcon icon={faYoutube} /></Link>
          </div>
      </div>
      </div>
    </footer>
  )
}

export default Footer;