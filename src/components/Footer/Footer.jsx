import logo from "../../assets/imgs/theme/logo.png";
import iconLocation from "../../assets/imgs/theme/icons/icon-location.svg";
import iconContact from "../../assets/imgs/theme/icons/icon-contact.svg";
import iconEmail2 from "../../assets/imgs/theme/icons/icon-email-2.svg";
import iconClock from "../../assets/imgs/theme/icons/icon-clock.svg";
// import googlePlay from "../../assets/imgs/theme/google-play.jpg";
import phoneCall from "../../assets/imgs/theme/icons/phone-call.svg";
import iconFacebookWhite from "../../assets/imgs/theme/icons/icon-facebook-white.svg";
import iconTwitterWhite from "../../assets/imgs/theme/icons/icon-twitter-white.svg";
import iconInstagramWhite from "../../assets/imgs/theme/icons/icon-instagram-white.svg";
import iconPinterestWhite from "../../assets/imgs/theme/icons/icon-pinterest-white.svg";
import iconYoutubeWhite from "../../assets/imgs/theme/icons/icon-youtube-white.svg";
// import NewsLetter from "../NewsLetter";

const Footer = () => {
  return (
    <>
      <footer className="main">
        {/* <NewsLetter /> */}
        <section className="section-padding footer-mid">
          <div className="container pt-15 pb-20">
            <div className="row">
              <div className="col">
                <div className="widget-about font-md mb-md-3 mb-lg-3 mb-xl-0">
                  <div className="logo mb-30">
                    <a className="mb-15" href="index.html">
                      <img src={logo} alt="logo" />
                    </a>
                  </div>
                  <ul className="contact-infor">
                    <li>
                      <img src={iconLocation} alt="" />
                      <strong>Address:</strong> <span>5171 W Campbell Ave undefined Kent, Utah 53127 United States</span>
                    </li>
                    <li>
                      <img src={iconContact} alt="" />
                      <strong>Call Us:</strong>
                      <span>(+91) - 540-025-124553</span>
                    </li>
                    <li>
                      <img src={iconEmail2} alt="" />
                      <strong>Email:</strong>
                      <span>sale@example.com</span>
                    </li>
                    <li>
                      <img src={iconClock} alt="" />
                      <strong>Hours:</strong>
                      <span>10:00 - 18:00, Mon - Sat</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer-link-widget col">
                <h4 className="widget-title">Company</h4>
                <ul className="footer-list mb-sm-5 mb-md-0">
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Delivery Information</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Terms &amp; Conditions</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                  <li>
                    <a href="#">Support Center</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                </ul>
              </div>
              <div className="footer-link-widget col">
                <h4 className="widget-title">Popular</h4>
                <ul className="footer-list mb-sm-5 mb-md-0">
                  <li>
                    <a href="#">Flavoured </a>
                  </li>
                  <li>
                    <a href="#">Butter and Margarine</a>
                  </li>
                  <li>
                    <a href="#">Eggs Substitutes</a>
                  </li>
                  <li>
                    <a href="#">Marmalades</a>
                  </li>
                  <li>
                    <a href="#">Sour Cream and Dips</a>
                  </li>
                  <li>
                    <a href="#">Tea & Kombucha</a>
                  </li>
                  <li>
                    <a href="#">Cheese</a>
                  </li>
                </ul>
              </div>
              <div className="footer-link-widget col">
                <h4 className="widget-title">Shop by Category</h4>
                <ul className="footer-list mb-sm-5 mb-md-0">
                  <li>
                    <a href="#">Become a Vendor</a>
                  </li>
                  <li>
                    <a href="#">Affiliate Program</a>
                  </li>
                  <li>
                    <a href="#">Farm Business</a>
                  </li>
                  <li>
                    <a href="#">Farm Careers</a>
                  </li>
                  <li>
                    <a href="#">Our Suppliers</a>
                  </li>
                  <li>
                    <a href="#">Accessibility</a>
                  </li>
                  <li>
                    <a href="#">Promotions</a>
                  </li>
                </ul>
              </div>

              <div className="footer-link-widget col">
                <h4 className="widget-title">Account</h4>
                <ul className="footer-list mb-sm-5 mb-md-0">
                  <li>
                    <a href="#">Sign In</a>
                  </li>
                  <li>
                    <a href="#">View Cart</a>
                  </li>
                  <li>
                    <a href="#">My Wishlist</a>
                  </li>
                  <li>
                    <a href="#">Track My Order</a>
                  </li>
                  <li>
                    <a href="#">Help Ticket</a>
                  </li>
                  <li>
                    <a href="#">Shipping Details</a>
                  </li>
                  <li>
                    <a href="#">Compare products</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <div className="container pb-30">
          <div className="row align-items-center">
            <div className="col-12 mb-30">
              <div className="footer-bottom"></div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <p className="font-sm mb-0">
                &copy; 2024, <strong className="text-brand">Tags Footwear</strong> - React Ecommerce
                <br />
                All rights reserved
              </p>
            </div>
            <div className="col-xl-4 col-lg-6 text-center d-none d-xl-block">
              <div className="hotline d-lg-inline-flex mr-30">
                <img src={phoneCall} alt="hotline" />
                <p>
                  1900 - 6666<span>Working 8:00 - 22:00</span>
                </p>
              </div>
              <div className="hotline d-lg-inline-flex">
                <img src={phoneCall} alt="hotline" />
                <p>
                  1900 - 8888<span>7 Days Support Center</span>
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 text-end d-none d-md-block">
              <div className="mobile-social-icon">
                <h6>Follow Us</h6>
                <a href="#">
                  <img src={iconFacebookWhite} alt="" />
                </a>
                <a href="#">
                  <img src={iconTwitterWhite} alt="" />
                </a>
                <a href="#">
                  <img src={iconInstagramWhite} alt="" />
                </a>
                <a href="#">
                  <img src={iconPinterestWhite} alt="" />
                </a>
                <a href="#">
                  <img src={iconYoutubeWhite} alt="" />
                </a>
              </div>
              <p className="font-sm">Up to 15% discount on your first subscribe</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
