import logo from "../../assets/imgs/theme/logo.png";
import compareIcon from "../../assets/imgs/theme/icons/icon-compare.svg";
import wishList from "../../assets/imgs/theme/icons/icon-heart.svg";
import account from "../../assets/imgs/theme/icons/icon-user.svg";
import cart from "../../assets/imgs/theme/icons/icon-cart.svg";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

const HeaderMiddle = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const[user,setUser]=useState("");
  const [token, setToken] = useState("");

  useEffect(() => {
    const localData = localStorage.getItem("userData");
    if (localData) {
      const parsedData = JSON.parse(localData);
      setToken(parsedData.token);
      setUser(parsedData);
    }
    console.log(localData)
    const removeLocalData = setTimeout(() => {
            if (token) {
              console.log("removing localData");
              localStorage.removeItem("userData");
              setToken("");
            }
          }, 3600000);
      
          return () => clearTimeout(removeLocalData);
  }, [token]); // Run once on component mount to fetch token from local storage

  // useEffect(() => {
  //   const removeLocalData = setTimeout(() => {
  //     if (token) {
  //       console.log("removing localData");
  //       localStorage.removeItem("userData");
  //       setToken("");
  //     }
  //   }, 3600000);

  //   return () => clearTimeout(removeLocalData);
  // }, []);

  const signOutHandler = async() => {
    await localStorage.removeItem("userData");
    setToken("");
    navigate("/login");
  };

  return (
    <div>
      <div className="header-middle header-middle-ptb-1 d-none d-lg-block">
        <div className="container">
          <div className="header-wrap">
            <div className="logo logo-width-1">
              <Link to="/" onClick={() => navigate("/")}>
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <div className="header-right">
              <div className="search-style-2">
                <form action="#">
                  <select className="select-active">
                    <option>All Categories</option>
                    <option>Milks and Dairies</option>
                    <option>Wines & Alcohol</option>
                    <option>Clothing & Beauty</option>
                    <option>Pet Foods & Toy</option>
                    <option>Fast food</option>
                    <option>Baking material</option>
                    <option>Vegetables</option>
                    <option>Fresh Seafood</option>
                    <option>Noodles & Rice</option>
                    <option>Ice cream</option>
                  </select>
                  <input type="text" placeholder="Search for items..." />
                </form>
              </div>
              <div className="header-action-right">
                <div className="header-action-2">
                  <div className="header-action-icon-2">
                    <a href="shop-compare.html">
                      <img
                        className="svgInject"
                        alt="Nest"
                        src={compareIcon}
                      />
                      <span className="pro-count blue">3</span>
                    </a>
                    <Link to="/compare">
                      <span className="lable ml-0">Compare</span>
                    </Link>
                  </div>
                  <div className="header-action-icon-2">
                    <a href="shop-wishlist.html">
                      <img className="svgInject" alt="Nest" src={wishList} />
                      <span className="pro-count blue">6</span>
                    </a>
                    <Link to="/wishlist">
                      <span className="lable">Wishlist</span>
                    </Link>
                  </div>
                  <div className="header-action-icon-2">
                    <a className="mini-cart-icon" href="shop-cart.html">
                      <img alt="Nest" src={cart} />
                      <span className="pro-count blue">2</span>
                    </a>
                    <Link to="/checkout">
                      <span className="lable">Cart</span>
                    </Link>
                    <div className="cart-dropdown-wrap cart-dropdown-hm2">
                      <ul>
                        <li>
                          <div className="shopping-cart-img">
                            <a href="shop-product-right.html">
                              <img
                                alt="Nest"
                                src="assets/imgs/shop/thumbnail-3.jpg"
                              />
                            </a>
                          </div>
                          <div className="shopping-cart-title">
                            <h4>
                              <a href="shop-product-right.html">
                                Daisy Casual Bag
                              </a>
                            </h4>
                            <h4>
                              <span>1 × </span>$800.00
                            </h4>
                          </div>
                          <div className="shopping-cart-delete">
                            <a href="#">
                              <i className="fi-rs-cross-small"></i>
                            </a>
                          </div>
                        </li>
                        <li>
                          <div className="shopping-cart-img">
                            <a href="shop-product-right.html">
                              <img
                                alt="Nest"
                                src="assets/imgs/shop/thumbnail-2.jpg"
                              />
                            </a>
                          </div>
                          <div className="shopping-cart-title">
                            <h4>
                              <a href="shop-product-right.html">
                                Corduroy Shirts
                              </a>
                            </h4>
                            <h4>
                              <span>1 × </span>$3200.00
                            </h4>
                          </div>
                          <div className="shopping-cart-delete">
                            <a href="#">
                              <i className="fi-rs-cross-small"></i>
                            </a>
                          </div>
                        </li>
                      </ul>
                      <div className="shopping-cart-footer">
                        <div className="shopping-cart-total">
                          <h4>
                            Total <span>$4000.00</span>
                          </h4>
                        </div>
                        <div className="shopping-cart-button">
                          <Link to="/checkout" className="outline">
                            View cart
                          </Link>
                          <Link to="/checkout">Checkout</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  {token ? (
                    <div className="header-action-icon-2">
                     <div className="header-action-icon-2">
                    < div href="shop-wishlist.html" style={{width:30,height:30, border:"1px solid red",}}>
                      <img className="svgInject" alt="Nest" src={user.profileImage}  style={{border:"50%"}}/>
                    
                    </div>
                    <a>
                      <span className="lable ml-1" >hello, {user.userName}</span>
                      </a>
                  </div>
                     
                      <div className="cart-dropdown-wrap cart-dropdown-hm2 account-dropdown">
                        <ul>
                          <li>
                            <Link to="/profile">
                              <i className="fi fi-rs-user mr-10"></i>My Account
                            </Link>
                          </li>
                          <li>
                            <a href="page-account.html">
                              <i className="fi fi-rs-location-alt mr-10"></i>
                              Order Tracking
                            </a>
                          </li>
                          <li>
                            <a href="page-account.html">
                              <i className="fi fi-rs-label mr-10"></i>My Voucher
                            </a>
                          </li>
                          <li>
                            <a href="shop-wishlist.html">
                              <i className="fi fi-rs-heart mr-10"></i>My Wishlist
                            </a>
                          </li>
                          <li>
                            <a href="page-account.html">
                              <i className="fi fi-rs-settings-sliders mr-10"></i>
                              Setting
                            </a>
                          </li>
                          <li>
                            <a onClick={signOutHandler} >
                              <i className="fi fi-rs-sign-out mr-10"></i>
                              Sign out
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <div className="header-action-icon-2">
                      <Link to="/login">
                        <img className="svgInject" alt="Nest" src={account} />
                      </Link>
                      <Link to="/login">
                        <span
                          className="lable ml-0"
                          onClick={() => navigate("/login")}
                        >
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
  );
};

export default HeaderMiddle;
