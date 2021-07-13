//css
import "./textLeftRight.scss";

const TextLeftRight = ({title, image, textLeft, textRight}) => {
  return (
    <div className='TextLeftRight'>
      <div className="container">
        <h3 className='TextLeftRight__title'>{title}</h3>
        <div className='TextLeftRight__image'>
          <img className='img-fluid' src={image.url} alt={image.alt} />
        </div>
        <div className='TextLeftRight__boxText'>
          <div className='TextLeftRight__textLeft'>
            {textLeft}
          </div>
          <div className='TextLeftRight__textRight'>
            {textRight}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextLeftRight;
