import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

const DailyBestSells = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000
  }

  return (
    <>
      <section className="section-padding pb-5">
        <div className="container">
          <div className="section-title">
            <h3 className="">Daily Best Sells</h3>
          </div>
          <div className="row">
            <div className="col-lg-3 d-none d-lg-flex">
              <div className="banner-img style-2">
                <div className="banner-text">
                  <h2 className="mb-100">Bring nature into your home</h2>
                  <a className="btn btn-xs" href="shop-grid-right.html">
                    Shop Now <i className="fi-rs-arrow-small-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-9 col-md-12">
              <Slider {...settings}>
                <li className="single-hero-slider single-animation-wrap ">
                  <h1>Product<br/>Item<br/>1 </h1>
                </li>

                <li className="single-hero-slider single-animation-wrap ">
                  <h1>Product<br/>Item<br/>2 </h1>
                </li>

                <li className="single-hero-slider single-animation-wrap ">
                  <h1>Product<br/>Item<br/>3 </h1>
                </li>

                <li className="single-hero-slider single-animation-wrap ">
                  <h1>Product<br/>Item<br/>4 </h1>
                </li>

                <li className="single-hero-slider single-animation-wrap ">
                  <h1>Product<br/>Item<br/>5 </h1>
                </li>
                <li className="single-hero-slider single-animation-wrap ">
                  <h1>Product<br/>Item<br/>6 </h1>
                </li>
                <li className="single-hero-slider single-animation-wrap ">
                  <h1>Product<br/>Item<br/>7 </h1>
                </li>
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default DailyBestSells
