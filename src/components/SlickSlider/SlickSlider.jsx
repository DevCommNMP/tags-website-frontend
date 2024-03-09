import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Slider from 'react-slick'

export default function SlickSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <Slider {...settings}>
      <li className="single-hero-slider single-animation-wrap sliderImg1">
        <h1>Slide1</h1>
      </li>

      <li className="single-hero-slider single-animation-wrap sliderImg2">
        <h1>Slide2</h1>
      </li>

      <li className="single-hero-slider single-animation-wrap sliderImg1">
        <h1>Slide3</h1>
      </li>

      <li className="single-hero-slider single-animation-wrap sliderImg2">
        <h1>Slide4</h1>
      </li>

      <li className="single-hero-slider single-animation-wrap sliderImg1">
        <h1>Slide5</h1>
      </li>
      <li className="single-hero-slider single-animation-wrap sliderImg2">
        <h1>Slide6</h1>
      </li>
      <li className="single-hero-slider single-animation-wrap sliderImg1">
        <h1>Slide7</h1>
      </li>
    </Slider>
  )
}
