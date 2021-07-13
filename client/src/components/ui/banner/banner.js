import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { Instagram } from 'react-content-loader'

//css
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";
import "./banner.scss";

const Banner = () => {
  const [singleProduct, setSingleProduct] = useState();

  useEffect(() => {
    const getDataProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/products/60ed64a418bad78a6bd508e2`);
        setSingleProduct(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    getDataProduct();
  }, []);
  return (
    <div className='banner'>
      <div className="container">
        <div className='banner__inner'>
          <div className='banner__left'>
            <h1 className='banner__title'>Grow your Lan Var</h1>
            <div className='banner__subTitle'>
              on the world's first & largest NFT marketplace
            </div>
            <div className='banner__btn'>
              <div className='banner__btnExplore'>
                <Link to='/shop'>Explore</Link>
              </div>
              <div className='banner__btnLan'>
                <Link to='/shop'><span>Start now</span></Link>
              </div>
            </div>
          </div>
          {
            singleProduct ?
              <div className='banner__right'>
                <Link to={`/product/${singleProduct._id}`} >
                  <div className='banner__productImage'>
                    <img src={singleProduct.imageUrl} alt={singleProduct.name} />
                  </div>
                  <div className='banner__productDetails'>
                    <div className='banner__productName'>
                      {singleProduct.name}
                    </div>
                    <div className='banner__productSchema'>
                      <FontAwesomeIcon icon={faSeedling} /> #
                      {singleProduct.type}
                    </div>
                  </div>
                </Link>
              </div> : <Instagram />
          }
        </div>
      </div>
    </div >
  );
};

export default Banner;
