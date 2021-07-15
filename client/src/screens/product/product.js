
import { useEffect, useState } from "react";
import {useDispatch} from 'react-redux';
import { useParams } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";
import { AddToCart } from "../../redux/actions/cart";
import { Facebook, Instagram, List } from 'react-content-loader'

//css
import "./product.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAlignLeft,
  faBookOpen,
  faCheckCircle,
  faCubes,
} from "@fortawesome/free-solid-svg-icons";
import { URL } from "../../ global-variable/variable";

export default function Product() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [product, setProduct] = useState();
  const [currentWidth, setCurrenWidth] = useState();

  const detectResizeWidth = () => {
    setCurrenWidth(window.innerWidth);
  }

  useEffect(() => {
    setCurrenWidth(window.innerWidth);
    
    const productDetail = async () => {
      try {
        const { data } = await axios.get(`${URL}/api/products/${id}`);
        await setProduct(data);
      } catch (error) {
        console.error(error);
      }
    };
    productDetail();
  }, []);

  //handle js
  window.onresize = detectResizeWidth;

  //handler add to cart
  const handlerAddToCart = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const qty = Number(document.querySelector('.product__quantity input').value);
    dispatch(AddToCart(id, qty));
    document.querySelector('.product__success').classList.remove('is-show');
    setTimeout(() => document.querySelector('.product__success').classList.add('is-show'), 200);
  }

  return (
    <>
      {product !== undefined ? (
        <div className='product'>
          <div className="product__success"><FontAwesomeIcon icon={faCheckCircle} /> Add product success</div>
          <div className="container">
            <div className='product__box'>
              <div className='product__summary'>
                <div className='product__image'>
                  <img src={product.imageUrl} alt={product.name} />
                </div>
                {currentWidth < 768 ? (
                  <div className='product__main'>
                    <h3 className='product__title'>{product.name}</h3>
                    <h5 className='product__price'>${product.price}</h5>
                    <div className='product__btnCart'>
                      <div className="product__quantity">
                        <input step='1' min='1' type="number" defaultValue='1' />
                      </div>
                      <div className="product__addToCart" onClick={handlerAddToCart}>Add to cart</div>
                    </div>
                    <div className='product__properties'>
                      <header>
                        <FontAwesomeIcon icon={faBookOpen} /> Properties
                      </header>
                      <div>
                        <div className='product__propertiesItem'>
                          <div>Growth</div>
                          <div>{product.growth}</div>
                          <div>85% have this trait</div>
                        </div>
                        <div className='product__propertiesItem'>
                          <div>Level</div>
                          <div>{product.level}</div>
                          <div>85% have this trait</div>
                        </div>
                        <div className='product__propertiesItem'>
                          <div>Water</div>
                          <div>{product.water}</div>
                          <div>85% have this trait</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}
                <div className='product__infomation'>
                  <div className='product__details'>
                    <header>
                      <FontAwesomeIcon icon={faAlignLeft} /> Details
                    </header>
                    <div>{product.description}</div>
                  </div>
                  <div className='product__chainInfo'>
                    <header>
                      <FontAwesomeIcon icon={faCubes} /> Chain info{" "}
                    </header>
                    <div>
                      <div>
                        Contract address{" "}
                        <Link to={`/`}>
                          Admin
                        </Link>
                      </div>
                      <div>
                        Token ID
                        <span>{product._id.slice(0, 8) + "..."}</span>
                      </div>
                      <div>
                        Blockchain
                        <span>Dollar</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {currentWidth > 767 ? (
                <div className='product__main'>
                  <h3 className='product__title'>{product.name}</h3>
                  <h5 className='product__price'>${product.price}</h5>
                  <div className='product__btnCart'>
                    <div className="product__quantity">
                      <input step='1' min='1' type="number" defaultValue='1' />
                    </div>
                    <div className="product__addToCart" onClick={handlerAddToCart}>Add to cart</div>
                  </div>
                  <div className='product__properties'>
                    <header>
                      <FontAwesomeIcon icon={faBookOpen} /> Properties
                    </header>
                    <div>
                      <div className='product__propertiesItem'>
                        <div>Growth</div>
                        <div>{product.growth}</div>
                        <div>85% have this trait</div>
                      </div>
                      <div className='product__propertiesItem'>
                        <div>Level</div>
                        <div>{product.level}</div>
                        <div>85% have this trait</div>
                      </div>
                      <div className='product__propertiesItem'>
                        <div>Water</div>
                        <div>{product.water}</div>
                        <div>85% have this trait</div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ) :
      <div className='product product--loading'>
        <div className="container">
          <div className='product--loading-wrap'>
            <div><Instagram /><List /></div>
            <div><Facebook/></div>
          </div>
        </div>
    </div>
      }
    </>
  );
}
