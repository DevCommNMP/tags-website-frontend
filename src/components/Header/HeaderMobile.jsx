import { Link } from "react-router-dom";
import iconFacebookWhite from "../../assets/imgs/theme/icons/icon-facebook-white.svg";
import iconTwitterWhite from "../../assets/imgs/theme/icons/icon-twitter-white.svg";
import iconInstagramWhite from "../../assets/imgs/theme/icons/icon-instagram-white.svg";
import iconWhatsappWhite from "../../assets/imgs/theme/icons/icons-whatsapp.svg";
import iconYoutubeWhite from "../../assets/imgs/theme/icons/icon-youtube-white.svg";
import logo from "../../assets/imgs/theme/logo.png";
const HeaderMobile = () => {
  return (
    <div className="mobile-header-content-area">
      <div className="mobile-search search-style-3 mobile-header-border">
        <form action="#">
          <input type="text" placeholder="Search for items…" />
          <button type="submit">
            <i className="fi-rs-search"></i>
          </button>
        </form>
      </div>
      <div className="mobile-menu-wrap mobile-header-border">
        <nav>
          <ul className="mobile-menu font-heading">
            <li>
             
              <Link className="categories-button-active" to="/all-categories">
                    <span className="fi-rs-apps"></span> <span className="et">Browse</span> All Categories
                  </Link>
              
            </li>
            <li className="menu-item-has-children">
            <Link to="/categories/Occation">
                          Occasional <i className="fi-rs-angle-down"></i>
                        </Link>
              <ul className="dropdown">
              <li>
                            <Link to="/categories/Casual Footwear">Casual Footwear</Link>
                          </li>
                          <li>
                            <Link to="/categories/Ethnic Footwear">Ethnic Footwear</Link>
                          </li>
                          <li>
                            <Link to="/categories/Formal Footwear">Formal Footwear</Link>
                          </li>
                          <li>  
                            <Link to="/categories/Party Footwear">Party Footwear</Link>
                          </li>
               
              </ul>
            </li>
            <li className="menu-item-has-children">
            <a style={{ cursor: "pointer" }}>
                          Shoe Type <i className="fi-rs-angle-down"></i>
                        </a>
                         <ul className="sub-menu">
                          <li>
                            <Link to="/products/subtypes/Ballerinas Walking Footwear">Ballerinas Walking Footwear</Link>
                          </li>
                          <li>
                            <Link to="/products/subtypes/Boots">Boots</Link>
                          </li>
                          <li>
                            <Link to="/products/subtypes/Comfort">Comfort</Link>
                          </li>
                          <li>
                            <Link to="/products/subtypes/Flip Flop">Flip Flops</Link>
                          </li>
                          <li>
                            <Link to="/products/subtypes/kolhapuries">Kolhapuris</Link>
                          </li>
                          <li>
                            <Link to="/products/subtypes/Mojaris">Mojaris</Link>
                          </li>
                          <li>
                            <Link to="/products/subtypes/Mules">Mules</Link>
                          </li>
                          <li>
                            <Link to="/products/subtypes/Pumps">Pumps</Link>
                          </li>
                          <li>
                            <Link to="/products/subtypes/Sandles">Sandles</Link>
                          </li>
                          <li>
                            <Link to="/products/subtypes/Slides">Slides</Link>
                          </li>
                          <li>
                            <Link to="/products/subtypes/Slippers">Slippers</Link>
                          </li>
                          <li>
                            <Link to="/products/subtypes/Slip Ons">Slip Ons</Link>
                          </li>
                          {/* <li>
                            <Link to="/products/subtypes/Sneakers">Sneakers</Link>
                          </li> */}
                          <li>
                            <Link to="/products/subtypes/Walking Footwear">Walking Footwear</Link>
                          </li>
                        </ul>
            </li>
            <li className="menu-item-has-children">
               <a>
                          Colours <i className="fi-rs-angle-down"></i>
                        </a>
                        <ul className="sub-menu">
                        <li style={{ display: "flex" }}>
        <span style={{ backgroundColor: "gold", width: "15px", height: "15px", marginRight: "5px", border: "1px solid black" }}></span>
        <Link to="/allproducts/Gold">Gold</Link>
      </li>
      <li style={{ display: "flex" }}>
        <span style={{ backgroundColor: "peach", width: "15px", height: "15px", marginRight: "5px", border: "1px solid black" }}></span>
        <Link to="/allproducts/Peach">Peach</Link>
      </li>
      <li style={{ display: "flex" }}>
        <span style={{ backgroundColor: "pink", width: "15px", height: "15px", marginRight: "5px", border: "1px solid black" }}></span>
        <Link to="/allproducts/Pink">Pink</Link>
      </li>
      <li style={{ display: "flex" }}>
        <span style={{ backgroundColor: "black", width: "15px", height: "15px", marginRight: "5px", border: "1px solid black" }}></span>
        <Link to="/allproducts/Black">Black</Link>
      </li>
      <li style={{ display: "flex" }}>
        <span style={{ backgroundColor: "white", width: "15px", height: "15px", marginRight: "5px", border: "1px solid black" }}></span>
        <Link to="/allproducts/White">White</Link>
      </li>
      <li style={{ display: "flex" }}>
        <span style={{ backgroundColor: "chic", width: "15px", height: "15px", marginRight: "5px", border: "1px solid black" }}></span>
        <Link to="/allproducts/Chic">Chic</Link>
      </li>
      <li style={{ display: "flex" }}>
        <span style={{ backgroundColor: "blue", width: "15px", height: "15px", marginRight: "5px", border: "1px solid black" }}></span>
        <Link to="/allproducts/Blue"> Blue</Link>
      </li>
      <li style={{ display: "flex" }}>
        <span style={{ backgroundColor: "rust", width: "15px", height: "15px", marginRight: "5px", border: "1px solid black" }}></span>
        <Link to="/allproducts/Rust">Rust</Link>
      </li>
      <li style={{ display: "flex" }}>
        <span style={{ backgroundColor: "olivegreen", width: "15px", height: "15px", marginRight: "5px", border: "1px solid black" }}></span>
        <Link to="/allproducts/Olivegreen">Olive Green</Link>
      </li>
      <li style={{ display: "flex" }}>
        <span style={{ backgroundColor: "brown", width: "15px", height: "15px", marginRight: "5px", border: "1px solid black" }}></span>
        <Link to="/allproducts/Brown">Brown</Link>
      </li>
                        </ul>
            </li>
            <li className="menu-item-has-children">
              <a href="blog-category-fullwidth.html">Blog</a>
            </li>
            <li>
                        <Link to="/categories/Premium Leather">About</Link>
                      </li>
                      <li>
                        <Link to="/categories/Premium Leather" style={{ color: "#d02327" }}>
                          Premium Leather
                        </Link>
                      </li>
          </ul>
        </nav>
      </div>
      <div className="mobile-header-info-wrap">
        <div className="single-mobile-header-info">
          <a href="page-contact.html">
            <i className="fi-rs-marker"></i> Our location{" "}
          </a>
        </div>
        <div className="single-mobile-header-info">
          <a href="page-login.html">
            <i className="fi-rs-user"></i>Log In / Sign Up{" "}
          </a>
        </div>
        <div className="single-mobile-header-info">
          <a>
            <i className="fi-rs-headphones"></i>(+01) - 2345 - 6789{" "}
          </a>
        </div>
      </div>
      <div className="mobile-social-icon mb-50">
        <h6 className="mb-15">Follow Us</h6>
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
      &copy; 2024, <strong className="">TAGS Footwear & Accessories</strong> | All rights reserved
    </div>
  );
};

export default HeaderMobile;
