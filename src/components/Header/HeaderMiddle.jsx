import logo from "../../assets/imgs/theme/logo.png";
import wishList from "../../assets/imgs/theme/icons/icon-heart.svg";
import account from "../../assets/imgs/theme/icons/icon-user.svg";
import cartImg from "../../assets/imgs/theme/icons/icon-cart.svg";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Search2 from "../Search2";
import { useDispatch, useSelector } from "react-redux";

const HeaderMiddle = ( {allProducts} ) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState("");
  const [token, setToken] = useState("");
  const [cart, setCart] = useState([]);

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
  }, []);

  useEffect(()=>{

  },[cart])
  const signOutHandler = async () => {
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
              <Search2 allProducts = {allProducts} />
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
                          <li>
                            <Link to="/profile">
                              <i className="fi fi-rs-location-alt mr-10"></i>
                              Order Tracking
                            </Link>
                          </li>
                          <li>
                            <Link to="/profile">
                              <i className="fi fi-rs-label mr-10"></i>My Voucher
                            </Link>
                          </li>
                          <li>
                            <a>
                              <i className="fi fi-rs-heart mr-10"></i>My Wishlist
                            </a>
                          </li>
                          <li>
                            <Link to="/profile">
                              <i className="fi fi-rs-settings-sliders mr-10"></i>
                              Setting
                            </Link>
                          </li>
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
  );
};

export default HeaderMiddle;
