import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faSeedling, faAward, faCartArrowDown, faSun } from '@fortawesome/free-solid-svg-icons';
import './home.scss';

import ListProduct from '../../components/product/listProduct/listProduct';
import Banner from '../../components/ui/banner/banner';
import ImageText from '../../components/ui/ImageText/imageText';
import TextLeftRight from '../../components/ui/textLeftRight/textLeftRight';
import TextIcon from '../../components/ui/textIcon/textIcon';

//redux
import useGetAllProduct from '../../hooks/useGetAllProduct';
import { Link } from 'react-router-dom';

const Home = () => {
  const dataProduct = useGetAllProduct();
 
  return (
    <>
      <Banner />
      <ImageText
        title='What is the VarChain?'
        description='VarChain is an internet collectibles game, focused on selecting and discovering new wonderful and beautiful breeds of fancy flowers. The game is utilizing a Blockchain technology, that’s why it’s called VarChain. Our main goal with this project is to spread the word about blockchain and make it accessible and easy to use for as many people as possible.'
        image={{ url: '/images/GroupL.jpg', alt: 'GroupL' }}
      />
      <TextLeftRight
        title='How does it work?'
        image={{url: 'images/scheme_seed.jpg', alt: 'scheme_seed'}}
        textLeft='VarChain allows you to breed two different flowers to receive new
        and genetically unique third one. Each CryptoFlower has a unique
        genome, which describes it’s properties - color, shape, details,
        etc.'
        textRight='When you breed two flowers, their genes mix and you will receive a
        new flower, which resembles both parents and if you are lucky has
        something completely new!'
      />
      <div className='productData'>
        <div className="container">
          <div className='productData__top'>
            <h2 className='productData__title'><FontAwesomeIcon icon={faSeedling} /> Lan var expo</h2>
            <div className='productData__viewAll'><Link to='/shop'>View All <FontAwesomeIcon icon={faChevronRight} /></Link></div>
          </div>
          <div className="row">
            <ListProduct dataProduct={dataProduct} offset={0} limit={4}/>
          </div>
        </div>
      </div>
      <ImageText
        title='Auction House – make a profit!'
        description='Your unique flower brings real profit! Get money for crossing your flowers with the flowers of other players or sell flowers at Auction House of VarChain!'
        button={{ title: 'Discover now', url: '/shop' }}
        image={{ url: '/images/Group2.png', alt: 'auction2' }}
        modifier='yes'
      />
      <div className='productData'>
        <div className="container">
          <div className='productData__top'>
            <h2 className='productData__title'><FontAwesomeIcon icon={faSeedling} /> Lan var expo</h2>
            <div className='productData__viewAll'><Link to='/shop'>View All <FontAwesomeIcon icon={faChevronRight} /></Link></div>
          </div>
          <div className="row">
            <ListProduct dataProduct={dataProduct} offset={4} limit={8}/>
          </div>
        </div>
      </div>
      <TextIcon
        title='Unique Features'
        item={[
          { title: 'Become the flower grower', description: 'Find and grow new and unique plants that will blow your mind away!', icon: <FontAwesomeIcon icon={faSun} /> },
          { title: 'Become the collector', description: 'Complete your collection of rare traits for everyone to envy!', icon: <FontAwesomeIcon icon={faAward} /> },
          { title: 'Become the trader', description: 'Buy and sell flowers on Auction with other players!', icon: <FontAwesomeIcon icon={faCartArrowDown} /> }
        ]}
      />
    </>
  )
}

export default Home;