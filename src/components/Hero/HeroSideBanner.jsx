import sideBannerImg from "../../assets/imgs/banner/banner-11.jpg";
import Banner from "../../assets/imgs/banner/40discount.jpg"
import { Link } from "react-router-dom";
// C:\Users\Aaditya Singh\Desktop\tags-website-frontend\src\assets\imgs\homepageBanner\banner2.jpeg
const   HeroSideBanner = () => {
  return (
    <>
    <Link to="/all-categories">
      <div className="banner-img style-3 animated animated" style={{ backgroundImage: `url(${Banner})`,border:"3px solid red" }}>
        
      </div>
      </Link>
    </>
  );
};

export default HeroSideBanner;
