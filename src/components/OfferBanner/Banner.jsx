import { Link } from "react-router-dom";
import bannerImg1 from "../../assets/imgs/banner/banner-01.jpg";
import bannerImg2 from "../../assets/imgs/banner/banner-02.avif";
import bannerImg3 from "../../assets/imgs/banner/banner-03.jpg";
// import bannerImg3 from "../../assets/imgs/homepageBanner/banner1.jpeg";

const Banner = () => {
  return (
    <>
    <section>
      <div className="row d-none d-xl-flex">

      <div className="col-lg-4 col-md-6 ">
        <div className="banner-img" style={{ backgroundImage: `url(${bannerImg1})`, height: "200px" }}>
          <div className="banner-text">
            <h4>
              Best fit for Women&apos;s starting from <br />
              
              <br />
             <strong style={{fontSize:40,color:"red"}}>₹ 1999/-</strong>
            </h4>
            <Link className="btn btn-xs" to="/bestfits/under-1999">
              Shop Now <i className="fi-rs-arrow-small-right"></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="banner-img" style={{ backgroundImage: `url(${bannerImg2})`, height: "200px" }}>
          <div className="banner-text">
          <h4>
              Casual Footwear for Women&apos;s starting from <br />
              
              <br />
             <strong style={{fontSize:40,color:"red"}}>₹ 2999/-</strong>
            </h4>
            <Link className="btn btn-xs"  to="/bestfits/under-2999">
              Shop Now <i className="fi-rs-arrow-small-right"></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="banner-img" style={{ backgroundImage: `url(${bannerImg3})`, height: "200px" }}>
          <div className="banner-text">
          <h4>
              Women&apos;s Footwear under <br />
              
              <br />
             <strong style={{fontSize:40,color:"red"}}>₹3999/-</strong>
            </h4>
            <Link className="btn btn-xs" to="/bestfits/under-3999">
              Shop Now <i className="fi-rs-arrow-small-right"></i>
            </Link>
          </div>
        </div>
      </div>
      </div>

      </section>

    </>
  );
};

export default Banner;
