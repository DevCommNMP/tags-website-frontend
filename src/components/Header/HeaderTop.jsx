import { Link } from "react-router-dom";
const HeaderTop = () => {
  return (
    <>
      <div className="bg-red text-white-all header-top header-top-ptb-1 d-none d-lg-block sticky-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-3 col-lg-4">
              <div className="header-info">
                <ul>
               
                  {/* <li>
                    <Link to="/blog">Blog</Link>
                  </li> */}
                  <li>
                    <Link to="/about-us">About Us</Link>
                  </li>
                  <li>
                    <Link to="/contact-us">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-6 col-lg-4">
              <div className="text-center">
                <div id="news-flash" className="d-inline-block">
                  <ul>
                    <li style={{fontSize:20,padding:10}}><span style={{fontSize:25,padding:10}}>50%</span>discount on every type of footwear</li>
                    {/* <li>Supper Value Deals - Save more with coupons</li> */}
                    {/* <li>Trendy 25silver jewelry, save up 35% off today</li> */}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4">
              <div className="header-info header-info-right">
                <ul>
                  <li>
                    Need help? Call Us: <strong className="text-white"> +91 9611459290</strong>
                  </li>
                  <li>
                    <a className="language-dropdown-active">INR</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderTop;
