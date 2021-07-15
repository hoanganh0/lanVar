import "./textIcon.scss";

const TextIcon = ({ title, item }) => {
  return (
    <div className='textIcon'>
      <div className="container">
        <h3 className='textIcon__title'>{title}</h3>
        <div className='textIcon__inner'>
          {item
            ? item.map((value, index) => {
                return (
                  <div key={index} className='textIcon__item'>
                    {value.icon}
                    <div className='textIcon__boxText'>
                      <h5 className='textIcon__itemTitle'>
                        {value.title}
                      </h5>
                      <div className='textIcon__itemDescription'>
                        {value.description}
                      </div>
                    </div>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
};

export default TextIcon;
