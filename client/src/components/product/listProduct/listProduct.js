import { Link } from "react-router-dom";
import { Instagram } from "react-content-loader";

//css
import "./listProduct.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const ListProduct = ({ dataProduct, offset, limit }) => {
  const loading = [...Array(limit)];

  return (
    <>
      {dataProduct
        ? dataProduct.map((value, index) => {
          index++;
          if(index <= limit && index > offset){
            return (
              <div key={value._id + index} className={`col-6 col-sm-6 col-lg-3`}>
                <Link to={`/product/${value._id}`}>
                  <div className='productData__item'>
                    <div className='productData__image'>
                      <img
                        className="img-fluid"
                        src={value.imageUrl}
                        alt={value.name}
                      />
                    </div>
                    <div className='productData__details'>
                      <div className='productData__detailsTop'>
                        <h6 className='productData__titleItem'>
                          {value.name}
                        </h6>
                        <div className='productData__generation'>
                          V{value.level}
                        </div>
                      </div>
                      <div className='productData__detailsBottom'>
                        <div className='productData__favorite'>
                          <FontAwesomeIcon icon={faHeart} />
                          10
                        </div>
                        <div className='productData__price'>
                          ${value.price}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          }
        })
        : loading.map((value, index) => {
          return(
            <div key={index} className={`col-6 col-sm-6 col-lg-3 productData__item-loading`}>
              <Instagram/>
            </div>
          )
        })}
    </>
  );
};

export default ListProduct;
