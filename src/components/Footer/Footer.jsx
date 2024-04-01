import logo from "../../assets/imgs/theme/logo.png";
import iconLocation from "../../assets/imgs/theme/icons/icon-location.svg";
import iconContact from "../../assets/imgs/theme/icons/icon-contact.svg";
import iconEmail2 from "../../assets/imgs/theme/icons/icon-email-2.svg";
import phoneCall from "../../assets/imgs/theme/icons/phone-call.svg";
import iconFacebookWhite from "../../assets/imgs/theme/icons/icon-facebook-white.svg";
import iconTwitterWhite from "../../assets/imgs/theme/icons/icon-twitter-white.svg";
import iconInstagramWhite from "../../assets/imgs/theme/icons/icon-instagram-white.svg";
import iconPinterestWhite from "../../assets/imgs/theme/icons/icon-pinterest-white.svg";
import iconYoutubeWhite from "../../assets/imgs/theme/icons/icon-youtube-white.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="main">
        <hr className="text-brand" />
        <section className="section-padding footer-mid">
          <div className="container pt-15 pb-20">
            <div className="row">
              <div className="col">
                <div className="widget-about font-md mb-md-3 mb-lg-3 mb-xl-0">
                  <div className="logo mb-30">
                    <a className="mb-15">
                      <Link to="/">
                        <img src={logo} alt="logo" />
                      </Link>
                    </a>
                  </div>
                  <ul className="contact-infor">
                    <li>
                      <img src={iconLocation} alt="" />
                      <strong>Address:</strong> <span>1368, D-5, Narayana Shasthri Road, Devaraj Mohalla, Mysore - 570001</span>
                    </li>
                    <li>
                      <img src={iconContact} alt="" />
                      <strong>Call Us:</strong>
                      <span>(+91) 98444 88700</span>
                    </li>
                    <li>
                      <img src={iconEmail2} alt="" />
                      <strong>Email:</strong>
                      <span>info@tagsfootwear.com</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer-link-widget col">
                <h4 className="widget-title">Company</h4>
                <ul className="footer-list mb-sm-5 mb-md-0">
                  <li>
                    <a>About Us</a>
                  </li>
                  <li>
                    <a>Privacy Policy</a>
                  </li>
                  <li>
                    <a>Terms &amp; Conditions</a>
                  </li>
                  <li>
                    <a>Contact Us</a>
                  </li>
                  <li>
                    <a>Support Center</a>
                  </li>
                </ul>
              </div>
              <div className="footer-link-widget col">
                <h4 className="widget-title">Shop by Types</h4>
                <ul className="footer-list mb-sm-5 mb-md-0">
                  <li>
                    <a>Boots</a>
                  </li>
                  <li>
                    <a>Comfort</a>
                  </li>
                  <li>
                    <a>Slip Ons</a>
                  </li>
                  <li>
                    <a>Sneakers</a>
                  </li>
                  <li>
                    <a>Walking Shoes</a>
                  </li>
                </ul>
              </div>
              <div className="footer-link-widget col">
                <h4 className="widget-title">Shop by Categories</h4>
                <ul className="footer-list mb-sm-5 mb-md-0">
                  <li>
                    <a>Casual Shoes</a>
                  </li>
                  <li>
                    <a>Ethnic Shoes</a>
                  </li>
                  <li>
                    <a>Formal Shoes</a>
                  </li>
                  <li>
                    <a>Party Shoes</a>
                  </li>
                  <li>
                    <a>Sports Shoes</a>
                  </li>
                </ul>
              </div>

              <div className="footer-link-widget col">
                <h4 className="widget-title">Account</h4>
                <ul className="footer-list mb-sm-5 mb-md-0">
                  <li>
                    <a>Sign In</a>
                  </li>
                  <li>
                    <a>View Cart</a>
                  </li>
                  <li>
                    <a>My Wishlist</a>
                  </li>
                  <li>
                    <a>Help Ticket</a>
                  </li>
                  <li>
                    <a>Shipping Details</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="text-white bg-brand pt-15 pb-10">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-4 col-lg-6 col-md-6">
                <p className="font-sm mb-0 text-white">
                  &copy; 2024, <strong className="text-light">TAGS </strong> Footwear & Accessories | All rights reserved
                </p>
              </div>
              <div className="col-xl-4 col-lg-6 text-center d-none d-xl-block">
                <div className="hotline d-lg-inline-flex mr-30">
                  <img src={phoneCall} alt="hotline" />
                  <p className="text-white">
                    +91 98444 88700
                  </p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6 text-end d-none d-md-block">
                <div className="mobile-social-icon">
                  <h6 className="text-white">Follow Us</h6>
                  <a>
                    <img src={iconFacebookWhite} alt="" />
                  </a>
                  <a>
                    <img src={iconTwitterWhite} alt="" />
                  </a>
                  <a>
                    <img src={iconInstagramWhite} alt="" />
                  </a>
                  <a>
                    <img src={iconPinterestWhite} alt="" />
                  </a>
                  <a>
                    <img src={iconYoutubeWhite} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
