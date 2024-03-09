import bannerImg1 from "../../assets/imgs/banner/banner-1.jpg"
// assets/imgs/banner/banner-1.png

const Banner1 = () => {
  return (
    <>
      <div className="banner-img">
        <img src={bannerImg1} alt="" />
        <div className="banner-text">
          <h4>
            Everyday Fresh & <br />
            Clean with Our
            <br />
            Products
          </h4>
          <a className="btn btn-xs" href="shop-grid-right.html">
            Shop Now <i className="fi-rs-arrow-small-right"></i>
          </a>
        </div>
      </div>
    </>
  )
}

export default Banner1
