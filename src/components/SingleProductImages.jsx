import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import ReactImageMagnify from "react-image-magnify";

const imagezoom = `https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg`

const SingleProductImages = ({ product }) => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);

  const { productImage, productSubImages } = product;

  // Ensure productImage and productSubImages are arrays
  const productImagesArr = Array.isArray(productSubImages) ? productSubImages : [];
  const productSubImagesArr = Array.isArray(productSubImages) ? productSubImages : [];

  const settings = {
    // dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '', // Hide the default next button
    prevArrow: '', // Hide the default previous button

  };

  const settingsThumb = {
    dots: false,
    infinite: false,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
  };

  return (
    <div className="col-md-6 col-sm-12 col-xs-12 mb-md-0 mb-sm-5">
      <div className="detail-gallery row" style={{}}>
        <div className="slider-nav-thumbnails col-2">
          <Slider {...settingsThumb} asNavFor={nav1} ref={(slider) => (sliderRef2 = slider)} swipeToSlide={true} focusOnSelect={true}>
            {productImagesArr.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`product image ${index}`} />
              </div>
            ))}
          </Slider>
        </div>
        <div className="product-image-slider col-10">
          <Slider {...settings} asNavFor={nav2} ref={(slider) => (sliderRef1 = slider)}>
            {productImagesArr.map((image, index) => (
              <div key={index}>
                {/* <img src={image} alt={`product image ${index}`} /> */}
                <ReactImageMagnify
                  {...{
                    smallImage: {
                      alt: "Wristwatch by Ted Baker London",
                      isFluidWidth: true,
                      src: image,
                    },
                    largeImage: {
                      src: imagezoom,
                      width: 1200,
                      height: 1800,
                    },
                  }}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SingleProductImages;
