import { Link } from "react-router-dom";
import bannerImg1 from "../../assets/imgs/banner/banner-01.jpg";
import bannerImg2 from "../../assets/imgs/banner/banner-02.avif";
import bannerImg3 from "../../assets/imgs/banner/banner-03.jpg";
// import bannerImg3 from "../../assets/imgs/homepageBanner/banner1.jpeg";

const Banner = () => {
  return (
    <>
      <div className="col-lg-4 col-md-6">
        <div className="banner-img" style={{ backgroundImage: `url(${bannerImg1})`, height: "200px" }}>
          <div className="banner-text">
            <h4>
              Best fit for Women's starting from <br />
              
              <br />
             <strong style={{fontSize:40,color:"red"}}>₹ 999/-</strong>
            </h4>
            <Link className="btn btn-xs" to="/bestfits/under-999">
              Shop Now <i className="fi-rs-arrow-small-right"></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="banner-img" style={{ backgroundImage: `url(${bannerImg2})`, height: "200px" }}>
          <div className="banner-text">
          <h4>
              Casual Footwear for Women's starting from <br />
              
              <br />
             <strong style={{fontSize:40,color:"red"}}>₹ 1499/-</strong>
            </h4>
            <Link className="btn btn-xs"  to="/bestfits/under-1499">
              Shop Now <i className="fi-rs-arrow-small-right"></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="banner-img" style={{ backgroundImage: `url(${bannerImg3})`, height: "200px" }}>
          <div className="banner-text">
          <h4>
              Women's Footwear under <br />
              
              <br />
             <strong style={{fontSize:40,color:"red"}}>₹1999/-</strong>
            </h4>
            <Link className="btn btn-xs" to="/bestfits/under-999">
              Shop Now <i className="fi-rs-arrow-small-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
