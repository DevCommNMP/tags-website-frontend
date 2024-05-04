import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// import SlickSlider from '../SlickSlider/SlickSlider'
import HeroSideBanner from "../../components/Hero/HeroSideBanner";
// import Banner1  from "../../assets/imgs/banner/homepageBanner/Banner2.jpeg"
import Banner1 from "../../assets/imgs/banner/homepageBanner/banner2.jpeg"
var settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  // cssEase: "linear",
  pauseOnHover: false,
  arrows: false,
};

const Hero = () => {
  return (
    <section className="home-slider style-2 position-relative mb-50">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-8 col-lg-12">
            <div className="home-slide-cover">
              <div className="hero-slider-1 style-4 dot-style-1 dot-style-1-position-1">
                <Slider {...settings}>
                  <li className="single-hero-slider single-animation-wrap Banner1">
                    <img src={Banner1}  alt="" />
                  </li>

                  <li className="single-hero-slider single-animation-wrap Banner1">
                    <img src={Banner1}  alt="" />
                  </li>

                  <li className="single-hero-slider single-animation-wrap Banner1">
                    <img src={Banner1}  alt="" />
                  </li>

                </Slider>
              </div>
            </div>
          </div>
          <div className="col-lg-4 d-none d-xl-block">
            <HeroSideBanner />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
