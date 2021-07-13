import {Link} from "react-router-dom";
import "./imageText.scss";

const ImageText = ({title, description, button, image, modifier}) => {
  return (
    <div className={modifier === 'yes' ? 'imageText backgroundGreen' : 'imageText'}>
      <div className="container">
        <div className='imageText__inner'>
          <div className='imageText__image'>
            <img
              className="img-fluid"
              src={image.url}
              alt={image.alt}
            />
          </div>
          <div className='imageText__boxText'>
            <h3 className='imageText__title'>
              {title}
            </h3>
            <div className='imageText__description'>
              {description}
            </div>
            {
              button ? <Link to={button.url}><div className='imageText__btn'>{button.title}</div></Link> : null
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageText;
