import bannerImg1 from "../../assets/imgs/banner/banner-01.jpg";
// import bannerImg2 from "../../assets/imgs/banner/banner-02.avif";
// import bannerImg3 from "../../assets/imgs/banner/banner-03.jpg";

const Banner = () => {
  return (
    <>
      <div className="col-lg-4 col-md-6">
        <div className="banner-img" style={{ backgroundImage: `url(${bannerImg1})`, height: "200px" }}>
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
      </div>
    </>
  );
};

export default Banner;
