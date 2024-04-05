import React, { Component } from "react";
import Slider from "react-slick";
// import { baseUrl } from "./config";

import img1 from '../assets/imgs/banner/banner-1.png'
import img2 from '../assets/imgs/banner/banner-2.png'
import img3 from '../assets/imgs/banner/banner-3.png'
import img4 from '../assets/imgs/banner/banner-4.png'

function CustomPaging() {
  const settings = {
    customPaging: function(i) {
      return (
        <a>
          <img src={`${i + 1}.png`} />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src={"1.jpg"} />
        </div>
        <div>
          <img src={"2.jpg"} />
        </div>
        <div>
          <img src={"3.jpg"} />
        </div>
        <div>
          <img src={"4.jpg"} />
        </div>
      </Slider>
    </div>
  );
}

export default CustomPaging;
