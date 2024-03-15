import { useState, useRef } from 'react';
import Slider from 'react-slick';

import product161 from '../assets/imgs/shop/product-16-1.jpg';
import product162 from '../assets/imgs/shop/product-16-2.jpg';
import product163 from '../assets/imgs/shop/product-16-3.jpg';
import product164 from '../assets/imgs/shop/product-16-4.jpg';
import product165 from '../assets/imgs/shop/product-16-5.jpg';
import product166 from '../assets/imgs/shop/product-16-6.jpg';
import product167 from '../assets/imgs/shop/product-16-7.jpg';

const SingleProductImages = () => {
  const productImages = [
    product161,
    product162,
    product163,
    product164,
    product165,
    product166,
    product167
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const sliderRef = useRef();

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
    sliderRef.current.slickGoTo(index);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="col-md-6 col-sm-12 col-xs-12 mb-md-0 mb-sm-5">
      <div className="detail-gallery">
        <span className="zoom-icon">
          <i className="fi-rs-search"></i>
        </span>
        <div className="product-image-slider">
          <Slider ref={sliderRef} {...settings}>
            {productImages.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`product image ${index}`} />
              </div>
            ))}
          </Slider>
        </div>
        <div className="slider-nav-thumbnails">
          {productImages.map((image, index) => (
            <div
              key={index}
              className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
              onClick={() => handleThumbnailClick(index)}
            >
              <img src={image} alt={`thumbnail ${index}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleProductImages;
