import logo from "../../assets/imgs/theme/logo.png";
import iconLocation from "../../assets/imgs/theme/icons/icon-location.svg";
import iconContact from "../../assets/imgs/theme/icons/icon-contact.svg";
import iconEmail2 from "../../assets/imgs/theme/icons/icon-email-2.svg";
import phoneCall from "../../assets/imgs/theme/icons/phone-call.svg";
import iconFacebookWhite from "../../assets/imgs/theme/icons/icon-facebook-white.svg";
import iconTwitterWhite from "../../assets/imgs/theme/icons/icon-twitter-white.svg";
import iconInstagramWhite from "../../assets/imgs/theme/icons/icon-instagram-white.svg";
import iconWhatsappWhite from "../../assets/imgs/theme/icons/icons-whatsapp.svg";
import iconYoutubeWhite from "../../assets/imgs/theme/icons/icon-youtube-white.svg";
import { Link } from "react-router-dom";

const Footer = () => {

  const localData = localStorage.getItem("userData");
  

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
                      <span>(+91) 9611459290
</span>
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
                  <Link to="/aboutus"><a style={{color:"grey"}}>About Us</a></Link>

                  </li>
                  <li>
                  <Link to="/privacy-policy"><a style={{color:"grey"}}>Privacy Policy</a></Link>
                  </li>
                  <li>
                  <Link to="/terms-conditions"><a style={{color:"grey"}}>Terms &amp; Conditions</a></Link>

                  
                  </li>
                  <li>
                  <Link to="/shipping-policy"><a style={{color:"grey"}}>Shipping Policy</a></Link>

                    
                  </li>
                  <li>
                  <Link to="/refund-policy"><a style={{color:"grey"}}>Refund & Cancellation Policy</a></Link>

                  </li>
                </ul>
              </div>
              <div className="footer-link-widget col">
                <h4 className="widget-title">Shop by Types</h4>
                <ul className="footer-list mb-sm-5 mb-md-0 "  >
                  <li>
                  <Link to="/products/subtypes/Boots"><a style={{color:"grey"}}>Boots</a></Link>
                  </li>
                  <li>
                  <Link to="/products/subtypes/Comfort"><a style={{color:"grey"}}>Comfort</a></Link>

                    <a></a>
                  </li>
                  <li>
                  <Link to="/products/subtypes/Slipons"><a style={{color:"grey"}}>Slipons</a></Link>

                  </li>
                  <li>
                  <Link to="/products/subtypes/Sneakers"><a style={{color:"grey"}}>Sneakers</a></Link>

                  
                  </li>
                  <li>
                  <Link to="/products/subtypes/Walking Shoes"><a style={{color:"grey"}}>Walking Shoes</a></Link>

                  
                  </li>
                </ul>
              </div>
              <div className="footer-link-widget col">
                <h4 className="widget-title">Shop by Categories</h4>
                <ul className="footer-list mb-sm-5 mb-md-0">
                  <li>
                  <Link to="/categories/Casual Footwear"><a style={{color:"grey"}}>Casual Shoes</a></Link>
                  </li>
                  <li>
                  <Link to="/categories/Ethnic Shoes"><a style={{color:"grey"}}>Ethnic Shoes</a></Link>

                    
                  </li>
                  <li>
                  <Link to="/categories/Formal Shoes"><a style={{color:"grey"}}>Formal Shoes</a></Link>
 
                  </li>
                  <li>
                  <Link to="/categories/Party Shoes"><a style={{color:"grey"}}>Party Shoes</a></Link>

                  </li>
                  <li>
                  <Link to="/categories/Sports Shoes"><a style={{color:"grey"}}>Sports Shoes</a></Link>

                   
                  </li>
                </ul>
              </div>

              <div className="footer-link-widget col">
                <h4 className="widget-title">Account</h4>
                <ul className="footer-list mb-sm-5 mb-md-0">
                  {!localData &&  <li>
                  <Link to="/login"><a style={{color:"grey"}}>Sign In</a></Link>

                  </li>}
                 
                  <li>
                  <Link to="/cart"><a style={{color:"grey"}}>View Cart</a></Link>
                  
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
                    +91 9611459290
                  </p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6 text-end d-none d-md-block">
                <div className="mobile-social-icon">
                  <h6 className="text-white">Follow Us</h6>
                  <a href="https://www.facebook.com" target="_blank">
                    <img src={iconFacebookWhite} alt="" />
                  </a>
                  <a href="https://www.twitter.com" target="_blank">
                    <img src={iconTwitterWhite} alt="" />
                  </a>
                  <a href="https://www.instagram.com" target="_blank">
                    <img src={iconInstagramWhite} alt="" />
                  </a>
                  <a href="https://www.whatsapp.com" target="_blank">
                    <img src={iconWhatsappWhite} alt="" />
                  </a>
                  <a href="https://www.youtube.com" target="_blank">
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
