import logo from "../../assets/imgs/theme/logo.png";
import iconHot from "../../assets/imgs/theme/icons/icon-hot.svg";
import iconHeadphone from "../../assets/imgs/theme/icons/icon-headphone.svg";
import cartImg from "../../assets/imgs/theme/icons/icon-cart.svg";
import wishList from "../../assets/imgs/theme/icons/icon-heart.svg";
import account from "../../assets/imgs/theme/icons/icon-user.svg";
import { useState, useEffect } from "react";
// import HeaderBottom from "./HeaderBottom";
import HeaderMiddle from "./HeaderMiddle";
import HeaderTop from "./HeaderTop";
import MobilePromotion from "./MobilePromotion";
// import HeaderMobile from "./HeaderMobile";
import { Link } from "react-router-dom";

import "./Header.css";
import HeaderMobile from "./HeaderMobile";

const Header = ({ allProducts }) => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState("");
  const [token, setToken] = useState("");
  

  const openMenu = () => {
    setIsSidebarVisible(true);
  };

  const closeMenu = () => {
    setIsSidebarVisible(false);
  };
  useEffect(() => {
    const localData = localStorage.getItem("userData");
    const cartData = JSON.parse(localStorage.getItem("cartItems"));

    if (localData) {
      const parsedData = JSON.parse(localData);
      setToken(parsedData.token);
      setUser(parsedData);
    }

    if (cartData) {
      setCart(cartData);
    }
  }, [localStorage]);

  useEffect(() => {
    // Define function to handle cart change
    const handleCartChange = () => {
      const cartData = JSON.parse(localStorage.getItem("cartItems"));
      if (cartData) { 
        setCart(cartData); // Update cart state based on localStorage data
      }
    };

    // Add event listener to listen for changes in localStorage
    window.addEventListener("storage", handleCartChange);

    // Clean up by removing event listener
    return () => {
      window.removeEventListener("storage", handleCartChange);
    };
  }, []); // No dependencies, so it only runs once on component mount

  const signOutHandler = async () => {
    await localStorage.removeItem("userData");
    setToken("");
    navigate("/login");
  };


  useEffect(() => {
    if (isSidebarVisible) {
      document.body.classList.add("sidebar-visible");
    } else {
      document.body.classList.remove("sidebar-visible");
    }
  }, [isSidebarVisible]);

  return (
    <>
      <HeaderTop />
      <div className="sticky-header">
        <HeaderMiddle allProducts={allProducts} />
        <div className={`mobile-header-active mobile-header-wrapper-style ${isSidebarVisible ? "sidebar-visible" : ""}`}>
          <div className="mobile-header-wrapper-inner">
            <div className="mobile-header-top">
              <div className="mobile-header-logo">
                <Link to="/">
                  <img src={logo} alt="logo" />
                </Link>
              </div>
              <div onClick={closeMenu} className="mobile-menu-close close-style-wrap close-style-position-inherit">
                <button className="close-style  search-close">
                  <i className="icon-top"></i>
                  <i className="icon-bottom"></i>
                </button>
              </div>
            </div>
            <HeaderMobile />
          </div>
        </div>

        <MobilePromotion />
        <div className="header-bottom header-bottom-bg-color sticky-bar">
          <div className="container">
            <div className="header-wrap header-space-between position-relative">
              <div className="logo logo-width-1 d-block d-lg-none">
                <Link to="/">
                  <img src={logo} alt="logo" />
                </Link>
              </div>
              <div className="header-nav d-none d-lg-flex">
                <div className="main-categori-wrap d-none d-lg-block">
                  <Link className="categories-button-active" to="/all-categories">
                    <span className="fi-rs-apps"></span> <span className="et">Browse</span> All Categories
                  </Link>
                  <div className="categories-dropdown-wrap categories-dropdown-active-large font-heading">
                    <div className="d-flex categori-dropdown-inner"></div>
                    <div className="more_categories">
                      <span className="icon"></span> <span className="heading-sm-1">Show more...</span>
                    </div>
                  </div>
                </div>
                <div className="main-menu main-menu-padding-1 main-menu-lh-2 d-none d-lg-block font-heading">
                  <nav>
                    <ul>
                      <li className="hot-deals">
                        <img src={iconHot} alt="hot deals" />
                        <Link className="active" to="/categories/Deals">
                          Deals
                        </Link>
                      </li>
                      <li className="hot-deals" style={{color:"red"}}>
                        {/* <img src={iconHot} alt="hot deals" /> */}
                        <Link  to="/">
                         Home
                        </Link>
                      </li>

                      <li>
                        <Link to="/categories/Occation">
                          Occasional <i className="fi-rs-angle-down"></i>
                        </Link>
                        {/* this is a comment */}
                        <ul className="sub-menu">
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
                          {/* <li>
                            <Link to="/categories/Sports Footwear">Sports Footwear</Link>
                          </li> */}
                        </ul>
                      </li>
                      <li>
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
                      <li>
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

                      <li>
                        <Link to="/about-us">About</Link>
                      </li>
                      <li>
                        <Link to="/categories/Premium Leather" style={{ color: "#d02327" }}>
                          Premium Leather
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="hotline d-none d-lg-flex">
                <img src={iconHeadphone} alt="hotline" />
                <p>
                  +91 9611459290
<span>7 Days Support Center</span>
                </p>
              </div>
              <div onClick={openMenu} className="header-action-icon-2 d-block d-lg-none">
                <div className="burger-icon burger-icon-white">
                  <span className="burger-icon-top"></span>
                  <span className="burger-icon-mid"></span>
                  <span className="burger-icon-bottom"></span>
                </div>
              </div>
              <div className="header-action-right d-block d-lg-none">
                <div className="header-action-2">
                  <div className="header-action-icon-2">
                  <Link className="mini-cart-icon" to="/cart">
                      <img alt="Nest" src={cartImg} />
                      <span className="pro-count blue">{cart.length || 0}</span>
                    </Link>
                   
                  </div>
                  <div className="header-action-icon-2">
                  {token ? (
                    <div className="header-action-icon-2">
                      <div className="header-action-icon-2">
                        <div style={{ width: 30, height: 30, border: "1px solid red", borderRadius: "50%" }}>
                          <img className="svgInject" alt="Profile" src={user.profileImage || account} />
                        </div>
                        <Link>
                          <span className="lable ml-1">hello, {user.userName}</span>
                        </Link>
                      </div>

                      <div className="cart-dropdown-wrap cart-dropdown-hm2 account-dropdown">
                        <ul>
                          <li>
                            <Link to="/profile">
                              <i className="fi fi-rs-user mr-10"></i>My Account
                            </Link>
                          </li>
                          {/* <li>
                            <Link to="/profile">
                              <i className="fi fi-rs-location-alt mr-10"></i>
                              Order Tracking
                            </Link>
                          </li> */}
                       
                          <li>
                            <a>
                              <i className="fi fi-rs-heart mr-10"></i>My Wishlist
                            </a>
                          </li>
                          {/* <li>
                            <Link to="/profile">
                              <i className="fi fi-rs-settings-sliders mr-10"></i>
                              Setting
                            </Link>
                          </li> */}
                          <li>
                            <Link onClick={signOutHandler}>
                              <i className="fi fi-rs-sign-out mr-10"></i>
                              Sign out
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <div className="header-action-icon-2">
                      <Link to="/login">
                        <img className="svgInject" alt="Account" src={account} />
                      </Link>
                      <Link to="/login">
                        <span className="lable ml-0" onClick={() => navigate("/login")}>
                          Login
                        </span>
                      </Link>
                    </div>
                  )}
                    <div className="header-action-right">
                <div className="header-action-2">
                  <div className="header-action-icon-2">
                    <Link to="/cart" className="mini-cart-icon">
                      <img alt="Cart" src={cartImg} />
                      <span className="pro-count blue">{cart.length || 0}</span>
                    </Link>
                    <Link to="/cart">
                      <span className="lable">Cart</span>
                    </Link>
                  </div>
                  {token ? (
                    <div className="header-action-icon-2">
                      <div className="header-action-icon-2">
                        <div style={{ width: 30, height: 30, border: "1px solid red", borderRadius: "50%" }}>
                          <img className="svgInject" alt="Profile" src={user.profileImage || account} />
                        </div>
                        <Link>
                          <span className="lable ml-1">hello, {user.userName}</span>
                        </Link>
                      </div>

                      <div className="cart-dropdown-wrap cart-dropdown-hm2 account-dropdown">
                        <ul>
                          <li>
                            <Link to="/profile">
                              <i className="fi fi-rs-user mr-10"></i>My Account
                            </Link>
                          </li>
                          {/* <li>
                            <Link to="/profile">
                              <i className="fi fi-rs-location-alt mr-10"></i>
                              Order Tracking
                            </Link>
                          </li> */}
                       
                          <li>
                            <a>
                              <i className="fi fi-rs-heart mr-10"></i>My Wishlist
                            </a>
                          </li>
                          {/* <li>
                            <Link to="/profile">
                              <i className="fi fi-rs-settings-sliders mr-10"></i>
                              Setting
                            </Link>
                          </li> */}
                          <li>
                            <Link onClick={signOutHandler}>
                              <i className="fi fi-rs-sign-out mr-10"></i>
                              Sign out
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <div className="header-action-icon-2">
                      <Link to="/login">
                        <img className="svgInject" alt="Account" src={account} />
                      </Link>
                      <Link to="/login">
                        <span className="lable ml-0" onClick={() => navigate("/login")}>
                          Login
                        </span>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
