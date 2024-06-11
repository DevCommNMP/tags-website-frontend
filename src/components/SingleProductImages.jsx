import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import ImageZoom from "./ImageZoom";

function SingleProductImages({ product }) {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1.current);
    setNav2(sliderRef2.current);
  }, []);

  const { productSubImages } = product;
  const productImagesArr = Array.isArray(productSubImages) ? productSubImages : [];

  const Arrow = ({ className, style, onClick }) => (
    <div
      className={className}
      style={{
        ...style,
        color: "black",
        backgroundColor: "black",
        border: "1px solid white",
        borderRadius: "100%",
        // width: "30px",
        // height: "30px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "40px",

      }}
      onClick={onClick}
    />
  );

  const settingsThumb = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    nextArrow: <Arrow direction="next" />,
    prevArrow: <Arrow direction="prev" />,
  };

  const settingsMain = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="col-md-6 col-sm-12 col-xs-12 mb-md-0 mb-sm-5">
      <div className="detail-gallery row">
        {/* Thumbnails */}
        <div className="slider-nav-thumbnails col-2">
          <Slider {...settingsThumb} asNavFor={nav1} ref={sliderRef2} swipeToSlide focusOnSelect>
            {productImagesArr.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`product image ${index}`} />
              </div>
            ))}
          </Slider>
        </div>
        {/* Main Image */}
        <div className="product-image-slider col-10">
          <Slider {...settingsMain} asNavFor={nav2} ref={sliderRef1}>
            {productImagesArr.map((image, index) => (
              <div key={index} className="image-container">
                <ImageZoom imageUrl={image} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default SingleProductImages;
